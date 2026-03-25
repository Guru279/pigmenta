import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    link: "px-2 py-1 rounded transition hover:bg-slate-400 hover:text-black"
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <img src="/logo_pi.png" alt="Logo" className="h-7" />
          <span className="hidden sm:block font-semibold">Pigmenta</span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className={`${styles.link} ${location.pathname === "/" && "text-black font-semibold"}`}>Home</Link>
          <Link to="/about" className={`${styles.link} ${location.pathname === "/about" && "text-black font-semibold"}`}>About</Link>
          <Link to="/contact" className={`${styles.link} ${location.pathname === "/contact" && "text-black font-semibold"}`}>Contact</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RiCloseLargeFill size={20}/> : <GiHamburgerMenu size={20}/>}
          </button>

          {/* SEARCH */}
          <input 
            placeholder="Search artists..."
            className="hidden sm:block px-4 py-1.5 rounded-full bg-gray-100 focus:bg-white outline-none text-sm"
          />

          {/* PROFILE */}
          <Link to="/profile">
            <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-gray-600">
          <Link className={`${styles.link} justify-content`} to="/">Home</Link>
          <Link className={`${styles.link} justify-content`} to="/about">About</Link>
          <Link className={`${styles.link} justify-content`} to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;