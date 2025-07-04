import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-gray-200 dark:bg-slate-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer text-accentPrimLight dark:text-accentPrimDark">
          &lt;Lipakhi /&gt;
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-lightText dark:text-darkText">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer hover:text-accentSecLight dark:hover:text-accentSecDark transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-lightSubText dark:bg-darkSubText hover:bg-accentSecLight dark:hover:bg-accentSecDark text-white transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
