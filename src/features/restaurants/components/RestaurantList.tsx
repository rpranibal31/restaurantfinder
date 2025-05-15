import type { Restaurant } from "@/features/restaurants/types/restaurant.types";
import RestaurantItem from "@/features/restaurants/components/RestaurantItem";

interface Props {
  restaurants: Restaurant[];
  onRestaurantSelect: (r: Restaurant) => void;
  userLocation?: { lat: number; lng: number };
}

export default function RestaurantList({
  restaurants,
  onRestaurantSelect,
  userLocation,
}: Props) {
  if (restaurants.length === 0) {
    return (
      <div className="div-contrast flex flex-col items-center justify-center text-center text-gray-500 py-12 px-4">
        <span className="material-icons text-5xl text-gray-400 mb-2">search_off</span>
        <p className="text-base font-medium">No se encontraron comercios</p>
        <p className="text-sm text-gray-400 mt-1">
          Prueba con otro nombre, dirección, tipo de comida o ajusta tus filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onSelect={() => onRestaurantSelect(restaurant)}
          userLocation={userLocation}
        />
      ))}
    </div>
  );
}
