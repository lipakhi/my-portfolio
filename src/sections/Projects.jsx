import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Restaurant Reservation Web App",
    description:
      "A full-stack restaurant reservation system with MERN architecture. Features MongoDB Atlas, reusable components, and an intuitive booking flow.",
    tags: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    link: "https://github.com/lipakhi/Restaurant-Reservation-BookMyBite",
    image: "/assets/restaurant.png",
  },
  {
    title: "Book Recommendation System",
    description:
      "Built a recommendation system using TF-IDF and cosine similarity with a Streamlit interface. Integrated Google Books API for real-time metadata.",
    tags: ["Python", "NLP", "TF-IDF", "Streamlit", "Google Books API"],
    link: "https://github.com/lipakhi/Book-Recommendation-System",
    image: "/assets/bookrec.png",
  },
  {
    title: "Movie Search App",
    description:
      "Created a dynamic React app using public APIs to fetch real-time movie data. Features include search, favorites, and responsive design.",
    tags: ["React", "JavaScript", "Vite", "CSS"],
    link: "https://github.com/lipakhi/movie-search-app",
    image: "/assets/moviesearch.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="z-50 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText py-20 px-6 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-16 text-center text-accentPrimLight dark:text-accentPrimDark">
        <span className="font-bold text-accentPrimLight dark:text-accentPrimDark">
                  <Typewriter
                    words={["Projects"]}
                    loop={0} // 0 means infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={2000}
                  />
                </span>
      </h2>

      <div className="space-y-20 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-lightBg dark:bg-darkBg border border-accentSecLight dark:border-accentSecDark rounded-xl shadow-md p-6 md:p-10 transition-transform duration-300 hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-accentPrimLight dark:text-accentPrimDark mb-2">
                {project.title}
              </h3>
              <p className="text-lightSubText dark:text-darkSubText text-base md:text-lg mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-accentSecLight dark:text-accentSecDark font-mono mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 border border-current rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accentSecLight dark:text-accentSecDark hover:underline"
              >
                View Project <ExternalLink size={14} />
              </a>
            </div>

            {/* <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-md hover:scale-105 transition-transform duration-500"
              />
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
