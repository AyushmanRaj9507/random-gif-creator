import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-3 bg-gray-100 dark:bg-gray-800 text-center shadow-inner">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Made with ❤️ by 
        <a
          href="https://github.com/AyushmanRaj9507"
          target="_blank"
          rel="noreferrer"
          className="ml-1 text-blue-600 dark:text-yellow-400 hover:underline"
        >
          Ayushman Raj
        </a>
      </p>
    </footer>
  );
};

export default Footer;
