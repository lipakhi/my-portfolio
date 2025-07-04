import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import LeetCodeIcon from "../components/LeetCodeIcon";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [animate, setAnimate] = useState(false);
  const [jump, setJump] = useState(false);

  // Initial dangle on load
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 1600); // remove after animation
    return () => clearTimeout(timeout);
  }, []);

  const handleToggle = () => {
    toggleTheme();

    // Trigger jump
    setJump(true);
    setTimeout(() => setJump(false), 400); // Match animation duration
  };

  const lightImage = theme === "dark" ? "/light-on.svg" : "/light-off.svg";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-300 px-4"
    >
      {/* Hanging Light */}
      <div
        className={`absolute top-0 left-8 origin-top z-10 flex flex-col items-center ${
          animate ? "animate-dangle" : ""
        }`}
      >
        {/* Wire */}
        <div className="w-px h-40 bg-lightText dark:bg-darkText"></div>

        {/* Light Image */}
        <img
          src={lightImage}
          alt="hanging light"
          width={90}
          height={90}
          onClick={handleToggle}
          className={`cursor-pointer drop-shadow-[0_0_20px_rgba(94,234,212,0.5)] dark:drop-shadow-[0_0_20px_rgba(192,132,252,0.5)] transition duration-500 ease-in-out ${
            jump ? "animate-jump" : ""
          }`}
        />
      </div>

      <div className="text-center max-w-4xl">
        <p className="text-sm mb-2 text-lightSubText dark:text-darkSubText">
          Hi, I'm
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-accentPrimLight dark:text-accentPrimDark mb-3 text-glow">
          LIPAKHI TRIPATHY
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-lightText dark:text-darkText">
          Software Engineer based in India
        </h2>

        <p className="text-md md:text-lg font-medium text-accentSecLight dark:text-accentSecDark mb-6">
          Full Stack Developer • Machine Learning Enthusiast
        </p>

        <p className="text-lg md:text-xl font-medium mb-8">
          I enjoy{" "}
          <span className="text-accentPrimLight dark:text-accentPrimDark font-semibold">
            <Typewriter
              words={[
                "building interactive web experiences",
                "creating clean and functional UIs",
                "solving real-world problems with code",
                "learning and applying new technologies",
                "bringing designs to life with React",
                "exploring how ML enhances the web",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1600}
            />
          </span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-2xl mb-8 text-lightSubText dark:text-darkSubText">
          <a
            href="https://github.com/lipakhi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-accentSecLight transform hover:-translate-y-1 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/lipakhi-tripathy/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin className="hover:text-accentSecLight transform hover:-translate-y-1 transition" />
          </a>
          <a
            href="https://leetcode.com/lipakhi_tripathy"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="hover:text-accentSecLight transform hover:-translate-y-1 transition" />
          </a>
        </div>

        {/* Resume Button */}

        <a
  href="/resume.pdf"
  download
  className="group inline-flex items-center gap-2 px-6 py-2 border-2 border-accentSecLight dark:border-accentSecDark text-accentSecLight dark:text-accentSecDark hover:bg-accentSecLight dark:hover:bg-accentSecDark hover:!text-black font-semibold rounded-md transition duration-300"
>
  <span className="flex items-center">
    <FaDownload className="mr-3 mt-1 transition-transform duration-500 group-hover:animate-spinOnce" />
    Download Resume
  </span>
</a>

      </div>
    </section>
  );
};

export default Home;
