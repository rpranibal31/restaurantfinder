import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";
import { Loader } from "@googlemaps/js-api-loader";
import { useUserLocationStore } from "@/shared/store/locationStore";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import MiniCard from "./MiniCard";

export interface MapViewHandle {
  panTo: (coords: { lat: number; lng: number }) => void;
}

interface MapViewProps {
  restaurants: Restaurant[];
  onMarkerClick: (restaurant: Restaurant) => void;
  onUserLocationChange?: (coords: { lat: number; lng: number }) => void;
  onResetSearch?: () => void;
  userLocation?: { lat: number; lng: number };
}

const MapView = forwardRef<MapViewHandle, MapViewProps>(
  (
    {
      restaurants,
      onMarkerClick,
      onUserLocationChange,
      userLocation,
    }: MapViewProps,
    ref
  ) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [gmaps, setGmaps] = useState<typeof google.maps | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);
    const clustererRef = useRef<MarkerClusterer | null>(null);
    const userMarkerRef = useRef<google.maps.Marker | null>(null);
    const radiusCircleRef = useRef<google.maps.Circle | null>(null);
    const radiusKm = useUserLocationStore((s) => s.radius);
    const [zoomLevel, setZoomLevel] = useState<number>(10);

    const defaultCenter = { lat: -33.4489, lng: -70.6693 };

    useImperativeHandle(ref, () => ({
      panTo: (coords: { lat: number; lng: number }) => {
        if (map) {
          map.panTo(coords);
          map.setZoom(17);
        }
      },
    }));

    const placeUserMarker = (
      coords: { lat: number; lng: number },
      mapInstance: google.maps.Map
    ) => {
      if (!gmaps) return;
      if (userMarkerRef.current) {
        userMarkerRef.current.setMap(null);
      }

      userMarkerRef.current = new gmaps.Marker({
        position: coords,
        map: mapInstance,
        icon: {
          url: "/userLocation.png",
          scaledSize: new gmaps.Size(30, 30),
        },
        zIndex: 9999,
      });
    };

    useEffect(() => {
      const initMap = async () => {
        if (!mapRef.current) return;

        const loader = new Loader({
          apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
          version: "weekly",
          libraries: ["places"],
        });

        const googleLib = await loader.load();
        setGmaps(googleLib.maps);

        const instance = new googleLib.maps.Map(mapRef.current, {
          center: defaultCenter,
          zoom: 14,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: googleLib.maps.ControlPosition.TOP_RIGHT,
          },
        });

        setMap(instance);
      };

      initMap();
    }, []);

    useEffect(() => {
      if (!map || !gmaps || !userLocation) return;

      map.setCenter(userLocation);
      placeUserMarker(userLocation, map);
      onUserLocationChange?.(userLocation);
    }, [userLocation, map, gmaps, onUserLocationChange]);

    useEffect(() => {
      if (!map || !gmaps) return;

      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];

      clustererRef.current?.clearMarkers();
      clustererRef.current = null;

      if (radiusCircleRef.current) {
        radiusCircleRef.current.setMap(null);
        radiusCircleRef.current = null;
      }

      if (!userLocation || restaurants.length === 0) return;

      const newMarkers: google.maps.Marker[] = [];

      restaurants.forEach((restaurant) => {
        const marker = new gmaps.Marker({
          position: restaurant.position,
          title: restaurant.name,
          icon: {
            url: "/pin-comercio.png",
            scaledSize: new gmaps.Size(36, 36),
          },
        });

        marker.addListener("click", () => onMarkerClick(restaurant));
        newMarkers.push(marker);
      });

      markersRef.current = newMarkers;

      clustererRef.current = new MarkerClusterer({
        map,
        markers: newMarkers,
        renderer: {
          render({ count, position }) {
            return new gmaps.Marker({
              position,
              label: {
                text: String(count),
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
              },
              icon: {
                url: "/cluster.png",
                scaledSize: new gmaps.Size(50, 50),
              },
              zIndex: Number.MAX_SAFE_INTEGER,
            });
          },
        },
      });

      radiusCircleRef.current = new gmaps.Circle({
        strokeColor: "#e60028",
        strokeOpacity: 0.4,
        strokeWeight: 1,
        fillColor: "#e60028",
        fillOpacity: 0.07,
        map,
        center: userLocation,
        radius: radiusKm * 1000,
        zIndex: 1,
      });
    }, [restaurants, map, gmaps, userLocation, radiusKm, onMarkerClick]);

    useEffect(() => {
      if (!map) return;
      const listener = map.addListener("zoom_changed", () => {
        setZoomLevel(map.getZoom() || 14);
      });
      return () => listener.remove();
    }, [map]);

    return (
      <div className="relative h-full w-full">
        <div ref={mapRef} className="h-full w-full" />
        {map && gmaps && zoomLevel >= 17 && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
            {restaurants.map((restaurant) => {
              const projection = map.getProjection();
              const bounds = map.getBounds();
              if (!projection || !bounds) return null;

              const point = projection.fromLatLngToPoint(
                new gmaps.LatLng(restaurant.position.lat, restaurant.position.lng)
              );
              const topRight = projection.fromLatLngToPoint(bounds.getNorthEast());
              const bottomLeft = projection.fromLatLngToPoint(bounds.getSouthWest());
              const scale = Math.pow(2, map.getZoom() ?? 14);

              const x = (point.x - bottomLeft.x) * scale;
              const y = (point.y - topRight.y) * scale;

              return (
                <div
                  key={restaurant.id}
                  className="absolute pointer-events-auto"
                  style={{
                    transform: `translate(${x - 90}px, ${y - 110}px)`,
                  }}
                >
                  <MiniCard
                    restaurant={restaurant}
                    onClick={() => onMarkerClick(restaurant)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

export default MapView;
