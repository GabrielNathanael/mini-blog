"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white relative shadow">
      {/* Wrapper */}
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          {/* Left: Logo */}
          <div className="text-lg md:text-xl font-bold text-gray-900">
            BinaryStories
          </div>

          {/* Center: SearchBar */}
          <div className="flex justify-center">
            <div className="w-96">
              {" "}
              <SearchBar />
            </div>
          </div>

          {/* Right: Menu + Auth */}
          <div className="flex items-center justify-end space-x-6 text-sm md:text-base">
            <ul className="flex items-center space-x-6 text-gray-700 font-medium">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Categories
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Login
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-4 py-1 font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-between md:hidden">
          {/* Left: Logo */}
          <div className="text-lg font-bold text-gray-900">BinaryStories</div>

          {/* Right: Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 shadow-lg">
          <div className="px-6 py-6 space-y-2">
            {/* Navigation + Auth */}
            <div className="space-y-2">
              <div className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-sm cursor-pointer">
                Home
              </div>
              <div className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-sm cursor-pointer">
                Categories
              </div>
              <div className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-sm cursor-pointer">
                Contact
              </div>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
                Login
              </button>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
                Sign Up
              </button>
            </div>

            {/* Search Bar */}
            <div className="pt-4">
              <SearchBar />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
