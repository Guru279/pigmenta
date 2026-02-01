import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className=" py-6 px-8 item-center ">
     <div className="bg-white/30 flex justify-between py-2 px-6 rounded-full item-center shadow-[0_0_50px_1px_rgba(0,0,0,0.2)]  backdrop-blur-3xl">
       <div>
        <h2 className="font-semibold">PIGMENTA</h2>
      </div>

      <div className="flex gap-6 ">

  
        <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
      </div>

      <div className="flex">
        <input placeholder="Search"className="px-3"/>
        <h4>PO</h4>
      </div>
     </div>

      </nav>
    </>
  );
};

export default Navbar;
