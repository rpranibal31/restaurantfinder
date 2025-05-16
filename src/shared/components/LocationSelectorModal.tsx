import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserLocationStore } from "@/shared/store/locationStore";
import { googleMapsLoader } from "@/shared/hooks/googleMapsLoader";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LocationSelectorModal({ open, onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { setLocation, setAddress } = useUserLocationStore();
  const [addressInput, setAddressInput] = useState("");

  useEffect(() => {
    if (!open) return;

    googleMapsLoader.load().then((google) => {
      if (inputRef.current && !autocompleteRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(
          inputRef.current,
          {
            fields: ["geometry", "formatted_address"],
            componentRestrictions: { country: "cl" },
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.geometry || !place.formatted_address) return;

          const coords = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };

          setLocation(coords);
          setAddress(place.formatted_address);
          setAddressInput(place.formatted_address);
          onClose();
        });

        autocompleteRef.current = autocomplete;
      }
    });
  }, [open, setLocation, setAddress, onClose]);

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("La geolocalización no es compatible con este navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(coords);
        setAddress("Mi ubicación actual");
        onClose();
      },
      () => {
        alert("No se pudo obtener la ubicación.");
      }
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="location-modal"
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-md rounded-xl shadow-xl p-8 relative"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-1 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Cerrar modal"
            >
              <span className="material-icons">close</span>
            </button>

            <input
              ref={inputRef}
              type="text"
              placeholder="Busca tu dirección..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
            />

            <button
              onClick={handleUseMyLocation}
              className="w-full bg-[#E60028] text-white py-3 rounded-md flex items-center justify-center gap-2 text-sm font-medium shadow hover:bg-[#cc0022] transition"
            >
              <span className="material-icons text-base">my_location</span>
              Usar ubicación actual
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
