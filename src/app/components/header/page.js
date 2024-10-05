"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5"; // Import the close icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home"); // Set Home as the initial active nav
  const mobileMenuRef = useRef(null); // To reference the mobile menu

  // Toggle function to open/close the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle setting active link
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  // Styling for active link
  const getLinkStyle = (navItem) =>
    activeNav === navItem
      ? "bg-[#E2EBF4] text-[#4F4D74] rounded-3xl px-4 py-2"
      : "px-4 py-2 ";

  // Close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex gap-12 sm:gap-52 text-[#4F4D74] items-center w-full p-4 lg:px-20 justify-center">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Image
          src="/assets/images/gca.png"
          alt="logo"
          width={100}
          height={100}
          className="w-16 md:w-24"
        />
      </div>

      {/* Desktop Menu - Always visible in large screens */}
      <nav className="hidden lg:flex flex-row items-center gap-4">
        <ul className="flex gap-3 list-none items-center text-lg">
          <li>
            <a
              href="#"
              className={getLinkStyle('Home')}
              onClick={() => handleNavClick('Home')}
            >
              Home
            </a>
          </li>
          <img src="/assets/images/list-style.png" alt="separator" />
          <li>
            <a
              href="#"
              className={getLinkStyle('Our Courses')}
              onClick={() => handleNavClick('Our Courses')}
            >
              Our Courses
            </a>
          </li>
          <img src="/assets/images/list-style.png" alt="separator" />
          <li>
            <a
              href="#"
              className={getLinkStyle('Exam Portal')}
              onClick={() => handleNavClick('Exam Portal')}
            >
              Exam Portal
            </a>
          </li>
          <img src="/assets/images/list-style.png" alt="separator" />
          <li>
            <a
              href="#"
              className={getLinkStyle('Join Our Team')}
              onClick={() => handleNavClick('Join Our Team')}
            >
              Join Our Team
            </a>
          </li>
        </ul>

        <button className="bg-[#6173FD] text-white px-7 py-2 rounded-3xl ms-8 ring ring-[#E2EBF4]">
          BOOK FREE DEMO
        </button>
      </nav>

      {/* Mobile Menu - Toggle */}
      <div className="flex lg:hidden items-center gap-4">
        {/* Free Trial Button (Visible in mobile view beside toggle) */}
        <button className="bg-[#6173FD] text-white text-sm px-7 py-2 rounded-3xl">
          BOOK FREE DEMO
        </button>

        {/* Hamburger Menu Icon or Close Icon */}
        <button onClick={toggleMenu} className="text-4xl text-[#6173FD]">
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-10 left-0 w-full bg-white lg:hidden mt-8 z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Our Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Exam Portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Join Our Team
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
