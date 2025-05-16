import { Loader } from "@googlemaps/js-api-loader";

export const googleMapsLoader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY!,
  version: "weekly",
  libraries: ["places"],
  id:        "googleMapsScriptId",
});
