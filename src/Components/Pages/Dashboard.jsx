import React from 'react';
import { Link } from "react-router-dom";
import xymaLogoWhite from "../Assets/xymaLogoWhite.png";
import hindalcoLogo from "../Assets/hindalcoLogo.png";
import { ImExit } from "react-icons/im";

const Dashboard = () => {
  return (
    <div className="xl:h-screen px-4 py-2 text-white 2xl:text-2xl flex flex-col gap-2 2xl:gap-4">
      {/* top bar - h-[10%] */}
      <div className="flex justify-between items-center">
        {/* xyma logo */}
        <div>
          <img
            src={xymaLogoWhite}
            alt="xymaLogo"
            className="max-h-8 md:max-h-12 2xl:max-h-14"
          />
        </div>
        {/* title */}
        <div className="text-sm md:text-2xl font-medium text-center">
          Temperature Measurement
        </div>
        {/* hindalco logo , logout */}
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={hindalcoLogo}
              alt="hindalcoLogo"
              className="h-10 md:h-14 2xl:h-16"
            />
          </div>
          <Link to="/login">
            <button
              className="logout-button"
              onClick={() => localStorage.clear()}
            >
              <div className="logout-logo ">
                <ImExit className="text-xl 2xl:text-[22px]" />
              </div>
              <div className="logout-text text-lg">Logout</div>
            </button>
          </Link>
        </div>
      </div>

      {/* top bar 2 - h-[5%] */}
      <div className="flex items-center border border-white">
        {/* 60% */}
        <div className="flex justify-between w-[60%]">
          <div className="border border-white">Last update</div>
          <div className="border border-white h-8 w-8 flex justify-center items-center rounded-full">
            A
          </div>
        </div>
        {/* 40% */}
        <div className="flex gap-4 justify-end w-[40%]">
          <div className="border border-white px-2">R</div>
          <div className="border border-white px-2">S</div>
        </div>
      </div>

      {/* main content 1 - h-[42.5%] */}
      <div className="border border-white h-[42.5%] flex gap-2 2xl:gap-4">
        {/* 12 cards */}
        <div className="border border-white w-[60%] flex flex-col gap-2">
          <div className="flex gap-2 h-1/3">
            <div className="border border-white w-1/4">s1</div>
            <div className="border border-white w-1/4">s2</div>
            <div className="border border-white w-1/4">s3</div>
            <div className="border border-white w-1/4">s4</div>
          </div>

          <div className="flex gap-2 h-1/3">
            <div className="border border-white w-1/4">s5</div>
            <div className="border border-l-white border-r-white border-t-transparent border-b-transparent w-1/4 rounded-xl">s6</div>
            <div className="border border-white w-1/4">s7</div>
            <div className="border border-white w-1/4">s8</div>
          </div>

          <div className="flex gap-2 h-1/3">
            <div className="border border-white w-1/4">s9</div>
            <div className="border border-white w-1/4">s10</div>
            <div className="border border-white w-1/4">s11</div>
            <div className="border border-white w-1/4">s12</div>
          </div>
        </div>
        <div className="border border-white w-[40%]">alert notification</div>
      </div>

      {/* main content 2 - h-[42.5%] */}
      <div className="border border-white h-[42.5%] flex gap-2 2xl:gap-4">
        {/* left side */}
        <div className="w-[45%] border border-white flex flex-col gap-2 2xl:gap-4">
          {/* 3 cards */}
          <div className="border border-white h-1/3 flex gap-2">
              <div className="border border-white w-1/3">s13</div>
              <div className="border border-white w-1/3">s14</div>
              <div className="border border-white w-1/3">s15</div>
          </div>
          <div className="border border-white h-2/3 flex gap-2 2xl:gap-4">
            {/* table */}
            <div className="border border-white w-1/2">table</div>
            {/* bar */}
            <div className="border border-white w-1/2">bar chart</div>
          </div>
        </div>
        {/* right side */}
        <div className="border border-white w-[55%]">line chart</div>
      </div>
    </div>
  );
}

export default Dashboard
