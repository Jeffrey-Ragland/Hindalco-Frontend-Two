import React from 'react';
import xymaLogoBlue from '../Assets/xymaLogoBlue.png';
import hindalcoLogo from '../Assets/hindalcoLogo.png';
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import potline from '../Assets/potline.png';
import { FaBell } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
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
        height: 350,
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
            fontSize: "10px",
          },
        },
      },
      yaxis: {
        title: {
          text: "Temperature (°C)",
        },
        labels: {
          style: {
            fontSize: "10px",
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
    <div
      className="h-screen text-white bg-black p-4 flex flex-col gap-2 "
      //   style={{
      //     backgroundImage:
      //       "linear-gradient(to right top, #807ccf, #807ccf, #807ccf, #807ccf, #807ccf, #8784d1, #8e8bd2, #9593d4, #a5a4d7, #b5b5d9, #c6c6db, #d7d7dd)",
      //   }}
    >
      {/* background-image: linear-gradient(to right top, #807ccf, #807ccf, #807ccf, #807ccf, #807ccf, #8784d1, #8e8bd2, #9593d4, #a5a4d7, #b5b5d9, #c6c6db, #d7d7dd); */}
      {/* top bar - h-[10%] */}
      <div className="flex justify-between items-center xl:h-[10%]">
        <div>
          <img
            src={xymaLogoWhite}
            alt="xymaLogo"
            className="max-h-8 md:max-h-12 2xl:max-h-14"
          />
        </div>
        {/* title */}
        <div className="text-xs md:text-2xl text-center font-bold">
          Data Logger
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
              <div className="logout-logo text-white">
                <ImExit className="text-xl 2xl:text-[22px]" />
              </div>
              <div className="logout-text text-lg ">Logout</div>
            </button>
          </Link>
        </div>
      </div>

      {/* main content 1 h-[50%] */}
      <div className="h-[50%] flex gap-2">
        {/* 2d image */}
        <div
          className=" w-[60%] flex flex-col bg-white rounded-xl p-2"
          //   style={{
          //     backgroundImage:
          //       "linear-gradient(to right top, #807ccf, #807ccf, #807ccf, #807ccf, #807ccf, #8784d1, #8e8bd2, #9593d4, #a5a4d7, #b5b5d9, #c6c6db, #d7d7dd)",
          //   }}
        //   style={{
        //     backgroundImage:
        //       "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #b7c4db, #afbed8, #a7b8d5, #9eb3d2, #96adcf)",
        //   }}
        >
          <div className=" flex text-black gap-2 h-[65%]  font-bold">
            <div className=" w-[80%] flex justify-center items-center p-4">
              <img src={potline} alt="potline" className="max-w-[400px]" />
            </div>
            <div className=" w-[20%] flex gap-2 text-sm">
              <div className=" w-1/2 flex flex-col justify-between p-4">
                <div className="flex items-center gap-1">
                  <div className="bg-red-500 h-2 w-2 rounded-full"></div>
                  <div>S1</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-blue-500 h-2 w-2 rounded-full"></div>
                  <div>S3</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                  <div>S5</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-yellow-500 h-2 w-2 rounded-full"></div>
                  <div>S7</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-pink-500 h-2 w-2 rounded-full"></div>
                  <div>S9</div>
                </div>
              </div>

              <div className=" w-1/2 flex flex-col justify-between p-4">
                <div className="flex items-center gap-1">
                  <div className="bg-orange-500 h-2 w-2 rounded-full"></div>
                  <div>S2</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-lime-500 h-2 w-2 rounded-full"></div>
                  <div>S4</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-purple-500 h-2 w-2 rounded-full"></div>
                  <div>S6</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-fuchsia-500  h-2 w-2 rounded-full"></div>
                  <div>S8</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-cyan-500 h-2 w-2 rounded-full"></div>
                  <div>S10</div>
                </div>
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="text-white h-[35%] flex flex-col gap-1">
            <div className="flex gap-4 h-1/2">
              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 h-1/2">
              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>

              <div className="w-1/5 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1 rounded-md bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-400">
                <BsThermometerSun className="text-2xl 2xl:text-5xl" />
                <div>
                  <div className="text-center">Sensor 1</div>
                  <div className="text-lg 2xl:text-4xl font-bold">56 °C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* alert box */}
        <div
          className=" rounded-xl w-[40%] flex flex-col bg-white text-gray-700"
        //   style={{
        //     backgroundImage:
        //       "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #b7c4db, #afbed8, #a7b8d5, #9eb3d2, #96adcf)",
        //   }}
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
              <div className="text-sm 2xl:text-base font-bold px-2 rounded-sm  bg-red-500 text-white">
                4&nbsp;Alerts
              </div>
              <div>
                <IoTrashOutline className="text-red-600 text-3xl 2xl:text-3xl hover:scale-110 duration-200 cursor-pointer" />
              </div>
            </div>

            <div className="rounded-md border-2 border-red-500 bg-white p-1 flex justify-around items-center text-gray-800 mb-2">
              <div>Sensor 1</div>
              <div>-</div>
              <div className="font-medium">98 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 02:55 pm</div>
            </div>

            <div className="rounded-md border-2 border-red-500 bg-white p-1 flex justify-around items-center text-gray-800 mb-2">
              <div>Sensor 4</div>
              <div>-</div>
              <div className="font-medium">108 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 02:43 pm</div>
            </div>

            <div className="rounded-md border-2 border-red-500 bg-white p-1 flex justify-around items-center text-gray-800 mb-2">
              <div>Sensor 7</div>
              <div>-</div>
              <div className="font-medium">110 °C</div>
              <div>-</div>
              <div className="text-sm">03-09-2024 01:32 pm</div>
            </div>

            <div className="rounded-md border-2 border-red-500 bg-white p-1 flex justify-around items-center text-gray-800 mb-2">
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
      <div
        className="h-[40%] rounded-xl bg-white overflow-hidden p-2"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to left bottom, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #b7c4db, #afbed8, #a7b8d5, #9eb3d2, #96adcf)",
        // }}
        // style={{
        //   backgroundImage:
        //     "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #b7c4db, #afbed8, #a7b8d5, #9eb3d2, #96adcf)",
        // }}
      >
        <ApexCharts
          options={options}
          series={series}
          type="line"
          height="100%"
        />
      </div>
    </div>
  );
}

export default MainPage
