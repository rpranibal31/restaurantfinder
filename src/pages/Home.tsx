import { useMemo, useState, useEffect, useRef } from "react";
import Header from "@/app/layout/Header";
import SearchPanel from "@/features/search/components/SearchPanel";
import MapView from "@/features/map/components/MapView";
import RestaurantDetailModal from "@/features/restaurants/components/RestaurantDetailModal";
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";
import { restaurants as mockRestaurants } from "@/shared/lib/mockRestaurants";
import { filterRestaurants } from "@/shared/lib/filterRestaurants";
import { getDistanceKm } from "@/shared/lib/utils";
import { useAppStore } from "@/shared/store/appStore";
import { useUserLocationStore } from "@/shared/store/locationStore";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import LocationSelectorModal from "@/shared/components/LocationSelectorModal";

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isLoading = false;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const location = useUserLocationStore((s) => s.location);
  const mapRef = useRef<{
    panTo: (coords: { lat: number; lng: number }) => void;
  }>(null);

  useEffect(() => {
    useAppStore.getState().setRestaurants(mockRestaurants);
  }, []);

  useEffect(() => {
    if (!location) {
      setIsModalOpen(true);
    }
  }, [location]);

  const {
    location: userLocation,
    setLocation,
    radius,
  } = useUserLocationStore();

  const searchQuery = useAppStore((s) => s.searchQuery);
  const activeFilters = useAppStore((s) => s.activeFilters);
  const setSearchQuery = useAppStore((s) => s.setSearchQuery);
  const setSelectedCuisine = useAppStore((s) => s.setSelectedCuisine);
  const clearFilters = useAppStore((s) => s.clearFilters);
  const filtered = filterRestaurants(
    mockRestaurants,
    searchQuery,
    activeFilters
  );

  const filteredRestaurants = useMemo(() => {
    if (!userLocation) return filtered;
    return [...filtered]
      .filter((r) => getDistanceKm(userLocation, r.position) <= radius)
      .sort(
        (a, b) =>
          getDistanceKm(userLocation, a.position) -
          getDistanceKm(userLocation, b.position)
      );
  }, [filtered, userLocation, radius]);

  useEffect(() => {
    if (filteredRestaurants.length === 1 && mapRef.current) {
      const only = filteredRestaurants[0];
      mapRef.current.panTo(only.position);
    }
  }, [filteredRestaurants]);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetSearchAndLocation = () => {
    setSearchQuery("");
    setSelectedCuisine(null);
    clearFilters?.();
  };

  return (
    <>
      <Header />
      <LocationSelectorModal open={isModalOpen} onClose={handleCloseModal} />

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/3 lg:w-1/4 h-full overflow-y-auto bg-white border-r z-10 shadow-md">
          <div className="block md:hidden w-full h-[calc(100vh-120px)]">
            <MapView
              ref={mapRef}
              restaurants={filteredRestaurants}
              onMarkerClick={handleRestaurantSelect}
              onUserLocationChange={setLocation}
              onResetSearch={handleResetSearchAndLocation}
              userLocation={userLocation}
            />
          </div>
          <SearchPanel
            isLoading={isLoading}
            onRestaurantSelect={handleRestaurantSelect}
            userLocation={userLocation}
          />
        </div>
        <div className="hidden md:block flex-1 relative z-0">
          {isDesktop && (
            <MapView
              ref={mapRef}
              restaurants={filteredRestaurants}
              onMarkerClick={handleRestaurantSelect}
              onUserLocationChange={setLocation}
              onResetSearch={handleResetSearchAndLocation}
              userLocation={userLocation}
            />
          )}
        </div>
      </div>

      {selectedRestaurant && (
        <RestaurantDetailModal
          restaurant={selectedRestaurant}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
