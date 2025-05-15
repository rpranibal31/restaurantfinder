import { Input } from "@/shared/ui/input";
import { useAppStore } from "@/shared/store/appStore";

export default function SearchInput() {
  const searchQuery = useAppStore((s) => s.searchQuery);
  const setSearchQuery = useAppStore((s) => s.setSearchQuery);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-400">
        <span className="material-icons text-base">search</span>
      </span>
      <Input
        type="text"
        placeholder="Buscar por nombre o tipo de comida..."
        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {searchQuery && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={clearSearch}
          aria-label="Limpiar búsqueda"
        >
          <span className="material-icons text-sm">close</span>
        </button>
      )}
    </div>
  );
}
