import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import MaxgyetLogo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Define sections and their corresponding IDs
  const menuItems = [
    { name: "Home", link: "/", id: "home" },
    { name: "Features", link: "#features", id: "features" },
    { name: "About", link: "#about-innovator", id: "about-innovator" },
    { name: "Product", link: "#products", id: "products" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  // Handle scroll effect for navbar and section detection
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section

      // Special case for home section at the top
      if (scrollPosition < 300) {
        setActiveItem("Home");
        return;
      }

      // Check each section
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveItem(menuItems[i].name);
            break;
          }
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    
    // Initial call to set correct active item on page load
    handleScroll();
    
    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would apply dark mode classes to the document here
  };

  // Handle navigation
  const handleNavigation = (item) => {
    setActiveItem(item.name);
    if (isOpen) setIsOpen(false);

    // Handle homepage differently
    if (item.link === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Smooth scroll to section
    const element = document.getElementById(item.id);
    if (element) {
      const headerOffset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
                    : "text-[#32ba78] font-bold"
                  : darkMode
                  ? "text-gray-300"
                  : "text-gray-900"
              } hover:${darkMode ? "text-[#5ceda7]" : "text-[#32ba78]"} transition-all duration-200`}
              onClick={() => handleNavigation(item)}
              whileHover={{ scale: 1.1 }}
            >
              <a href={item.link} onClick={(e) => {
                // Prevent default link behavior to handle navigation manually
                e.preventDefault();
                handleNavigation(item);
              }}>
                {item.name}
              </a>
              {/* Animated underline indicator */}
              {activeItem === item.name && (
                <motion.div
                  className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                    darkMode ? "bg-[#5ceda7]" : "bg-[#338a60]"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/+233556844397"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#338a60] border-2 border-[#338a60] hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
          </a>
        
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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
                  className={`cursor-pointer relative ${
                    activeItem === item.name
                      ? darkMode
                        ? "text-[#5ceda7] font-bold"
                        : "text-[#32ba78] font-bold"
                      : darkMode
                      ? "text-white"
                      : "text-gray-900"
                  } transition-all duration-200 border-l-4 ${
                    activeItem === item.name 
                      ? "border-[#32ba78] pl-3" 
                      : "border-transparent pl-3"
                  }`}
                  onClick={() => handleNavigation(item)}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item);
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
              <a
                href="https://wa.me/+233556844397"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#338a60] flex items-center justify-center"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
              </a>
              <button
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
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