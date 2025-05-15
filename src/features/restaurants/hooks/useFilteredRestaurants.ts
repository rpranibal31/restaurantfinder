import { useAppStore } from "@/shared/store/appStore";
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";
import { useNearbyRestaurants } from "@/features/restaurants/hooks/useNearbyRestaurants";

/**
 * Hook que devuelve los restaurantes filtrados por cercanía, búsqueda, tipo de cocina y filtros activos.
 */
export function useFilteredRestaurants(): Restaurant[] {
  // Base: solo restaurantes cercanos
  const nearbyRestaurants = useNearbyRestaurants();

  // Filtros de experiencia de usuario
  const searchQuery = useAppStore((s) => s.searchQuery);
  const selectedCuisine = useAppStore((s) => s.selectedCuisine);
  const activeFilters = useAppStore((s) => s.activeFilters);

  const filtered = nearbyRestaurants.filter((restaurant) => {
    // Filtro por tipo de cocina
    const matchesCuisine = selectedCuisine
      ? restaurant.cuisine === selectedCuisine
      : true;

    // Filtro por nombre o tipo en el buscador
    const matchesSearch = searchQuery
      ? restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    // Filtro rápido "Abierto ahora"
    const matchesOpenNow = activeFilters.includes("Abierto ahora")
      ? restaurant.isOpen
      : true;

    return matchesCuisine && matchesSearch && matchesOpenNow;
  });

  // Ordenamiento si se activa "Mejor evaluados"
  if (activeFilters.includes("Mejor evaluados")) {
    return [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}
