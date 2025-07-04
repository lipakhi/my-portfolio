import { motion } from "framer-motion";
import { FaCode, FaBrain, FaCogs } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const sections = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I create responsive, user-friendly web applications using modern frontend and backend technologies. My focus is on building scalable, maintainable solutions with clean architecture and seamless user experiences.",
    skills: [
      "HTML, CSS, JavaScript",
      "React, Tailwind CSS, Vite",
      "Node.js, Express.js, MongoDB",
    ],
  },
  {
    id: "02",
    icon: <FaBrain />,
    title: "Machine Learning",
    description:
      "With a strong foundation in core ML concepts, I build models for classification, regression, and prediction. I explore deep learning and NLP to push the boundaries of intelligent systems.",
    skills: [
      "Python, NumPy, Pandas",
      "Scikit-Learn, TensorFlow",
      "Deep Learning, NLP",
    ],
  },
  {
    id: "03",
    icon: <FaCogs />,
    title: "Optimization",
    description:
      "I refine systems for performance, scalability, and efficiency. From code refactoring to backend data flow, I aim for clean, high-performing, and reliable systems.",
    skills: [
      "Data Structures & Algorithms",
      "OOP, DBMS, OS Fundamentals",
      "Code Profiling, Refactoring",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300"
    >
      <div className="sticky top-20 z-50 bg-lightBg dark:bg-darkBg p-8 font-bold text-center text-3xl text-accentSecLight dark:text-accentSecDark">
        <Typewriter
          words={["Skills"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={2000}
        />
      </div>

      <div className="relative">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`sticky top-[150px] z-[${index}] bg-lightBg dark:bg-darkBg px-6 py-12 border-b border-lightSubText/20 dark:border-darkSubText/20`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeUp}
          >
            <div className="flex flex-col md:flex-row md:gap-10 max-w-4xl mx-auto mb-48">
              <div className="text-4xl text-accentSecLight dark:text-accentSecDark min-w-[60px]">
                {section.icon}
              </div>
              <div className="h-full">
                <h3 className="text-3xl font-bold mb-4 text-accentPrimLight dark:text-accentPrimDark z-10 relative bg-lightBg dark:bg-darkBg">
                  {section.title}
                </h3>
                <div className="z-0 relative">
                  <p className="mb-6 text-base text-lightSubText dark:text-darkSubText leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-3">
                    {section.skills.map((skill, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-lg text-lightText dark:text-darkText"
                      >
                        <span className="text-accentPrimLight dark:text-accentPrimDark font-bold">
                          0{idx + 1}.
                        </span>
                        <span className="font-medium">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
