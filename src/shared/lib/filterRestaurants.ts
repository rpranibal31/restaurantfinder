// src/lib/filterRestaurants.ts
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";

export function filterRestaurants(
  restaurants: Restaurant[],
  searchQuery: string,
  activeFilters: string[]
): Restaurant[] {
  const query = searchQuery.toLowerCase();

  return restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.cuisine.toLowerCase().includes(query);

    const matchesFilters = activeFilters.every((filter) => {
      if (filter === "Abierto ahora") return restaurant.isOpen;
      if (filter === "Mejor evaluados") return restaurant.rating >= 4;
      return true;
    });

    return matchesSearch && matchesFilters;
  });
}
