import React from "react";
import "./App.css";
import Header from "./components/header/header";
import LandingPage1 from "./components/landingpage/landingpage1";
import apple from "../src/assets/Apple.png";
import github from "../src/assets/Github.png";
import nike from "../src/assets/Nike.png";
import Google from "../src/assets/Google+.png";
import tripadvisor from "../src/assets/Tripadvisor.png";
import jeep from "../src/assets/Jeep.png";
import icon11 from "../src/assets/icon11.png";
import icon12 from "../src/assets/icon12.png";
import icon13 from "../src/assets/icon13.png";
import icon14 from "../src/assets/icon14.png";
import icon15 from "../src/assets/icon15.png";
import icon16 from "../src/assets/icon16.png";
import {CheckCircleIcon} from '@heroicons/react/24/outline'
import mac from '../src/assets/MacBook Pro.png'
import group from '../src/assets/group.png'
function App() {
  return (
    <div>
      <Header />
      <LandingPage1 />
      <div className="flex  justify-center">
        <div className="bg-white absolute mt-[-70px] px-[4rem] py-[2rem] rounded-lg shadow-xl">
          <div>
            <p className="text-[#006E1C] font-bold text-lg text-center py-3">
              Trusted by over 200+ merchants
            </p>
          </div>
          <div className="flex lg:space-x-10 space-y-3 justify-around items-center flex-wrap ">
            <img src={apple} alt="dummyimage" className="lg:w-[34px] lg:h-[36px] w-8 h-9" />
            <img src={jeep} alt="dummyimage" className="lg:w-[74px] lg:h-[26px]" />
            <img src={Google} alt="dummyimage" className="lg:w-[55px] lg:h-[35px]" />
            <img src={nike} alt="dummyimage" className="lg:w-[73px] lg:h-[24px]" />
            <img src={tripadvisor} alt="dummyimage" className="lg:w-[48px] lg:h-[30px]" />
            <img src={github} alt="dummyimage" className="lg:w-[30px] lg:h-[30px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#F8FFF2] lg:h-[100vh] px-[7rem] py-24">
        <div className="pt-[7rem] lg:w-2/4">
          <h1 className="text-[40px] font-semibold">How does it work?</h1>
          <p className="lg:w-2/3 text-[#AAACA6]">
            Takke is a platform that helps individuals purchase what they could
            not normally afford, 100% online and no credit check.
          </p>
        </div>
        <div className="flex flex-wrap lg:grid grid-cols-4 pt-20 space-y-8 lg:space-y-0">
          <div className=" col-span-1 px-3">
            <div className="flex items-center space-x-10">
              <p className="px-5 text-[1rem] p-3 rounded-[49%] font-bold text-white bg-[#00C642] w-fit">
                1
              </p>
              <hr />
            </div>
            <div className="lg:w-2/3 space-y-4 pt-6">
              <h1 className="text-[#006E1C] text-xl lg:w-2/3 font-semibold ">
                Sign up on platform
              </h1>
              <p className="text-[#767873] text-sm">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </div>
          </div>
          <div className=" col-span-1 px-3">
            <div className="flex items-center space-x-10">
              <p className="px-5 text-[1rem] p-3 rounded-[49%] font-bold text-white bg-[#00C642] w-fit">
                2
              </p>
              <hr />
            </div>
            <div className="lg:w-2/3 space-y-4 pt-6">
              <h1 className="text-[#006E1C] text-xl lg:w-[80%] font-semibold ">
                Set up your merchant store
              </h1>
              <p className="text-[#767873] text-sm">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </div>
          </div>
          <div className=" col-span-1 px-3">
            <div className="flex items-center space-x-10">
              <p className="px-5 text-[1rem] p-3 rounded-[49%] font-bold text-white bg-[#00C642] w-fit">
                3
              </p>
              <hr />
            </div>
            <div className="lg:w-2/3 space-y-4 pt-6">
              <h1 className="text-[#006E1C] text-xl lg:w-[80%] font-semibold ">
                Integrate our API in store
              </h1>
              <p className="text-[#767873] text-sm">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </div>
          </div>
          <div className=" col-span-1 px-3">
            <div className="flex items-center space-x-10">
              <p className="px-5 text-[1rem] p-3 rounded-[49%] font-bold text-white bg-[#00C642] w-fit">
                4
              </p>
              <hr />
            </div>
            <div className="lg:w-2/3 space-y-4 pt-6">
              <h1 className="text-[#006E1C] text-xl lg:w-2/3 font-semibold ">
                Start selling out
              </h1>
              <p className="text-[#767873] text-sm">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] lg:h-[50vh] space-y-5 lg:space-y-0 flex flex-col-reverse lg:flex-row px-[5rem] justify-around items-center">
        <div className="text-sm text-[#8F918C] h-fit space-y-8 w-[40%]">
          <div className="flex justify-around items-center">
            <div className="w-[75px] flex items-center flex-col">
              <div className="px-3 bg-[#F5FFEE] py-3 rounded-full w-[60px] h-[60px] flex justify-center">
                <img src={icon14} alt="dummyimage" />
              </div>
              <p className="text-center">Online retail store</p>
            </div>
            <div className="w-[89px] flex items-center flex-col">
              <div className="px-3 bg-[#F5FFEE] py-3 rounded-full w-[60px] h-[60px]  flex justify-center">
                <img src={icon16} alt="dummyimage" />
              </div>
              <p className="text-center">Furniture and household store</p>
            </div>
            <div className="w-[78px] flex items-center flex-col">
              <div className="px-3 bg-[#F5FFEE] py-3 rounded-full w-[60px] h-[60px]  flex justify-center">
                <img src={icon15} alt="dummyimage" />
              </div>
              <p className="text-center">Fashion Store</p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="w-[83px] flex items-center flex-col">
              <div className="px-3 bg-[#F5FFEE] py-3 rounded-full w-[60px] h-[60px]  flex justify-center">
                <img src={icon13} alt="dummyimage" />
              </div>
              <p className="text-center">Travel Agency</p>
            </div>
            <div className="w-[60px] flex items-center flex-col">
              <div className="px-3 bg-[#F5FFEE] py-3 rounded-full w-[60px] h-[60px]  flex justify-center">
                <img src={icon12} alt="dummyimage" />
              </div>
              <p className="text-center">Schools</p>
            </div>
            <div className="w-[90px] flex items-center flex-col">
              <div className="px-3 bg-[#F5FFEE] py-3 rounded-full w-[60px] h-[60px]  flex justify-center">
                <img src={icon11} alt="dummyimage" />
              </div>
              <p className="text-center">Subscription based services</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] space-y-4">
          <h1 className="text-[42px] font-extrabold lg:w-2/3 text-[#1D1D1D] leading-[45px]">
            No matter your business, we have you covered
          </h1>
          <p className="text-[#AAACA6] lg:w-2/3">
            Takke is a platform that helps individuals purchase what they could
            not normally afford, 100% online and no credit check.
          </p>
        </div>
      </div>
      <div className="bg-[#F7F0EA] lg:h-[70.6vh] h-fit pt-8 lg:pl-[6rem] flex justify-between">
        <div className="lg:w-2/5 pl-8 pt-16 pb-4">
          <h1 className="text-[35px] lg:w-2/3 font-bold">
            Track your sales in real time. No hassles
          </h1>
          <ul className="pt-8 text-[#767873] space-y-4 text-sm">
            <li className="flex space-x-5">
              <CheckCircleIcon color="#006E1C" className="h-7 w-7" />
              <p className="w-2/3">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </li>
            <li className="flex space-x-5">
              <CheckCircleIcon color="#006E1C" className="h-7 w-7" />
              <p className="w-2/3">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </li>
            <li className="flex space-x-5">
              <CheckCircleIcon color="#006E1C" className="h-7 w-7" />
              <p className="w-2/3">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[48%] hidden lg:flex">
          <img src={mac} alt="dummyimage" className="h-[500px] w-[700px]" />
        </div>
      </div>
      <div className="bg-[#FBFBFB] lg:h-[90vh] flex items-center px-[5rem] justify-between py-16">
        <div className="lg:w-[60%] hidden lg:flex items-center justify-center">
          <img src={group} alt="dummyimage" className="w-[25rem]" />
        </div>
        <div className="lg:w-2/5 lg:pl-8 pt-16">
          <h1 className="text-[35px] lg:w-2/3 font-extrabold">
            Integrate our payment system easily
          </h1>
          <ul className="pt-8 text-[#767873] space-y-4 text-sm">
            <li className="flex space-x-5 lg:w-2/3">
              <CheckCircleIcon color="#006E1C" className="h-7 w-7" />
              <p className="w-2/3">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </li>
            <li className="flex space-x-5 w-2/3">
              <CheckCircleIcon color="#006E1C" className="h-7 w-7" />
              <p className="w-2/3">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </li>
            <li className="flex space-x-5 w-2/3">
              <CheckCircleIcon color="#006E1C" className="h-7 w-7" />
              <p className="w-2/3">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
            </li>
          </ul>
          <button className="border-2 border-[#006E1C] text-sm px-4 py-2 rounded-md text-[#006E1C] mt-8">
            Takke API Documentation
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
