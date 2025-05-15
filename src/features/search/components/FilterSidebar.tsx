import { useEffect, useRef } from "react";
import { useUserLocationStore } from "@/shared/store/locationStore";
import { useAppStore } from "@/shared/store/appStore";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const radius = useUserLocationStore((s) => s.radius);
  const setRadius = useUserLocationStore((s) => s.setRadius);

  const activeFilters = useAppStore((s) => s.activeFilters);
  const toggleFilter = useAppStore((s) => s.toggleFilter);
  const clearFilters = useAppStore((s) => s.clearFilters);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-start md:justify-start justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm"
          />

          <motion.div
            ref={overlayRef}
            initial={isDesktop ? { x: "-100%" } : { y: "100%" }}
            animate={isDesktop ? { x: 0 } : { y: 0 }}
            exit={isDesktop ? { x: "-100%" } : { y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`relative z-50 bg-white w-full md:w-80 h-full px-6 pt-4 pb-6 shadow-xl overflow-y-auto
              ${isDesktop ? "rounded-none md:fixed md:left-0 md:top-0 md:bottom-0" : "rounded-t-2xl"}`}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar filtros"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            {!isDesktop && (
              <div className="w-full flex justify-center mt-2 mb-4">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>
            )}

            <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
              Filtros
            </h2>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-700">Abierto ahora</span>
              <label className="inline-flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  checked={activeFilters.includes("Abierto ahora")}
                  onChange={() => toggleFilter("Abierto ahora")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#E60028] transition duration-200" />
                <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 transition peer-checked:translate-x-full shadow" />
              </label>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-2">Rating mínimo</p>
              <div className="flex gap-2">
                {[3.5, 4.0, 4.5].map((rating) => {
                  const label = `${rating}⭐`;
                  const isActive = activeFilters.includes(label);
                  return (
                    <button
                      key={label}
                      onClick={() => toggleFilter(label)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        isActive
                          ? "bg-[#E60028] text-white border-[#E60028]"
                          : "text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {rating}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Distancia máxima:{" "}
                <span className="text-[#E60028] font-bold">{radius} km</span>
              </p>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full accent-[#E60028] appearance-none h-2 bg-gray-200 rounded-lg outline-none"
              />
            </div>

            <button
              onClick={clearFilters}
              className="w-full mt-4 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition"
            >
              Limpiar filtros
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
