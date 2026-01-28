import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center relative">
      <h1 className="text-lg font-semibold">
        Smart Hostel Issue Tracking System
      </h1>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="text-2xl">
        ☰
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-6 top-16 bg-white text-black rounded shadow w-40">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
