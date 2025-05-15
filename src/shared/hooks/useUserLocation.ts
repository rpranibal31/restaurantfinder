import { useUserLocationStore } from "../store/locationStore";

export function useUserLocation() {
  const location = useUserLocationStore((s) => s.location);
  const address = useUserLocationStore((s) => s.address);
  const radius = useUserLocationStore((s) => s.radius);
  const setLocation = useUserLocationStore((s) => s.setLocation);
  const setAddress = useUserLocationStore((s) => s.setAddress);
  const setRadius = useUserLocationStore((s) => s.setRadius);

  return {
    location,
    address,
    radius,
    setLocation,
    setAddress,
    setRadius,
  };
}
