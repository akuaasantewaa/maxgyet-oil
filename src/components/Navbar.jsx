import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import MaxgyetLogo from "../assets/logo.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would apply dark mode classes to the document here
  };

  // Navbar menu items with section links
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "About", link: "#about-innovator" },
    { name: "Product", link: "#products" },
    { name: "Contact", link: "#contact" },
  ];

  // Handle navigation
  const handleNavigation = (item) => {
    setActiveItem(item.name);
    if (isOpen) setIsOpen(false);

    // Only prevent default and handle if you're using a single-page application
    // window.location.href = item.link; // Use this for multi-page applications

    // Smooth scroll to section if it's on the same page
    const element = document.getElementById(item.link.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fff] shadow-lg"
          : "bg-[#fff] bg-opacity-90 backdrop-blur-sm"
      } ${darkMode ? "bg-gray-900 text-white" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={MaxgyetLogo}
            alt="Maxgyet Oil Logo"
            className="w-16 h-16 rounded-full"
          />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              className={`cursor-pointer relative ${
                activeItem === item.name
                  ? darkMode
                    ? "text-[#338a60]"
                    : "text-[#32ba78]"
                  : darkMode
                  ? "text-gray-300"
                  : "text-gray-900"
              } hover:${darkMode ? "text-[#5ceda7]" : "text-blue-600"}`}
              onClick={() => handleNavigation(item)}
              whileHover={{ scale: 1.1 }}
            >
              <a href={item.link}>{item.name}</a>
              {activeItem === item.name && (
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    darkMode ? "bg-[#5ceda7]" : "bg-[#338a60]"
                  }`}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label="Search"
          >
            <Search
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
          </button> */}
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
          >
            <ShoppingCart
              size={20}
               className={darkMode ? "text-white" : "text-gray-800 "}
            />
            { <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
              
            </span> }
          </button>
          <a
            href="https://wa.me/+233556844397"  // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-opacity-20 border-2 border-[#338a60] p-2 hover:bg-[#338a60] hover:text-white cursor-pointer"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
          </a>
          {/* <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label="Account"
          >
            <User
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
          </button> */}
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden p-2 rounded-lg ${
            darkMode ? "bg-[#32ba78] text-gray-900" : "bg-gray-800 text-white"
          }`}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute top-16 left-0 w-full ${
              darkMode ? "bg-gray-800" : "bg-[#f7f7f7]"
            } p-4 shadow-lg md:hidden`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4 font-medium">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  className={`cursor-pointer ${
                    activeItem === item.name
                      ? darkMode
                        ? "text-[#5ceda7]"
                        : "text-blue-600"
                      : darkMode
                      ? "text-white"
                      : "text-gray-900"
                  } hover:${darkMode ? "text-[#5ceda7]" : "text-blue-600"}`}
                  onClick={() => handleNavigation(item)}
                  whileHover={{ x: 5 }}
                >
                  <a href={item.link}>{item.name}</a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-700">
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
                aria-label="Search"
              >
                <Search
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
              </button>
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
                aria-label="Cart"
              >
                <ShoppingCart
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
                aria-label="Account"
              >
                <User
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
              </button>
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
                onClick={toggleDarkMode}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun size={20} className="text-white" />
                ) : (
                  <Moon size={20} className="text-gray-800" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
