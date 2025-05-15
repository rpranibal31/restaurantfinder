import { useState } from "react";
import RestaurantList from "@/features/restaurants/components/RestaurantList";
import SearchInput from "./SearchInput";
import FilterBar from "./FilterBar";
import FilterSidebar from "./FilterSidebar";
import { Skeleton } from "@/shared/ui/skeleton";
import { useFilteredRestaurants } from "@/features/restaurants/hooks/useFilteredRestaurants";
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";

interface Props {
  isLoading: boolean;
  onRestaurantSelect: (restaurant: Restaurant) => void;
  userLocation?: { lat: number; lng: number };
  onExpandChange?: (expanded: boolean) => void;
}
export default function SearchPanel({
  isLoading,
  onRestaurantSelect,
  userLocation,
  onExpandChange,
}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);


  const filteredRestaurants = useFilteredRestaurants();
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === null) return;
    const offset = e.touches[0].clientY - startY;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (dragOffset < -50) {
      setExpanded(true);
      onExpandChange?.(true);
    } else if (dragOffset > 50) {
      setExpanded(false);
      onExpandChange?.(false);
    }
    setStartY(null);
    setDragOffset(0);
  };

  return (
    <div
      className="fixed md:static bottom-0 left-0 right-0 z-30 bg-white shadow-lg md:shadow-none transition-all duration-300 flex flex-col md:h-full"
      style={{
        height: expanded
          ? "70vh"
          : typeof window !== "undefined" && window.innerWidth < 768
          ? "280px"
          : "100vh",
        maxHeight: "95vh",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full flex justify-center py-1 md:hidden">
        <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
      </div>

      <div className="p-4 sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <SearchInput />
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <FilterBar onOpenSidebar={() => setIsSidebarOpen(true)} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="w-24 h-24 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <RestaurantList
            restaurants={filteredRestaurants}
            onRestaurantSelect={onRestaurantSelect}
            userLocation={userLocation}
          />
        )}
      </div>

      {/* Filtros laterales */}
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
