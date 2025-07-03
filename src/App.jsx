import React, { useState } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} w-full h-screen flex flex-col`}>
      <div className="flex-1 flex flex-col background relative overflow-x-hidden items-center dark:bg-gray-900 bg-white text-black dark:text-white">
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
          <Random />
          <Tag />
        </div>
      </div>

      <Footer />
    </div>
  );
}
