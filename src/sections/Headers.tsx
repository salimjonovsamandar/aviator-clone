import React from "react";
import LockImg from "../assets/lock-img.svg";
import Iphoneimg from "../assets/iphone-img.svg";
import MoneyImg from "../assets/money-img.png";
import PriseImg from "../assets/priseimg.png";
import BonusImg from "../assets/bonus.svg";
import CyberTruckImg from "../assets/cybertrack.png";
import LuckyDrive from "../assets/luckyDrive.svg";
import WindowsImg from "../assets/windows.svg";
import IphoneLogo from "../assets/iphone-logo.svg";
import AndroidLogo from "../assets/android-img.svg";
import enFlag from "../assets/en-flag.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-[#090f1e] h-12 flex items-center justify-center">
      <div className="container">
        <div className="flex items-center">
          <span className="!flex items-center gap-x-3 mr-5">
            <small className="bg-[#1e263d] w-8 h-8 rounded-md flex items-center justify-center ">
              <img src={LockImg} className="w-5 h-5" alt="Lock" />
            </small>
            <small className="bg-[#1e263d] w-8 h-8 rounded-md flex items-center justify-center">
              <img src={Iphoneimg} className="w-5 h-5" alt="iPhone" />
            </small>
          </span>
          <p className="text-gray-50">|</p>
          <span className="w-[150px] bg-[#ffd943] relative rounded-lg h-6 ml-5">
            <img
              src={MoneyImg}
              className="w-20 h-10 absolute top-[-10px]"
              alt="Money"
            />
            <p className="absolute right-1 top-0.5 text-[12px] font-bold">
              Free money!
            </p>
          </span>
        </div>
        <div className="flex items-center gap-x-3">
          <span className="flex items-center gap-x-4">
            <span className="w-[200px] h-6 !flex items-center !gap-x-2 bg-[#20263f] rounded-[25px] relative">
              <small className="flex items-center justify-center w-7 h-7 rounded-full bonus">
                <img src={BonusImg} className="w-4 h-4" alt="Prise" />
              </small>
              <p className="text-blue-50 text-[12px]">Promotions and bonuses</p>
              <small>
                <img
                  src={PriseImg}
                  className="w-14 h-14 absolute top-[-20px] right-[-20px]"
                  alt="Prise Big"
                />
              </small>
            </span>
            <span className="w-[150px] h-6 !flex items-center !gap-x-2 bg-[#20263f] rounded-[25px] relative">
              <small className="flex items-center justify-center w-7 h-7 rounded-full bg-[#c53c2a]">
                <img src={LuckyDrive} className="w-4 h-4" alt="Lucky Drive" />
              </small>
              <p className="text-blue-50 text-[12px]">Lucky Drive</p>
              <small>
                <img
                  src={CyberTruckImg}
                  className="w-14 h-6 absolute top-0 right-2"
                  alt="Cyber Truck"
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
            <img src={WindowsImg} className="w-7 h-7" alt="Windows" />
            <small className="flex items-center gap-x-2 px-3 py-2 bg-[#1e263d] rounded-md">
              <img src={AndroidLogo} className="w-4 h-4" alt="Android" />
              <img src={IphoneLogo} className="w-4 h-4" alt="iPhone" />
            </small>
          </span>
          <p className="text-gray-50">|</p>
          <span className="flex items-center gap-x-3 text-blue-50 bg-[#1e263d] rounded-md px-2 py-1">
            <p>EN</p>
            <img src={enFlag} className="h-4 w-4" alt="English Flag" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
