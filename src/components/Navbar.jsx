"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
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

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
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
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would apply dark mode classes to the document here
  };

  // Handle navigation
  const handleNavigation = (item) => {
    setActiveItem(item.name);
    if (isOpen) setIsOpen(false);

    // Use setTimeout to ensure the mobile menu closes before scrolling
    setTimeout(() => {
      // Handle homepage differently
      if (item.name === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Smooth scroll to section
      const element = document.getElementById(item.id);
      if (element) {
        // Get the navbar height for proper offset
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;

        // Calculate position accounting for navbar height
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to ensure menu closes first
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
            src={MaxgyetLogo || "/placeholder.svg"}
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
              } hover:${
                darkMode ? "text-[#5ceda7]" : "text-[#32ba78]"
              } transition-all duration-200`}
              onClick={() => handleNavigation(item)}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={item.link}
                onClick={(e) => {
                  // Prevent default link behavior to handle navigation manually
                  e.preventDefault();
                  handleNavigation(item);
                }}
              >
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
            className="p-2 rounded-full border-2 border-[#338a60] text-[#338a60] hover:bg-[#338a60] hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=61573446217701"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#338a60] border-2 border-[#338a60] hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/maxgyet_oil_enterprise/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#338a60] border-2 border-[#338a60] hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
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
                className="p-2 rounded-full border border-[#338a60] flex items-center justify-center transition-all duration-300 hover:bg-[#338a60] hover:text-white"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
              </a>
              <a
                href="https://facebook.com/maxgyetoil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#338a60] flex items-center justify-center transition-all duration-300 hover:bg-[#338a60] hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/maxgyetoil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#338a60] flex items-center justify-center transition-all duration-300 hover:bg-[#338a60] hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <button
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
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
