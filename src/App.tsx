import { useEffect, useMemo, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

const doodleAssets = [
  "/doodles/IMG_6802.png",
  "/doodles/IMG_6803.png",
  "/doodles/IMG_6804.png",
  "/doodles/IMG_6813.png",
  "/doodles/IMG_6814.png",
  "/doodles/IMG_6815.png",
];

const doodleCount = 6;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type DoodleState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  spin: number;
};

export default function App() {
  const doodleRefs = useRef<Array<HTMLImageElement | null>>([]);

  const doodles = useMemo(() => {
    return Array.from({ length: doodleCount }, (_, index) => ({
      src: doodleAssets[index % doodleAssets.length],
      size: randomBetween(28, 56),
      opacity: randomBetween(0.24, 0.55),
      key: `${index}-${Math.round(randomBetween(1, 999999))}`,
    }));
  }, []);

  useEffect(() => {
    const state = doodleRefs.current.map((_, index) => {
      const size = doodles[index]?.size ?? 40;
      const angle = randomBetween(0, Math.PI * 2);
      const speed = randomBetween(0.45, 0.9);

      return {
        x: randomBetween(0, Math.max(window.innerWidth - size, 0)),
        y: randomBetween(0, Math.max(window.innerHeight - size, 0)),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        rotation: randomBetween(-10, 10),
        spin: randomBetween(-0.4, 0.4),
      } satisfies DoodleState;
    });

    let animationFrame = 0;
    let previousTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - previousTime) / 16.67, 2);
      previousTime = time;

      const width = window.innerWidth;
      const height = window.innerHeight;

      state.forEach((entry, index) => {
        const element = doodleRefs.current[index];
        if (!element) return;

        entry.x += entry.vx * delta;
        entry.y += entry.vy * delta;

        if (entry.x <= 0) {
          entry.x = 0;
          entry.vx = Math.abs(entry.vx);
        } else if (entry.x + entry.size >= width) {
          entry.x = width - entry.size;
          entry.vx = -Math.abs(entry.vx);
        }

        if (entry.y <= 0) {
          entry.y = 0;
          entry.vy = Math.abs(entry.vy);
        } else if (entry.y + entry.size >= height) {
          entry.y = height - entry.size;
          entry.vy = -Math.abs(entry.vy);
        }

        entry.rotation += entry.spin * delta;
        element.style.transform = `translate3d(${entry.x}px, ${entry.y}px, 0) rotate(${entry.rotation}deg)`;
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      state.forEach((entry) => {
        entry.x = Math.min(Math.max(entry.x, 0), Math.max(width - entry.size, 0));
        entry.y = Math.min(Math.max(entry.y, 0), Math.max(height - entry.size, 0));
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [doodles]);

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {doodles.map((doodle, index) => (
          <img
            key={doodle.key}
            ref={(element) => {
              doodleRefs.current[index] = element;
            }}
            src={doodle.src}
            alt=""
            className="doodle"
            style={{ width: `${doodle.size}px`, opacity: doodle.opacity }}
          />
        ))}
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[3px] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper dark:focus:bg-paper dark:focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
