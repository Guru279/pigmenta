"use client";
// ↑ "use client" is required because this component uses:
//   - useState  (React hook that tracks UI state in the browser)
//   - usePathname (reads the current URL — only available in the browser)
// Without this directive, Next.js would try to render it on the server
// and crash because there is no browser window/URL there.

// CHANGE from Vite: was `import { Link, useLocation } from "react-router-dom"`
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { User, Menu, X, Search } from "lucide-react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  // CHANGE: usePathname() replaces useLocation().pathname
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    console.log("search:", q);
  };

  const styles = {
    link:
      "relative px-2 py-1  inline-block transition-colors duration-200 " +
      "hover:text-black " +
      "after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-0.5 " +
      "after:h-[2px] after:bg-black after:origin-left after:scale-x-0 " +
      "after:transition-transform after:duration-300 hover:after:scale-x-100",
    activeLink: "text-black after:scale-x-100 font-s",
  };

  // CHANGE: was `location.pathname === path`, now uses `pathname` directly
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className=" mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="h-full flex items-center bg-white/90 backdrop-blur-md px-4 gap-4">
          {/* CHANGE: was <Link to="/"> → now <Link href="/"> */}
          <Link href="/">
            <img src={logo.src} alt="Logo" className="h-14 w-auto" />
          </Link>
          <span className="hidden sm:block font-display text-3xl md:text-3xl bg-white font-semibold leading-none mx-2">
            <Link href="/">
              NIJIMA
            </Link>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-sm font-sans font-medium text-gray-600">
          <Link href="/"        className={`${styles.link} ${isActive("/")        ? styles.activeLink : ""}`}>Home</Link>
          <Link href="/explore" className={`${styles.link} ${isActive("/explore") ? styles.activeLink : ""}`}>Explore</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>

          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center bg-gray-100 focus-within:bg-white rounded-full pl-4 pr-1 py-1 transition-colors"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artists..."
              className="bg-transparent outline-none text-sm w-40 md:w-56 placeholder:text-gray-500"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center h-7 w-7 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <Search size={14} />
            </button>
          </form>

          {/* PROFILE */}
          {/* CHANGE: was <Link to="/profile"> → now <Link href="/profile"> */}
          <Link href="/profile">
            <User className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col items-start gap-3 text-gray-600 text-base">
          <Link href="/"        className={`${styles.link} ${isActive("/")        ? styles.activeLink : ""}`}>Home</Link>
          <Link href="/explore" className={`${styles.link} ${isActive("/explore") ? styles.activeLink : ""}`}>Explore</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
