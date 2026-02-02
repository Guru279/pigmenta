
import Navbar from "./components/Navbar"
import { Routes, Route} from "react-router-dom";
import Pinksphere from "./mini_components/Pinksphere";
import Bluesquare from "./mini_components/Bluesquare"; 
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      

      <div className="relative">
    <Pinksphere/>
    <Bluesquare/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  </div>

    

    </>
  );
}

export default App;
