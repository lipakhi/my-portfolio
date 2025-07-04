import React from "react";
import profileImage from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const technologies = [
    "React",
    "Tailwind CSS",
    "Python",
    "JavaScript",
    "C++",
    "Git",
    "Docker",
    "Java",
    "Express.js",
    "Node.js",
  ];


  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText px-40 py-20 transition-colors duration-300"
    >
      {/* Text Section */}
      <div className="md:w-2/3 mb-12 md:mb-0 md:pr-12 text-3xl  mb-6 ">
        <span className="font-bold text-accentPrimLight dark:text-accentPrimDark">
          <Typewriter
            words={["About Me"]}
            loop={0} // 0 means infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </span>

        <p className="mb-4 mt-6 text-lg text-lightSubText dark:text-darkSubText leading-relaxed">
          Hi! I’m Lipakhi, a software engineer based in India.
        </p>

        <p className="mb-4 text-lg text-lightSubText dark:text-darkSubText leading-relaxed">
          I enjoy building interactive, user-focused experiences for the
          web—whether that means responsive websites, dynamic UIs, or exploring
          how machine learning can enhance digital products. I'm particularly
          interested in turning ideas into real, functional systems and
          continuously explore new technologies.
        </p>

        <p className="mb-4 text-lg text-lightSubText dark:text-darkSubText leading-relaxed">
          My goal is always to build meaningful, user-friendly, and
          high-performing products that combine logic with creativity.
        </p>

        <p className="mb-6 text-lg text-lightSubText dark:text-darkSubText leading-relaxed">
          I'm currently pursuing my undergraduate degree in Computer Science,
          and will be graduating in 2026 with a strong academic record.
        </p>

        {/* Technologies */}
        <div className="mt-8">
          <p className="mb-4 font-semibold text-lg">
            Technologies I’m working with:
          </p>

          <div className="overflow-hidden relative w-full h-12 scroll-wrapper">
            <div className="absolute flex space-x-4 scroll-content animate-scroll-on-hover whitespace-nowrap">
              {[...technologies, ...technologies].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 border border-lightSubText dark:border-darkSubText text-sm rounded-full bg-white dark:bg-darkBg text-lightSubText dark:text-darkSubText shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src={profileImage}
          alt="Lipakhi Tripathy"
          className="w-40 h-40 rounded-full object-cover border-4 border-accentSecLight dark:border-accentSecDark shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
