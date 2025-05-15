import type { Restaurant } from "@/features/restaurants/types/restaurant.types";

interface Props {
  restaurant: Restaurant;
  onClick?: () => void;
}

export default function MiniCard({ restaurant, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-2 w-[180px] cursor-pointer transition hover:shadow-xl"
    >
      <h3 className="text-sm font-semibold text-gray-800 truncate">
        {restaurant.name}
      </h3>
      <p className="text-xs text-gray-500 truncate">
        {restaurant.address}
      </p>
      <div className="mt-1 flex items-center justify-between text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <span className="material-icons text-yellow-500 text-sm">star</span>
          {restaurant.rating}
        </span>
        {restaurant.isOpen ? (
          <span className="text-green-600 font-medium">Abierto</span>
        ) : (
          <span className="text-red-500 font-medium">Cerrado</span>
        )}
      </div>
    </div>
  );
}
