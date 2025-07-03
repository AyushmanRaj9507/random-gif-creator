import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        🎲 Random GIFs
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-800 text-white px-4 py-1 rounded-lg shadow hover:bg-gray-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 transition-all"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
