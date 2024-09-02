import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import xymaLogoWhite from "../Assets/xymaLogoWhite.png";
import hindalcoLogo from "../Assets/hindalcoLogo.png";
import { ImExit } from "react-icons/im";
import {
  MdAutoGraph,
  MdSystemSecurityUpdateWarning,
  MdOutlineUpdate,
} from "react-icons/md";
import {
  BsThermometerSun,
  BsClipboard2DataFill,
  BsDatabaseFillCheck,
} from "react-icons/bs";
import { FaBell, FaTrashAlt } from "react-icons/fa";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import ApexCharts from "react-apexcharts";

const Dashboard = () => {

  // line chart
  const lineOptions = {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 1.5,
    },
    grid: {
      borderColor: "#4d4d4d",
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      marker: {
        show: true
      }
    },
  };

  const lineSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  // bar chart
  const barOptions = {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: Array.from({ length: 15 }, (_, i) => `S${i + 1}`),
      labels: {
        style: {
          fontSize: "6px",
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "6px",
          colors: "#FFFFFF",
        },
      },
    },
    grid: {
      borderColor: "#4d4d4d",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val}°C`,
      },
    },
  };

  const barSeries = [
    {
      name: "Data Series 1",
      data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)),
    },
  ];

  // static table data
  const tableData = [
  { sNo: 1, s1: 45, s2: 67, s3: 23, s4: 89, s5: 12, s6: 34, s7: 56, s8: 78, s9: 90, s10: 21, s11: 43, s12: 65, s13: 87, s14: 34, s15: 76, LastUpdated: '20240831T080000Z' },
  { sNo: 2, s1: 54, s2: 72, s3: 31, s4: 85, s5: 19, s6: 39, s7: 62, s8: 80, s9: 95, s10: 25, s11: 48, s12: 66, s13: 82, s14: 29, s15: 74, LastUpdated: '20240831T080000Z' },
  { sNo: 3, s1: 63, s2: 81, s3: 29, s4: 92, s5: 17, s6: 31, s7: 58, s8: 83, s9: 87, s10: 28, s11: 51, s12: 71, s13: 78, s14: 33, s15: 68, LastUpdated: '20240831T100000Z' },
  { sNo: 4, s1: 72, s2: 90, s3: 25, s4: 88, s5: 14, s6: 36, s7: 63, s8: 77, s9: 85, s10: 30, s11: 54, s12: 75, s13: 91, s14: 40, s15: 81, LastUpdated: '20240831T110000Z' },
  { sNo: 5, s1: 51, s2: 68, s3: 32, s4: 79, s5: 21, s6: 41, s7: 60, s8: 82, s9: 94, s10: 23, s11: 47, s12: 69, s13: 85, s14: 37, s15: 77, LastUpdated: '20240831T120000Z' },
  { sNo: 6, s1: 60, s2: 76, s3: 28, s4: 90, s5: 18, s6: 38, s7: 65, s8: 79, s9: 88, s10: 26, s11: 52, s12: 72, s13: 82, s14: 42, s15: 73, LastUpdated: '20240831T130000Z' },
  { sNo: 7, s1: 47, s2: 64, s3: 30, s4: 87, s5: 22, s6: 33, s7: 57, s8: 81, s9: 93, s10: 20, s11: 50, s12: 68, s13: 80, s14: 35, s15: 71, LastUpdated: '20240831T140000Z' },
  { sNo: 8, s1: 56, s2: 73, s3: 27, s4: 84, s5: 25, s6: 40, s7: 62, s8: 78, s9: 89, s10: 29, s11: 46, s12: 70, s13: 83, s14: 39, s15: 66, LastUpdated: '20240831T150000Z' },
  { sNo: 9, s1: 65, s2: 82, s3: 24, s4: 91, s5: 20, s6: 35, s7: 66, s8: 77, s9: 90, s10: 22, s11: 49, s12: 74, s13: 88, s14: 38, s15: 79, LastUpdated: '20240831T160000Z' },
  { sNo: 10, s1: 74, s2: 89, s3: 26, s4: 86, s5: 23, s6: 37, s7: 69, s8: 82, s9: 94, s10: 27, s11: 53, s12: 76, s13: 91, s14: 41, s15: 84, LastUpdated: '20240831T170000Z' },
  { sNo: 11, s1: 53, s2: 78, s3: 30, s4: 88, s5: 27, s6: 41, s7: 67, s8: 79, s9: 85, s10: 24, s11: 56, s12: 72, s13: 80, s14: 36, s15: 70, LastUpdated: '20240831T180000Z' },
  { sNo: 12, s1: 62, s2: 87, s3: 33, s4: 92, s5: 25, s6: 39, s7: 60, s8: 81, s9: 90, s10: 28, s11: 59, s12: 74, s13: 83, s14: 32, s15: 75, LastUpdated: '20240831T190000Z' },
  { sNo: 13, s1: 71, s2: 92, s3: 29, s4: 87, s5: 30, s6: 34, s7: 68, s8: 79, s9: 89, s10: 31, s11: 62, s12: 76, s13: 81, s14: 41, s15: 77, LastUpdated: '20240831T200000Z' },
  { sNo: 14, s1: 80, s2: 95, s3: 32, s4: 84, s5: 22, s6: 37, s7: 65, s8: 82, s9: 88, s10: 30, s11: 55, s12: 71, s13: 79, s14: 40, s15: 72, LastUpdated: '20240831T210000Z' },
  { sNo: 15, s1: 49, s2: 66, s3: 28, s4: 86, s5: 26, s6: 42, s7: 71, s8: 79, s9: 93, s10: 29, s11: 57, s12: 74, s13: 82, s14: 37, s15: 80, LastUpdated: '20240831T220000Z' },
];


  return (
    <div className="xl:h-screen px-4 py-2 text-white 2xl:text-2xl flex flex-col">
      {/* top bar - h-[10%] */}
      <div className="flex justify-between items-center mb-2 2xl:mb-4 h-[10%]">
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

      {/* main content 1 - h-[45%] */}
      <div className="h-[45%] flex gap-2 2xl:gap-4">
        {/* 12 cards */}
        <div className="w-[60%] flex flex-col gap-4">
          <div className="flex gap-4 h-1/3">
            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 1</div>
                <div className="text-2xl 2xl:text-4xl">54°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 2</div>
                <div className="text-2xl 2xl:text-4xl">44°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 3</div>
                <div className="text-2xl 2xl:text-4xl">65°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 4</div>
                <div className="text-2xl 2xl:text-4xl">62°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 h-1/3">
            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 5</div>
                <div className="text-2xl 2xl:text-4xl">23°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 6</div>
                <div className="text-2xl 2xl:text-4xl">87°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 7</div>
                <div className="text-2xl 2xl:text-4xl">32°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 8</div>
                <div className="text-2xl 2xl:text-4xl">54°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 h-1/3">
            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 9</div>
                <div className="text-2xl 2xl:text-4xl">59°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 10</div>
                <div className="text-2xl 2xl:text-4xl">31°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 11</div>
                <div className="text-2xl 2xl:text-4xl">99°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/4 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 12</div>
                <div className="text-2xl 2xl:text-4xl">74°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex gap-2">
          {/* alert box */}
          <div className=" w-[60%] flex flex-col rounded-md">
            <div className="flex justify-between rounded-t-md items-center bg-gradient-to-r from-[#000000] via-[#34343b] to-[#4b4a54] py-1 px-2">
              <div>Alerts</div>
              <FaBell className="text-xl" />
            </div>
            <div
              className=" bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 flex flex-col gap-2 flex-1 text-gray-800 py-1 px-2 overflow-auto rounded-b-md"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#858585 transparent",
              }}
            >
              <div className="flex w-full justify-between sticky top-0 mb-2">
                <div className="text-sm 2xl:text-base font-medium px-2 rounded-sm bg-red-500 text-white">
                  25&nbsp;Alerts
                </div>
                <div>
                  <FaTrashAlt className="text-red-500 text-xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>

              <div className="border-2 border-red-500 rounded-md p-1 flex justify-around items-center">
                <div>Sensor 1</div>
                <div>-</div>
                <div className="text-red-500 font-medium">98 °C</div>
                <div>-</div>
                <div className="text-sm text-gray-600">02:55 pm</div>
              </div>

              <div className="border-2 border-red-500 rounded-md p-1 flex justify-around items-center">
                <div>Sensor 5</div>
                <div>-</div>
                <div className="text-red-500 font-medium">108 °C</div>
                <div>-</div>
                <div className="text-sm text-gray-600">02:43 pm</div>
              </div>

              <div className="border-2 border-red-500 rounded-md p-1 flex justify-around items-center">
                <div>Sensor 15</div>
                <div>-</div>
                <div className="text-red-500 font-medium">110 °C</div>
                <div>-</div>
                <div className="text-sm text-gray-600">01:32 pm</div>
              </div>
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-2">
            {/* last update */}
            <div className="h-[15%] flex gap-2">
              <div className="w-[80%] flex gap-1 justify-around items-center px-2 bg-gradient-to-tr from-green-600 via-green-500 to-green-400 rounded-md">
                <BsClipboard2DataFill className="text-xl 2xl:text-3xl" />
                <div>Report Analysis</div>
              </div>
              <div className="w-[20%] flex justify-center items-center">
                <div className="h-9 w-9 2xl:h-12 2xl:w-12 flex justify-center items-center rounded-full bg-red-500">
                  <MdSystemSecurityUpdateWarning className="text-2xl 2xl:text-3xl" />
                </div>
              </div>
            </div>
            {/* reports */}
            <div className="h-[25%] bg-gradient-to-tr from-gray-200 via-gray-100 to-white flex flex-col justify-evenly rounded-md text-gray-600 p-1">
              <div className="flex items-center gap-2">
                <MdOutlineUpdate className="text-2xl 2xl:text-3xl" />
                <div>Last Updated Data: </div>
              </div>
              <div className="text-center text-sm 2xl:text-xl font-medium">
                02-09-2024 11:45 am
              </div>
            </div>
            {/* settings */}
            <form
              className="bg-gradient-to-tr from-gray-200 via-gray-100 to-white h-[60%] rounded-md text-gray-600 py-1 px-2 flex flex-col justify-evenly"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-center text-red-500">
                <LiaRulerVerticalSolid className="text-2xl 2xl:text-3xl" />
                <div>Alert&nbsp;limit</div>
              </div>
              <div className="flex items-center gap-2">
                <div>Current&nbsp;Limit</div>
                <div className="border border-black py-0.5 px-1 w-full text-sm 2xl:text-base font-medium rounded-sm text-center bg-white">
                  75 °C
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>Change&nbsp;Limit</div>
                <input
                  type="text"
                  required
                  className="border border-black py-0.5 px-1 w-full text-sm 2xl:text-base font-medium rounded-sm focus:outline-none bg-white"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:scale-[1.03] duration-200 text-white p-1 px-2 rounded-md"
              >
                Set
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* main content 2 - h-[45%] */}
      <div className="h-[45%] flex">
        {/* left side */}
        <div className="w-[45%] flex flex-col gap-2 2xl:gap-4 mt-4">
          {/* 3 cards */}
          <div className="h-1/3 flex gap-4">
            <div className="square-btn w-1/3 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 13</div>
                <div className="text-2xl 2xl:text-4xl">43°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/3 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 14</div>
                <div className="text-2xl 2xl:text-4xl">10°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>

            <div className="square-btn w-1/3 py-1 px-2 text-sm 2xl:text-lg flex items-center justify-center gap-1">
              <BsThermometerSun className="text-4xl 2xl:text-5xl" />
              <div>
                <div className="text-center">Sensor 15</div>
                <div className="text-2xl 2xl:text-4xl">32°C</div>
              </div>
              <div className="absolute right-1 bottom-1 2xl:right-2 2xl:bottom-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-400 rounded-sm hover:scale-110 duration-200 cursor-pointer">
                <MdAutoGraph className="text-xl 2xl:text-3xl" />
              </div>
            </div>
          </div>
          <div className="h-2/3 flex gap-2 2xl:gap-4 ">
            {/* table */}
            <div
              className="w-1/2 overflow-auto text-center border border-white "
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#858585 transparent",
              }}
            >
              <table className="w-full">
                <thead className="sticky top-0 text-white text-sm bg-gradient-to-t from-[#000000] via-[#34343b] to-[#4b4a54] border border-b-white border-l-transparent border-r-transparent border-t-transparent">
                  <tr>
                    <th className="px-2">S.No</th>
                    <th className="px-2">S1</th>
                    <th className="px-2">S2</th>
                    <th className="px-2">S3</th>
                    <th className="px-2">S4</th>
                    <th className="px-2">S5</th>
                    <th className="px-2">S6</th>
                    <th className="px-2">S7</th>
                    <th className="px-2">S8</th>
                    <th className="px-2">S9</th>
                    <th className="px-2">S10</th>
                    <th className="px-2">S11</th>
                    <th className="px-2">S12</th>
                    <th className="px-2">S13</th>
                    <th className="px-2">S14</th>
                    <th className="px-2">S15</th>
                    <th className="px-2">Last&nbsp;Updated</th>
                  </tr>
                </thead>

                <tbody className="text-[10px] 2xl:text-base ">
                  {tableData.map((row, i) => (
                    <tr key={row.i} className={`${i % 2 === 0 ? "" : ""}`}>
                      <td>{row.sNo}</td>
                      <td>{row.s1}</td>
                      <td>{row.s2}</td>
                      <td>{row.s3}</td>
                      <td>{row.s4}</td>
                      <td>{row.s5}</td>
                      <td>{row.s6}</td>
                      <td>{row.s7}</td>
                      <td>{row.s8}</td>
                      <td>{row.s9}</td>
                      <td>{row.s10}</td>
                      <td>{row.s11}</td>
                      <td>{row.s12}</td>
                      <td>{row.s13}</td>
                      <td>{row.s14}</td>
                      <td>{row.s15}</td>
                      <td>{row.LastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* bar */}
            <div className="border border-white w-1/2 overflow-hidden p-1">
              <ApexCharts
                options={barOptions}
                series={barSeries}
                type="bar"
                height="100%"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="border border-white w-[55%] mt-2 ml-2 2xl:mt-4 2xl:ml-4 overflow-hidden p-1">
          <ApexCharts
            options={lineOptions}
            series={lineSeries}
            type="line"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
