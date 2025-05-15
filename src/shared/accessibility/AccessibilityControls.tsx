import { useEffect, useState } from "react";

export default function AccessibilityControls() {
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", fontScale.toString());
  }, [fontScale]);

  useEffect(() => {
    document.body.classList.toggle("contrast", highContrast);
  }, [highContrast]);

  const increaseFont = () => setFontScale((prev) => Math.min(prev + 0.1, 1.5));
  const decreaseFont = () => setFontScale((prev) => Math.max(prev - 0.1, 0.8));
  const toggleContrast = () => setHighContrast((prev) => !prev);

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={decreaseFont}
        className="text-sm bg-gray-100 px-2 rounded hover:bg-gray-200"
        aria-label="Disminuir tamaño de letra"
      >
        A-
      </button>
      <button
        onClick={increaseFont}
        className="text-sm bg-gray-100 px-2 rounded hover:bg-gray-200"
        aria-label="Aumentar tamaño de letra"
      >
        A+
      </button>
      <button
        onClick={toggleContrast}
        className="text-sm bg-gray-100 px-2 rounded hover:bg-gray-200"
        aria-label="Modo alto contraste"
      >
        🌓
      </button>
    </div>
  );
}
