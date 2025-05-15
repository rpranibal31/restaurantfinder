import { useState } from "react";
import { Button } from "@/shared/ui/button";
import AccessibilityControls from "@/shared/accessibility/AccessibilityControls";
import { useUserLocationStore } from "@/shared/store/locationStore";
import LocationSelectorModal from "@/shared/components/LocationSelectorModal";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { address, radius } = useUserLocationStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-12xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://servicios.edenred.cl/BuscadorComerciosEdenred/resources/images/logo-edenred.png"
            alt="Edenred logo"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-lg font-semibold text-gray-800 hidden sm:block">
            Buscador de Comercios
          </h1>
        </div>

        {address && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm text-gray-700 hover:text-primary flex items-center gap-1"
            title="Haz clic para cambiar tu ubicación"
          >
            <span className="material-icons text-base text-primary">place</span>
            <span className="truncate max-w-[200px] sm:max-w-[300px]">
              {address}
            </span>
            <span className="text-gray-500 ml-1 hidden sm:inline">
              ({radius} km)
            </span>
            <span className="material-icons text-xs text-gray-400">edit</span>
          </button>
        )}

        <div className="hidden md:flex items-center gap-4">
          <AccessibilityControls />
          <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm font-medium">
            <span className="material-icons text-sm mr-2">login</span>
            Iniciar Sesión
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-gray-600 hover:text-gray-800"
          title="Abrir menú"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="material-icons text-xl">menu</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 bg-white w-72 h-full shadow-lg p-4 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Menú</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <span className="material-icons text-gray-600">close</span>
              </button>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Accesibilidad
              </h3>
              <AccessibilityControls />
            </div>

            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 w-full justify-center">
              <span className="material-icons text-sm mr-2">login</span>
              Iniciar Sesión
            </Button>
          </div>
        </div>
      )}
      <LocationSelectorModal open={isModalOpen} onClose={handleClose} />

    </header>
  );
}
