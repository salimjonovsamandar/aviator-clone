import React from "react";
import LockImg from "../assets/lock-img.svg";
import Iphoneimg from "../assets/iphone-img.svg";
import MoneyImg from "../assets/money-img.png";
import PriseImg from "../assets/priseimg.png";
import CyberTruckImg from "../assets/cybertrack.png";
import LuckyDrive from "../assets/luckyDrive.svg";
import WindowsImg from "../assets/windows.svg";
import IphoneLogo from "../assets/iphone-logo.svg";
import AndroidLogo from "../assets/android-img.svg";

import enFlag from "../assets/en-flag.svg";

function Header() {
  return (
    <div className="bg-[#090f1e] h-12 flex items-center justify-center">
      <div className="flex items-center justify-between w-full  py-2 max-w-[1472px]">
        <div className="flex items-center">
          <span className="flex items-center gap-x-3 mr-5">
            <small className="bg-[#1e263d] w-8 h-8 rounded-md flex items-center justify-center ">
              <img src={LockImg} className="w-5 h-5" />
            </small>
            <small className="bg-[#1e263d] w-8 h-8 rounded-md flex items-center justify-center">
              <img src={Iphoneimg} className="w-5 h-5" />
            </small>
          </span>
          <p className="text-gray-50">|</p>
          <span className="w-[150px] bg-[#ffd943] relative rounded-lg h-6 ml-5">
            <img src={MoneyImg} className="w-20 h-10 absolute top-[-10px]" />
            <p className="absolute right-1 top-0.5 text-[12px] font-bold">
              Free money!
            </p>
          </span>
        </div>
        <div className="flex items-center gap-x-3">
          <span className="flex items-center gap-x-4">
            <span className="w-[200px] h-6 flex items-center gap-x-2 bg-[#20263f] rounded-[25px] relative">
              <small className="flex items-center justify-center w-7 h-7 rounded-full bonus">
                <img src={PriseImg} className="w-4 h-4" />
              </small>
              <p className="text-blue-50 text-[12px]">Promotions and bonuses</p>
              <small>
                <img
                  src={PriseImg}
                  className="w-14 h-14 absolute top-[-20px] right-[-20px]"
                />
              </small>
            </span>
            <span className="w-[150px] h-6 flex items-center gap-x-2 bg-[#20263f] rounded-[25px] relative">
              <small className="flex items-center justify-center w-7 h-7 rounded-full bg-[#c53c2a]">
                <img src={LuckyDrive} className="w-4 h-4" />
              </small>
              <p className="text-blue-50 text-[12px]">Lucky Drive</p>
              <small>
                <img
                  src={CyberTruckImg}
                  className="w-14 h-6 absolute top-0 right-2"
                />
              </small>
            </span>
          </span>
          <p className="text-gray-50">|</p>
          <span className="flex items-center gap-x-3">
            <small className="flex items-start flex-col text-blue-50 text-[12px]">
              <p>App</p>
              <p>for Windows</p>
            </small>
            <img src={WindowsImg} className="w-7 h-7" />
            <small className="flex items-center gap-x-2 px-3 py-2 bg-[#1e263d] rounded-md">
              <img src={AndroidLogo} className="w-4 h-4" />
              <img src={IphoneLogo} className="w-4 h-4" />
            </small>
          </span>
          <p className="text-gray-50">|</p>
          <span className="flex items-center gap-x-3 text-blue-50 bg-[#1e263d] rounded-md px-2 py-1">
            <p>EN</p>
            <img src={enFlag} className="h-4 w-4" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
