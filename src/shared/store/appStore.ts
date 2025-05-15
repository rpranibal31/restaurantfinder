import { create } from "zustand";
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";

interface AppState {
  restaurants: Restaurant[];
  searchQuery: string;
  selectedCuisine: string | null;
  activeFilters: string[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCuisine: (cuisine: string | null) => void;
  toggleFilter: (filter: string) => void;
  clearFilters: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  restaurants: [],
  searchQuery: "",
  selectedCuisine: null,
  activeFilters: [],

  setRestaurants: (restaurants) => set({ restaurants }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCuisine: (cuisine) => set({ selectedCuisine: cuisine }),

  toggleFilter: (filter) =>
    set((state) => ({
      activeFilters: state.activeFilters.includes(filter)
        ? state.activeFilters.filter((f) => f !== filter)
        : [...state.activeFilters, filter],
    })),

  clearFilters: () => set({ activeFilters: [] }),
}));
