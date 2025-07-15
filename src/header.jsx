import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // make sure you install this

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md text-[#14034] p-4 text-sm">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/eza_bgrm.png"}
            alt="EZATuition Logo"
            className="w-12 h-auto"
          />
        </a>

        {/* Hamburger menu button - only visible on small screens */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation - hidden on small screens */}
        <nav className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Navigation - visible only when menuOpen is true */}
      {menuOpen && (
        <nav className="md:hidden mt-4 px-2 space-y-2">
          <NavLinks mobile onLinkClick={() => setMenuOpen(false)} />
        </nav>
      )}
    </header>
  );
}

function NavLinks({ mobile = false, onLinkClick }) {
  const baseClass = "text-blue-700 hover:text-blue-100 px-3 py-2 block";
  const linkClass = mobile
    ? baseClass
    : baseClass.replace("block", "inline-block");

  const handleClick = () => {
    if (mobile && onLinkClick) onLinkClick(); // Close menu on mobile
  };

  return (
    <>
      <a href="#home" className={linkClass} onClick={handleClick}>
        Home
      </a>
      <a href="#about" className={linkClass} onClick={handleClick}>
        About
      </a>
      <a href="#experience" className={linkClass} onClick={handleClick}>
        Testimonials
      </a>
      <a href="#resource" className={linkClass} onClick={handleClick}>
        Resources
      </a>
      <a href="#fees" className={linkClass} onClick={handleClick}>
        Fees
      </a>
      <a href="#faq" className={linkClass} onClick={handleClick}>
        FAQ
      </a>
      <a
        href="#contact"
        className={`${linkClass} font-bold px-5 py-2 rounded-full text-white hover:bg-blue-600 transition animated-gradient-bg`}
        onClick={handleClick}
      >
        Contact Us
      </a>
    </>
  );
}
