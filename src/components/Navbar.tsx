import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2">
          <img 
            src="/logo_pi.png" 
            alt="Logo" 
            className="h-7 w-auto object-contain"
          />
          <span className="font-semibold text-gray-800 tracking-wide hidden sm:block">
            Pigmenta
          </span>
        </div>

        {/* CENTER - NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link 
            to="/" 
            className={`hover:text-black transition ${
              location.pathname === "/" ? "text-black font-semibold" : ""
            }`}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={`hover:text-black transition ${
              location.pathname === "/about" ? "text-black font-semibold" : ""
            }`}
          >
            About
          </Link>

          <Link 
            to="/contact" 
            className={`hover:text-black transition ${
              location.pathname === "/contact" ? "text-black font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <input 
            placeholder="Search artists..."
            className="hidden sm:block px-4 py-1.5 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-black/10 outline-none text-sm transition-all"
          />

          {/* PROFILE */}
          <Link to="/profile">
            <FontAwesomeIcon icon={faUserCircle} className="text-2xl text-gray-700 hover:text-black transition" />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;