import React from 'react';
import { Link } from "react-router-dom";
import xymaLogoWhite from "../Assets/xymaLogoWhite.png";
import hindalcoLogo from "../Assets/hindalcoLogo.png";
import { ImExit } from "react-icons/im";
import { MdAutoGraph } from "react-icons/md";
import { BsThermometerSun } from "react-icons/bs";
import {
  Chart,
  ChartCanvas,
  LineSeries,
  XAxis,
  YAxis,
} from "react-financial-charts";
import { scaleTime, scaleLinear } from "d3-scale";
import { timeDay } from "d3-time";

const Dashboard = () => {

  const data = [
    { date: new Date(2024, 7, 1), value: 100 },
    { date: new Date(2024, 7, 2), value: 200 },
    { date: new Date(2024, 7, 3), value: 150 },
    { date: new Date(2024, 7, 4), value: 250 },
    { date: new Date(2024, 7, 5), value: 300 },
  ];

   const xAccessor = (d) => d.date;
   const xExtents = [data[0].date, data[data.length - 1].date];

   const xScale = scaleTime().domain(xExtents).range([0, 600]); 

  return (
    <div className="xl:h-screen px-4 py-2 text-white 2xl:text-2xl flex flex-col">
      {/* top bar - h-[10%] */}
      <div className="flex justify-between items-center mb-2">
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
      <div className="flex items-center mb-2">
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
      <div className="h-[42.5%] flex gap-2 2xl:gap-4">
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
        <div className="border border-white w-[40%]">alert notification</div>
      </div>

      {/* main content 2 - h-[42.5%] */}
      <div className="h-[42.5%] flex">
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
          <div className="h-2/3 flex gap-2 2xl:gap-4">
            {/* table */}
            <div className="border border-white w-1/2">table</div>
            {/* bar */}
            <div className="border border-white w-1/2">bar chart</div>
          </div>
        </div>
        {/* right side */}
        <div className="relative border border-white w-[55%] mt-2 ml-2">
          <ChartCanvas
            height={250}
            ratio={1}
            width={700}
            seriesName="Line Chart"
            data={data}
            xScale={xScale}
            xAccessor={xAccessor}
            xExtents={xExtents}
          >
            <Chart id={1} yExtents={(d) => d.value}>
              <XAxis />
              <YAxis />
              <LineSeries yAccessor={(d) => d.value} />
            </Chart>
          </ChartCanvas>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
