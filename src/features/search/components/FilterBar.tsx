import { Button } from "@/shared/ui/button";
import { QUICK_FILTERS } from "@/shared/constants/filters";
import { useAppStore } from "@/shared/store/appStore";

interface Props {
  onOpenSidebar: () => void;
}

export default function FilterBar({ onOpenSidebar }: Props) {
  const activeFilters = useAppStore((s) => s.activeFilters);
  const toggleFilter = useAppStore((s) => s.toggleFilter);

  return (
    <div className="flex gap-2 overflow-x-auto py-3 px-1 pb-0 scrollbar-hide">
      <Button
        variant="default"
        className="bg-[#E60028] hover:bg-[#c60020] text-white text-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-1 whitespace-nowrap"
        onClick={onOpenSidebar}
      >
        <span className="material-icons text-sm">tune</span>
        Filtros
      </Button>

      {QUICK_FILTERS.map((filter) => {
        const isActive = activeFilters.includes(filter);
        return (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`text-sm px-4 py-2 rounded-full shadow-sm whitespace-nowrap border transition
              ${
                isActive
                  ? "bg-[#E60028] text-white border-[#E60028]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
