import { useState, useEffect } from 'react';

export default function TopNav() {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 z-5 w-full h-[80px] flex items-center justify-between md:items-center md:justify-center px-5 transition duration-300 ease-in-out ${
        scroll > 0 ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      id="topnav"
    >
      {/* Logo */}
      <a href="/" className="text-xl font-semibold text-[#171E25] hover:text-[#2F465B] px-1">
        VOM/
      </a>

      {/* Hamburger button */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Desktop nav links */}
      <ul className="hidden md:flex md:justify-center md:align-center w-full gap-12 text-[12px] uppercase">
        <li><a href="/" className="nav-link active">Home</a></li>
        <li><a href="/about" className="nav-link">About Me</a></li>
        <li><a href="/projects" className="nav-link">My Design</a></li>
        <li><a href="/contact" className="nav-link">My Artworks</a></li>
        <li><a href="/contact" className="nav-link">My Projects</a></li>
      </ul>

      {/* Mobile menu (slide-down style) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-5 py-4 text-[14px] uppercase md:hidden">
          <a href="/" className="nav-link active w-16" onClick={toggleMenu}>Home</a>
          <a href="/about" className="nav-link w-16" onClick={toggleMenu}>About Me</a>
          <a href="/projects" className="nav-link w-16" onClick={toggleMenu}>My Design</a>
          <a href="/contact" className="nav-link w-16" onClick={toggleMenu}>My Artworks</a>
          <a href="/contact" className="nav-link w-16" onClick={toggleMenu}>My Projects</a>
        </div>
      )}
    </nav>
  );
}
