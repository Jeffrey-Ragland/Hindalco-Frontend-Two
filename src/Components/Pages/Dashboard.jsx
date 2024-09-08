import React from 'react';
import xymaLogoBlue from '../Assets/xymaLogoBlue.png';
import hindalcoLogo from '../Assets/hindalcoLogo.png';
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import potline from '../Assets/potline.png';
import { FaBell, FaBatteryFull } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { LuRadioTower } from "react-icons/lu";
import { useRef, useState, useEffect } from "react";
import xymaLogoWhite from "../Assets/xymaLogoWhite.png";
import { MdSystemSecurityUpdateWarning, MdOutlineUpdate } from "react-icons/md";
import {
  BsThermometerSun,
  BsClipboard2DataFill,
  BsDatabaseFillCheck,
} from "react-icons/bs";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { TbTrendingUp } from "react-icons/tb";
import ApexCharts from "react-apexcharts";
import Navbar from './Navbar';

const MainPage = () => {

    const series = [
      {
        name: "S1",
        data: [30, 28, 34, 33, 29, 37, 36, 31, 34, 35, 32, 38],
      },
      {
        name: "S2",
        data: [27, 31, 29, 30, 32, 33, 28, 29, 35, 31, 34, 36],
      },
      {
        name: "S3",
        data: [24, 29, 27, 28, 26, 32, 31, 28, 29, 33, 27, 30],
      },
      {
        name: "S4",
        data: [25, 23, 27, 24, 22, 30, 29, 26, 28, 25, 27, 31],
      },
      {
        name: "S5",
        data: [21, 24, 20, 22, 26, 28, 24, 21, 25, 27, 23, 29],
      },
      {
        name: "S6",
        data: [19, 22, 18, 21, 25, 26, 23, 20, 24, 26, 22, 28],
      },
      {
        name: "S7",
        data: [29, 32, 28, 30, 33, 34, 29, 31, 36, 33, 35, 37],
      },
      {
        name: "S8",
        data: [33, 31, 34, 29, 30, 37, 35, 32, 34, 36, 33, 38],
      },
      {
        name: "S9",
        data: [25, 28, 24, 27, 29, 31, 26, 28, 32, 30, 29, 33],
      },
      {
        name: "S10",
        data: [22, 26, 23, 25, 28, 30, 27, 23, 29, 31, 26, 32],
      },
    ];

    const options = {
      chart: {
        type: "line",
        toolbar: {
          show: true,
        },
      },
      stroke: {
        curve: "straight",
        width: 1.5,
      },
      xaxis: {
        categories: [
          "2024-09-01 00:00",
          "2024-09-01 01:00",
          "2024-09-01 02:00",
          "2024-09-01 03:00",
          "2024-09-01 04:00",
          "2024-09-01 05:00",
          "2024-09-01 06:00",
          "2024-09-01 07:00",
          "2024-09-01 08:00",
          "2024-09-01 09:00",
          "2024-09-01 10:00",
          "2024-09-01 11:00",
        ],
        labels: {
          style: {
            fontSize: "8px",
          },
        },
      },
      yaxis: {
        
        labels: {
          style: {
            fontSize: "8px",
          },
        },
      },
      legend: {
        position: "right",
        labels: {
          fontSize: "8px",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    };

  return (
    <div className="xl:h-screen text-gray-600 p-4 flex flex-col gap-2 ">
      {/* top bar - h-[10%] */}
      <div className="xl:h-[10%]">
        <Navbar />
      </div>

      {/* main content 1 h-[50%] */}
      <div className="xl:h-[50%] flex flex-col md:flex-row gap-2">
        {/* 2d image */}
        <div
          className="w-full md:w-[70%] flex flex-col gap-4 md:gap-2  rounded-xl p-2"
          style={{
            backgroundImage:
              "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #afbfdb, #a9bbd9, #a1b4d6, #98b0d4, #90aad1)",
          }}
        >
          <div className=" flex flex-col md:flex-row gap-4 md:gap-2 xl:h-[55%] text-sm 2xl:text-base">
            <div className="w-full md:w-[65%] flex justify-center items-center p-4">
              <img
                src={potline}
                alt="potline"
                className="max-w-[250px] md:max-w-[400px]"
              />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-between gap-2">
              {/* device temperature */}
              <div className="square-btn flex flex-col items-center gap-0.5 shadow-xl h-1/3">
                <div className="flex items-center gap-2">
                  <FaMobileScreenButton className="text-xl 2xl:text-2xl" />
                  <div>Device Temperature</div>
                </div>
                <div className="font-bold text-base">56 °C</div>
              </div>

              {/* signal strength */}
              <div className="square-btn flex flex-col items-center gap-0.5 shadow-xl h-1/3">
                <div className="flex items-center gap-2">
                  <LuRadioTower className="text-xl 2xl:text-2xl" />
                  <div>Signal Strength</div>
                </div>
                <div className="font-bold text-base">-40 dBm</div>
              </div>

              {/* battery */}
              <div className="square-btn flex flex-col items-center gap-0.5 shadow-xl h-1/3">
                <div className="flex items-center gap-2">
                  <FaBatteryFull className="text-xl 2xl:text-2xl" />
                  <div>Battery Percentage</div>
                </div>
                <div className="font-bold text-base">78 %</div>
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="xl:h-[45%] grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 1</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 2</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 3</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 4</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 5</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 6</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 7</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 8</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 9</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>

            <div className="py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md border border-black">
              <BsThermometerSun className="text-2xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 10</div>
                <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
              </div>
            </div>
          </div>
        </div>

        {/* alert box */}
        <div
          className=" rounded-xl w-full md:w-[30%] flex flex-col"
          style={{
            backgroundImage:
              "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #afbfdb, #a9bbd9, #a1b4d6, #98b0d4, #90aad1)",
          }}
        >
          <div className="flex justify-center gap-2 rounded-t-md items-center py-1 px-2 font-bold">
            <div>Alerts</div>
            <FaBell className="text-xl" />
          </div>
          <div
            className=" flex flex-col flex-1 text-gray-800 px-2 overflow-auto rounded-b-md"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#D1D5DB transparent",
            }}
          >
            <div className="flex w-full justify-between items-center sticky  top-0 mb-2 xl:mb-4 py-1">
              <div className="text-sm 2xl:text-base font-bold px-2 rounded-md border-2 border-red-500 bg-white text-red-500">
                4&nbsp;Alerts
              </div>
              <div>
                <IoTrashOutline className="text-red-600 text-3xl 2xl:text-3xl hover:scale-110 duration-200 cursor-pointer" />
              </div>
            </div>

            <div className="rounded-md text-white bg-gradient-to-tr from-red-700 via-red-500 to-red-400 p-1 flex justify-around items-center mb-2">
              <div>Sensor 1</div>
              <div>-</div>
              <div className="font-medium">98 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 02:55 pm</div>
            </div>

            <div className="rounded-md bg-gradient-to-tr from-red-700 via-red-500 to-red-400 text-white  p-1 flex justify-around items-center mb-2">
              <div>Sensor 4</div>
              <div>-</div>
              <div className="font-medium">108 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 02:43 pm</div>
            </div>

            <div className="rounded-md bg-gradient-to-tr from-red-700 via-red-500 to-red-400 text-white  p-1 flex justify-around items-center mb-2">
              <div>Sensor 7</div>
              <div>-</div>
              <div className="font-medium">110 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 01:32 pm</div>
            </div>

            <div className="rounded-md bg-gradient-to-tr from-red-700 via-red-500 to-red-400 text-white  p-1 flex justify-around items-center mb-2">
              <div>Sensor 9</div>
              <div>-</div>
              <div className="font-medium">110 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 01:32 pm</div>
            </div>
          </div>
        </div>
      </div>

      {/* main content 2 h-[40%] */}
      <div className="h-[40%] rounded-xl flex flex-col-reverse md:flex-row gap-2">
        <div className="w-full md:w-[20%] flex flex-col gap-2">
          {/* last update */}
          <div
            className="flex flex-row items-center md:flex-col justify-evenly rounded-md h-[25%] p-1"
            style={{
              backgroundImage:
                "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #afbfdb, #a9bbd9, #a1b4d6, #98b0d4, #90aad1)",
            }}
          >
            <div className="flex items-center gap-2 font-medium">
              <MdOutlineUpdate className="text-2xl 2xl:text-3xl" />
              <div>Last Updated Data: </div>
            </div>
            <div className="text-center text-sm 2xl:text-xl">
              24/08/2024 12:55pm
              {/* {dataFromApp.length > 0 &&
                new Date(dataFromApp[0].createdAt).toLocaleString("en-GB")} */}
            </div>
          </div>

          {/* settings */}
          <form
            className=" rounded-md flex flex-col justify-evenly gap-4 md:gap-0 h-[75%] p-1"
            style={{
              backgroundImage:
                "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #afbfdb, #a9bbd9, #a1b4d6, #98b0d4, #90aad1)",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-center text-red-500">
              <LiaRulerVerticalSolid className="text-2xl 2xl:text-3xl" />
              <div className="font-medium">Alert&nbsp;limit</div>
            </div>
            <div className="flex items-center gap-2 text-sm 2xl:text-xl">
              <div>Current&nbsp;Limit</div>
              <div className="py-0.5 px-1 w-full text-sm 2xl:text-base font-medium rounded-sm text-center bg-white">
                75 °C
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm 2xl:text-xl">
              <div>Change&nbsp;Limit</div>
              <input
                type="text"
                required
                className="py-0.5 px-1 w-full text-sm 2xl:text-base font-medium rounded-sm focus:outline-none bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-tr from-green-700 via-green-500 to-green-400 hover:scale-[1.03] duration-200 text-white p-1 px-2 rounded-md"
            >
              Set
            </button>
          </form>
        </div>
        <div
          className="overflow-hidden p-2 w-full md:w-[80%] rounded-md"
          style={{
            backgroundImage:
              "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #afbfdb, #a9bbd9, #a1b4d6, #98b0d4, #90aad1)",
          }}
        >
          <ApexCharts
            options={options}
            series={series}
            type="line"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage
