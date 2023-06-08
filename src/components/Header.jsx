import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
// import headerimg from "../assets/desktop/bg-pattern-header.svg";

const Header = ({jobs,setSearchResults}) => {
  const navigate = useNavigate()
  return (
    <div className="h-48  text-white bg-header_image_mobile sm:bg-header_image bg-cover">
      <div className="flex justify-between pt-5 px-10">
        <h1 className="text-2xl sm:text-3xl font-bold cursor-pointer" onClick={()=>{
          navigate('/')
          window.location.reload()

        }}>devjobs</h1>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
