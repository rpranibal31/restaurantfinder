// src/features/restaurants/components/RestaurantDetailModal.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import type { Restaurant } from "@/features/restaurants/types/restaurant.types";
import { googleMapsLoader } from "@/shared/hooks/googleMapsLoader";

interface Props {
  restaurant: Restaurant;
  isOpen: boolean;
  onClose: () => void;
}

export default function RestaurantDetailModal({
  restaurant,
  isOpen,
  onClose,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [firstDragDone, setFirstDragDone] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);

  const isOpenText = restaurant.isOpen
    ? `Abierto hasta ${restaurant.closingTime}`
    : `Cerrado · Abre a las ${restaurant.openingTime}`;
  const statusColor = restaurant.isOpen ? "text-green-600" : "text-red-500";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setIsDesktop(desktop);
    setExpanded(desktop);
  }, []);

  useEffect(() => {
    if (!isOpen || !restaurant.position) return;

    const timeout = setTimeout(() => {
      if (!mapRef.current) return;

      googleMapsLoader.load().then((google) => {
        const map = new google.maps.Map(mapRef.current!, {
          center: restaurant.position,
          zoom: 16,
          disableDefaultUI: true,
        });

        new google.maps.Marker({
          position: restaurant.position,
          map,
          title: restaurant.name,
        });
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [isOpen, restaurant]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isDesktop) return;
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDesktop || startY === null) return;
    setDragOffset(e.touches[0].clientY - startY);
  };

  const handleTouchEnd = () => {
    if (isDesktop) return;

    if (dragOffset < -50) {
      setExpanded(true);
      setFirstDragDone(true);
    } else if (dragOffset > 50) {
      setExpanded(false);
      setFirstDragDone(true);
    }

    setStartY(null);
    setDragOffset(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full p-0 overflow-hidden rounded-lg">
        {!isDesktop && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 text-gray-500 hover:text-gray-800"
            aria-label="Cerrar modal"
          >
            <span className="material-icons">close</span>
          </button>
        )}

        <DialogTitle className="sr-only">{restaurant.name}</DialogTitle>
        <DialogDescription className="sr-only">
          {restaurant.description}
        </DialogDescription>

        <div
          className={`relative w-full transition-all duration-300 ${
            expanded
              ? "h-60 sm:h-72"
              : "h-[calc(100vh-6rem)] sm:h-[calc(100vh-8rem)]"
          }`}
        >
          <img
            src={restaurant.imageUrl}
            alt={`Vista previa de ${restaurant.name}`}
            className="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-t-lg"
          />
          <div
            ref={mapRef}
            className="w-full h-full absolute top-0 left-0 z-10 rounded-t-lg"
            style={{ backgroundColor: "#f3f4f6" }}
          />
          <div className="div-contrast-grandient absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-white/80 to-transparent p-6 pb-10">
            <h2 className="text-black text-3xl font-semibold">
              {restaurant.name}
            </h2>
          </div>
        </div>

        <div
          className={`bg-white transition-all duration-300 ease-in-out ${
            expanded ? "max-h-[70vh]" : "max-h-[40vh]"
          } overflow-y-auto`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {!isDesktop && (
            <div className="w-full flex flex-col items-center py-2">
              <div
                className={`w-10 h-1.5 bg-gray-300 rounded-full ${
                  !firstDragDone ? "animate-pulse-once" : ""
                }`}
              />
              {!firstDragDone && (
                <div className="text-xs text-gray-400 mt-1">
                  Desliza para ver más detalles
                </div>
              )}
            </div>
          )}

          <div className="px-6 pb-4">
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {restaurant.cuisine}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-icons text-yellow-500 text-sm">
                  star
                </span>
                {restaurant.rating}
              </span>
            </div>
          </div>

          <div className="px-6 space-y-6 text-sm text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-1">Horario</h3>
                  <p className={`${statusColor} font-medium`}>{isOpenText}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Dirección</h3>
                  <p>{restaurant.address}</p>
                  <div className="mt-2">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.position.lat},${restaurant.position.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium flex items-center hover:underline"
                    >
                      <span className="material-icons text-sm mr-1">map</span>
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Contacto</h3>
                  <p>{restaurant.phone}</p>
                  {restaurant.website && (
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      {new URL(restaurant.website).hostname}
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-1">Descripción</h3>
                  <p>{restaurant.description}</p>
                </div>

                {restaurant.features?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Características
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {restaurant.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-1 text-gray-600"
                        >
                          <span className="material-icons text-green-500 text-sm">
                            check_circle
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t mt-6 p-4 flex justify-between items-center bg-gray-50">
            <Button variant="outline">
              <span className="material-icons text-sm mr-1">
                bookmark_border
              </span>
              Guardar
            </Button>
            <Button variant="outline">
              <span className="material-icons text-sm mr-1">share</span>
              Compartir
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
