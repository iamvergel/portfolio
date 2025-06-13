import { useState, useEffect } from "react";

export default function TopNav() {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#main");

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[999] xl:max-w-[1400px] w-full h-[80px] hover:bg-white flex items-center justify-between md:items-center md:justify-center px-5 transition duration-300 ease-in-out ${
        scroll > 0 ? "bg-white shadow-md" : "bg-transparent"
      }`}
      id="topnav" 
    >
      <a
        href="/"
        className="text-xl font-semibold text-[#171E25] hover:text-[#2F465B] px-1" data-aos="fade-down"
      >
        VOM/
      </a>

      <button onClick={toggleMenu} className="md:hidden text-2xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      <ul className="hidden md:flex md:justify-center md:align-center w-full gap-12 text-[12px] uppercase" data-aos="fade-down" data-aos-delay="100">
        <li>
          <a
            href="#main"
            className={`nav-link ${activeLink === "#main" ? "active" : ""}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#design"
            className={`nav-link ${activeLink === "#design" ? "active" : ""}`}
          >
            Design
          </a>
        </li>
        <li>
          <a
            href="#artwork"
            className={`nav-link ${activeLink === "#artwork" ? "active" : ""}`}
          >
            Artworks
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`nav-link ${activeLink === "#projects" ? "active" : ""}`}
          >
            Projects
          </a>
        </li>
      </ul>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-5 py-4 text-[14px] uppercase md:hidden z-[999]">
          <a
            href="#main"
            className={`nav-link ${activeLink === "#main" ? "active" : ""} w-26`}
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeLink === "#about" ? "active" : ""} w-26`}
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#design"
            className={`nav-link ${activeLink === "#design" ? "active" : ""} w-26`}
            onClick={toggleMenu}
          >
            Design
          </a>
          <a
            href="#artwork"
            className={`nav-link ${activeLink === "#artwork" ? "active" : ""} w-26`}
            onClick={toggleMenu}
          >
            Artworks
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeLink === "#projects" ? "active" : ""} w-26`}
            onClick={toggleMenu}
          >
            Projects
          </a>
        </div>
      )}
    </nav>
  );
}

