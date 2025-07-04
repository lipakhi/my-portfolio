import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
      <Navbar />
      <main className="relative">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ParticlesBackground />
      <Footer />
    </div>
  );
}

export default App;
