import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    // Navbar Fixed
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const fixedNav = header.offsetTop;
        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
        } else {
          header.classList.remove("navbar-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu on outside click
    const handleOutsideClick = (event) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        const navMenu = document.querySelector("#nav-menu");
        const hamburger = document.querySelector("#hamburger");
        if (navMenu && hamburger) {
          navMenu.classList.add("hidden");
          hamburger.classList.remove("hamburger-active");
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Hamburger Toggle
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    if (hamburger && navMenu) {
      const handleClick = () => {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      };

      hamburger.addEventListener("click", handleClick);

      return () => {
        hamburger.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <header className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-blue-500 hover:text-blue-700 transition duration-300 no-underline"
        >
          Rumah Sakit
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 no-underline"
          >
            Data Pasien
          </Link>
          <Link
            to="/doctors"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 no-underline"
          >
            Data Dokter
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          id="hamburger"
          ref={hamburgerRef}
          className="block lg:hidden text-gray-700 focus:outline-none"
        >
          <span className="hamburger-line block w-6 h-[2px] bg-gray-700 mb-1"></span>
          <span className="hamburger-line block w-6 h-[2px] bg-gray-700 mb-1"></span>
          <span className="hamburger-line block w-6 h-[2px] bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="nav-menu"
        ref={navMenuRef}
        className="hidden lg:hidden absolute top-full left-0 w-full bg-white shadow-md"
      >
        <ul className="space-y-4 text-center py-4">
          <li>
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-500  rounded-md text-xl no-underline "
            >
              Data Pasien
            </Link>
          </li>
          <li>
            <Link
              to="/doctors"
              className="block text-gray-700 hover:text-blue-500  rounded-md text-xl no-underline "
            >
              Data Dokter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
