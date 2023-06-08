import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeToggler } from "../context/ThemeContext";

const ThemeToggle = () => {
  const {handleToggle} = ThemeToggler()

  return (
    <div className="flex justify-between  w-24 items-center h-10">
      <MdLightMode />
      <label className="relative inline-flex items-center  cursor-pointer">
        <input onClick={handleToggle} type="checkbox" value="" className="sr-only peer" />
        <div className="w-9 h-5 bg-gray-200  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-white rounded-full peer dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] hover:after:bg-light_primary after:bg-primary  after:border-primary after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
      </label>
      <MdDarkMode />
    </div>
  );
};

export default ThemeToggle;