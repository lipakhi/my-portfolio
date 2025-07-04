import { FaGithub, FaLinkedin } from "react-icons/fa";
import LeetCodeIcon from "../components/LeetCodeIcon";
import { Link } from "react-scroll";

const Footer = () => {
  const menuItems = ["home", "about", "projects", "skills", "contact"];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/lipakhi",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/lipakhi-tripathy/",
    },
    {
      name: "LeetCode",
      icon: <LeetCodeIcon className="w-5 h-5" />,
      link: "https://leetcode.com/lipakhi_tripathy",
    },
  ];

  return (
    <footer className="bg-lightBg dark:bg-darkBg text-lightSubText dark:text-darkSubText border-t border-accentSecLight/30 dark:border-accentSecDark/30 py-10 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
        
        {/* Menu */}
        <div>
          <h4 className="mb-3 font-semibold text-lightText dark:text-darkText uppercase tracking-wide text-xs">
            Menu
          </h4>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className="cursor-pointer hover:text-accentSecLight dark:hover:text-accentSecDark transition-colors capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="mb-3 font-semibold text-lightText dark:text-darkText uppercase tracking-wide text-xs">
            Socials
          </h4>
          <ul className="space-y-2">
            {socials.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accentSecLight dark:hover:text-accentSecDark transition-colors"
                >
                  {icon} <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-start sm:items-end justify-center sm:justify-end text-xs text-center sm:text-right">
          <p className="text-lightSubText dark:text-darkSubText leading-relaxed">
            © {new Date().getFullYear()} Lipakhi Tripathy <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
