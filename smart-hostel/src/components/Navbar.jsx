import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">
        Smart Hostel Issue Tracking System
      </h1>

      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl focus:outline-none"
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-6 top-16 bg-white text-black rounded shadow-lg w-40 z-50">
          <ul className="py-2">
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="block px-4 py-2 hover:bg-purple-100"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
