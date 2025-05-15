import { useUserLocation } from "@/shared/hooks/useUserLocation";

const options = [2, 5, 10];

export default function RadiusSelector() {
  const { radius, setRadius } = useUserLocation();

  return (
    <div className="flex gap-2">
      {options.map((km) => (
        <button
          key={km}
          onClick={() => setRadius(km)}
          className={`text-sm px-3 py-1 rounded-full border ${
            radius === km
              ? "bg-[#E60028] text-white border-[#E60028]"
              : "border-gray-300 text-gray-700"
          }`}
        >
          {km} km
        </button>
      ))}
    </div>
  );
}
