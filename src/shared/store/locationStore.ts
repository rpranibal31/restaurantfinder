import { create } from "zustand";

type Location = {
  lat: number;
  lng: number;
};

interface LocationState {
  location: Location | null;
  address: string;
  radius: number;
  setLocation: (coords: Location) => void;
  setAddress: (addr: string) => void;
  setRadius: (r: number) => void;
}

export const useUserLocationStore = create<LocationState>()((set) => ({
  location: { lat: -33.437817, lng: -70.650536 },  
  address: "Plaza de La Moneda, Santiago, Chile",  
  radius: 1,
  setLocation: (coords) => set({ location: coords }),
  setAddress: (addr) => set({ address: addr }),
  setRadius: (r) => set({ radius: r }),
}));
