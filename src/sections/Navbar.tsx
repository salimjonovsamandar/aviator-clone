import React from "react";
import { useState } from "react";
import images12 from "../assets/images12.png";
import { Link, NavLink } from "react-router-dom";
import SiteLogo from "../assets/site-logo.svg";
import LuckyJet from "../assets/lucky-jet.svg";
import SpeedAndCash from "../assets/speed-and-cash.svg";
import Aviator from "../assets/aviator.svg";
import JetX from "../assets/jetx.svg";

interface NavbarItem {
  text: string | null;
  id: number;
  active: boolean;
  img: string | null;
  link: string;
}

const navbar: NavbarItem[] = [
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
    link: "/aviator",
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
    link: "/poker",
  },
  {
    text: "Vsport",
    id: 13,
    active: false,
    img: null,
    link: "#",
  },
];

const Navbar: React.FC = () => {
  const [view, setView] = useState(false);

  return (
    <div className="flex items-center justify-center sticky top-0 z-20">
      <div className="container h-12 bg-[#151929] rounded-md">
        <div className="flex  items-center ">
          <a href="/">
            <img src={SiteLogo} className="w-24 h-8" alt="" />
          </a>
          <div className="flex items-center gap-x-4 mr-4">
            {navbar.map((el) => (
              <a key={el.id} className="hover:scale-105" href={el.link}>
                {el.img == null ? (
                  <p className="text-white">{el.text}</p>
                ) : (
                  <img src={el.img} className="w-14 h-14" alt="" />
                )}
              </a>
            ))}
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
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Trading
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Poker
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Vsport
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Cybersport
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Fantasy Sport
              </NavLink>

              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Betgames
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Twain Sports
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                Fast Sports
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                TVBet
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                1win games
              </NavLink>
              <NavLink
                to="#"
                className="flex items-center justify-center hover:bg-slate-300 w-full text-black text-[13px]"
              >
                1winTv
              </NavLink>
            </div>
          </button>
          <div className="flex items-center ml-44 justify-end cursor-pointer gap-x-2">
            <img
              style={{ width: "300px", height: "50px" }}
              src={images12}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
