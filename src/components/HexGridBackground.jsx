import { useCallback, useEffect, useRef } from "react";

// Renders the threejs-components Grid1 background behind the app.
// Uses CDN module to avoid adding a new dependency to package.json.
const HexGridBackground = () => {
  const canvasRef = useRef(null);
  const bgRef = useRef(null);

  const setTheme = useCallback(() => {
    const bg = bgRef.current;
    if (!bg || !bg.grid) return;

    bg.grid.setColors([0xffffff, 0x87ceeb, 0xffffff]);
    if (bg.grid.light1) {
      bg.grid.light1.color.set(0x87ceeb);
      bg.grid.light1.intensity = 300;
    }
    if (bg.grid.light2) {
      bg.grid.light2.color.set(0xffffff);
      bg.grid.light2.intensity = 150;
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    let localBg = null;

    const loadBackground = async () => {
      try {
        const { default: Grid1Background } = await import(
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js"
        );
        if (!isMounted || !canvasRef.current) return;
        localBg = Grid1Background(canvasRef.current);
        bgRef.current = localBg;
        setTheme();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to load hex grid background", err);
      }
    };

    loadBackground();

    return () => {
      isMounted = false;
      if (localBg && typeof localBg.dispose === "function") {
        localBg.dispose();
      }
      bgRef.current = null;
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        id="webgl-canvas"
        className="absolute inset-0 w-full h-full"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="pointer-events-auto absolute bottom-4 w-full flex justify-center">
          <button
            type="button"
            onClick={setTheme}
            className="px-4 py-2 bg-white/50 text-black font-semibold rounded border border-gray-400 backdrop-blur hover:bg-white/70 transition"
          >
            Set Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default HexGridBackground;
