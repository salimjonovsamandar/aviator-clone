import React from "react";
import { Link, NavLink } from "react-router-dom";

import SiteLogo from "../assets/site-logo.svg";
import LuckyJet from "../assets/lucky-jet.svg";
import SpeedAndCash from "../assets/speed-and-cash.svg";
import Aviator from "../assets/aviator.svg";
import JetX from "../assets/jetx.svg";
import { useState } from "react";

const navbar = [
  {
    text: "Home",
    id: 1,
    active: false,

    img: null,
    link: "/",
  },
  {
    text: "Live",
    id: 2,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: "Sports",
    id: 3,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: "Casino",
    id: 4,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: "Live-games",
    id: 5,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: null,
    id: 6,
    active: false,
    img: LuckyJet,
    link: "#",
  },
  {
    text: null,
    id: 7,
    active: false,
    img: SpeedAndCash,
    link: "#",
  },
  {
    text: null,
    id: 8,
    active: false,

    img: Aviator,
    link: "aviator",
  },
  {
    text: null,
    id: 9,
    active: false,
    img: JetX,
    link: "#",
  },
  {
    text: "Quick games",
    id: 10,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: "Trading",
    id: 11,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: "Poker",
    id: 12,
    active: false,
    img: null,
    link: "#",
  },
  {
    text: "Vsport",
    id: 13,
    active: false,
    img: null,
    link: "#",
  },
];

function Navbar() {
  const [view, setView] = useState(false);
  return (
    <div className="flex items-center justify-center sticky top-0 z-20">
      <div className="flex items-center justify-between w-full h-12 px-3 py-2 max-w-[1473px] bg-[#171f33] rounded-md">
        <div className="flex items-center">
          <Link to="/">
            <img src={SiteLogo} className="w-24 h-8" alt="" />
          </Link>
          <div className="flex items-center gap-x-4 mr-4">
            {navbar.map((el) => {
              return (
                <NavLink className="hover:scale-105" to={el.link}>
                  {el.img == null ? (
                    <p className="text-white">{el.text}</p>
                  ) : (
                    <img src={el.img} className="w-14 h-14" />
                  )}
                </NavLink>
              );
            })}
          </div>
          <button
            onMouseOver={() => setView(true)}
            onMouseLeave={() => setView(false)}
            className="relative flex items-center justify-center h-8 text-white w-[70px] bg-[#283148] rounded-md"
          >
            <p>More...</p>
            <div
              onMouseOver={() => setView(true)}
              className={`${
                view ? "flex items-center flex-col gap-y-2" : "hidden"
              } w-32 absolute py-2 top-9 bg-white rounded-md  text-center`}
            >
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Trading
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Poker
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Vsport
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Cybersport
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Fantasy Sport
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Betgames
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Twain Sports
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                Fast Sports
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                TVBet
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                1win games
              </li>
              <li className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]">
                1winTv
              </li>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-x-2">
          <span className="bg-[#1f2841] h-8 rounded-md w-[80px] text-white flex items-center justify-center">
            Вход
          </span>
          <span className="bg-[#23b260] w-[130px] h-8 px-2 text-white flex items-center justify-around rounded-md">
            <small className="w-5 flex items-center justify-center h-5 rounded-full plus-bg">
              +
            </small>
            <p className="">Регистрация</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
