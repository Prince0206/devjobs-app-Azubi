import React from "react";
import { ReactSVG } from "react-svg";
import { ThemeToggler } from "../context/ThemeContext";
import { Link } from "react-router-dom";
// import test from '../assets/logos/creative.svg'

const Job = ({ data }) => {
  const { darkMode } = ThemeToggler();
  // console.log(test);
  return (
    <div
      className={
        darkMode
          ? "bg-dark_blue m-3 rounded-xl  relative  p-8 mb-10 "
          : "bg-white m-3 rounded-xl  relative  p-8 mb-10 "
      }
    >
      {/* <ReactSVG src={test}/> */}
      <div
        className=" absolute -top-6   flex justify-center w-14  items-center h-14 rounded-xl "
        style={{ backgroundColor: `${data.logoBackground}` }}
      >
        {/* <img className='border text-2xl' src={data.logo} alt="" /> */}
        <ReactSVG src={data.logo} />
      </div>
      <div className="flex pt-6 text-gray-500 w-36 justify-between">
        <p>{data.postedAt}</p>
        <span className="font-black">.</span>
        <p>{data.contract}</p>
      </div>
      <Link to={`/jobdetails/${data.id}`}>
        <h1
          className={
            darkMode
              ? "py-2 font-bold text-xl text-white cursor-pointer hover:text-gray-500"
              : "py-2 font-bold text-xl cursor-pointer hover:text-gray-500"
          }
        >
          {data.position}
        </h1>
      </Link>
      <p className="pb-10 text-gray-500">{data.company}</p>

      <p className="text-primary font-semibold">{data.location}</p>
    </div>
  );
};

export default Job;