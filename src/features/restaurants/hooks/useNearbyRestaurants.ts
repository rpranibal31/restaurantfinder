import { getDistanceKm } from "@/shared/lib/distance";
import { useAppStore } from "@/shared/store/appStore";
import { useUserLocationStore } from "@/shared/store/locationStore";

/**
 * Devuelve los restaurantes dentro del radio configurado desde la ubicación del usuario.
 * Si no hay ubicación definida, retorna todos.
 */
export function useNearbyRestaurants() {
  const restaurants = useAppStore((s) => s.restaurants);
  const userLocation = useUserLocationStore((s) => s.location);
  const radiusKm = useUserLocationStore((s) => s.radius);

  // Si no hay ubicación, devolvemos todos por defecto
  if (!userLocation) return restaurants;

  return restaurants.filter((restaurant) => {
    const distance = getDistanceKm(userLocation, restaurant.position);

    // Puedes descomentar esto para debug:
    // console.debug(`[Nearby] ${restaurant.name} está a ${distance} km`);

    return distance <= radiusKm;
  });
}
