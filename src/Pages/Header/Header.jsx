import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { Icons } from "../../components/Icons";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 520) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="absolute w-full z-50">
      <nav
        className={
          isOpen
            ? "absolute left-2 right-2 pt-2 px-4 pb-4 items-start flex-col justify-start m-2 text-black transition-all duration-200 border bg-white"
            : "flex items-center justify-between mx-auto max-w-5xl pt-4 relative lg:pr-0 lg:pl-0 pr-4 pl-4"
        }
      >
        <div>
          <h2 className="text-white font-qwitch text-5xl capitalize">
            Davinder Kumar
          </h2>
        </div>
        <div className="flex space-x-7">
          {!isOpen
            ? Icons.map((name) => (
                <a
                  className="text-white cursor-pointer transition-all duration-200 hover:text-whiteGray hidden sm:block"
                  href={name.link}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={name.icon} />
                </a>
              ))
            : Icons.map((name) => (
                <motion.div
                  className="link-name"
                  key={name}
                  animate={{ x: !isOpen ? 200 : 5 }}
                  transition={{ type: "spring", duration: 4, bounce: 0.7 }}
                >
                  <a href={name.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="link" icon={name.icon} />
                    {name.name}
                  </a>
                </motion.div>
              ))}
        </div>
        <div className="absolute block top-7 right-4 w-7 h-7  cursor-pointer sm:hidden">
          {!isOpen ? (
            <div className="text-white">
              <svg
                onClick={() => setIsOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
          ) : (
            <div className="text-black">
              <svg
                onClick={() => setIsOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
