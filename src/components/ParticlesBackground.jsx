// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground = () => {
     const { theme } = useTheme(); 

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-10 h-full w-full pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "out",
          },
          color: {
            value: theme === "dark"
              ? ["#C084FC", "#5EEAD4"]
              : ["#7C3AED", "#14B8A6"],
          },
          opacity: {
            value: 0.1,
            random: true,
          },
          shape: {
            type: "circle",
          },
          links: {
            enable: false,
          },
          shadow: {
            enable: true,
            color: "#C084FC",
            blur: 10,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
