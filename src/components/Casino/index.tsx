import React from "react";
// import games from "../../../games.js";
import gaming from "../../assets/icons/gaming.svg";
import theplayer from "../../assets/icons/theplayer.svg";
import wingames from "../../assets/icons/wingames.svg";
import hpgaming from "../../assets/icons/100hpgaming.svg";
import right from "../../assets/icons/right.svg";
import left from "../../assets/icons/left.svg";

interface Casino {
  name: string;
  provider: string;
  image: string;
  icon: string;
}
const casino: Casino[] = [
  {
    name: "Majestic 1win",
    provider: "Spinomenal",
    image: "/majestic.avif",
    icon: "/spinomenal.svg",
  },
  {
    name: "CrashX",
    provider: "Turbo Games",
    image: "/crash.avif",
    icon: "/turbo.svg",
  },
  {
    name: "Hot Cash: Hold...",
    provider: "Netgame",
    image: "/hot.avif",
    icon: "/netgame.svg",
  },
  {
    name: "Money Hive 50...",
    provider: "Netgame",
    image: "/money.avif",
    icon: "/netgame.svg",
  },
  {
    name: "Coin Win: Hold...",
    provider: "Gamzix",
    image: "/coinwin.avif",
    icon: "/gamzix.svg",
  },
  {
    name: "1win - Baba Yaga",
    provider: "Spinomenal",
    image: "/baba.avif",
    icon: "/spinomenal.svg",
  },
  {
    name: "1win Pipe",
    provider: "Mancala Gaming",
    image: "/pipe.avif",
    icon: "/mancala.svg",
  },
  {
    name: "Joker Stoker",
    provider: "Endorphina",
    image: "/joker.avif",
    icon: "/endorphina.svg",
  },
  {
    name: "Big Win x25",
    provider: "Mascot Gaming",
    image: "/big.avif",
    icon: "/mascot.svg",
  },
  {
    name: "Sun Crown",
    provider: "AmigoGaming",
    image: "/sun.avif",
    icon: "/amigogaming.svg",
  },
  {
    name: "Burning Slots...",
    provider: "BF Games",
    image: "/burning.avif",
    icon: "/bfgames.svg",
  },
  {
    name: "J Mania Golden...",
    provider: "Rubyplay",
    image: "/jmania.avif",
    icon: "/rubyplay.svg",
  },
];

const Index: React.FC = () => {
  return (
    <div>
      <div className="p-[25px] w-[730px] bg-[#131B2E] mt-4 ml-5 rounded-2xl">
        <div>
          <div
            style={{
              height: "5px",
              marginTop: "-25px",
              marginBottom: "20px",
              backgroundImage:
                "linear-gradient(90deg, rgb(0, 183, 255) 0%, rgb(199, 0, 255) 50%, rgb(255, 187, 0) 100%)",
            }}
          ></div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-white text-[17px]">
              Casino{" "}
              <span className="text-[12px] inline-block ml-2 opacity-50">
                13386
              </span>
            </h2>
            <p className="text-[11px] text-[#1a68db] cursor-pointer">All</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                marginBottom: "25px",
                position: "relative",
              }}
            >
              <div className="w-[21px] h-[30px] bg-[rgb(8,85,196)] rounded-lg absolute mr-[665px] cursor-pointer flex items-center justify-center hover:bg-[#2259a5] ">
                <img
                  style={{
                    width: "10px",
                    height: "10px",
                    display: "flex",
                    marginLeft: "5px",
                  }}
                  src={left}
                  alt=""
                />
              </div>

              <div
                className=" flex items-center bg-[#94a6cd26] rounded-lg cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img className="w-[22px] h-[22px] mr-2 " src={gaming} alt="" />
                <p style={{ color: "white", fontSize: "13px" }}>7777 Gaming</p>
              </div>

              <div
                className=" flex items-center bg-[#94a6cd26] rounded-lg cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img className="w-[22px] h-[22px] mr-2 " src={gaming} alt="" />
                <p style={{ color: "white", fontSize: "13px" }}>7777 Gaming</p>
              </div>
              <div
                className=" flex items-center bg-[#94a6cd26] rounded-lg cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img
                  className="w-[22px] h-[22px] mr-2 "
                  src={theplayer}
                  alt=""
                />
                <p style={{ color: "white", fontSize: "13px" }}>4ThePlayer</p>
              </div>

              <div
                className=" flex items-center bg-[#94a6cd26] rounded-lg cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img
                  className="w-[22px] h-[22px] mr-2 "
                  src={wingames}
                  alt=""
                />
                <p style={{ color: "white", fontSize: "13px" }}>1win Games</p>
              </div>

              <div
                className=" flex items-center bg-[#94a6cd26] rounded-lg cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img
                  className="w-[22px] h-[22px] mr-2 "
                  src={hpgaming}
                  alt=""
                />
                <p style={{ color: "white", fontSize: "13px" }}>100HP Gaming</p>
              </div>
              <div className="w-[21px] h-[30px] bg-[rgb(8,85,196)] rounded-lg absolute ml-[665px] cursor-pointer flex items-center justify-center hover:bg-[#2259a5]">
                <img
                  style={{
                    width: "10px",
                    height: "10px",
                    display: "flex",
                    marginLeft: "5px",
                  }}
                  src={right}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-wrap gap-[15px]">
            {casino.map((game, index) => (
              <div className="w-[150px] cursor-pointer" key={index}>
                <img
                  className="w-[160px] h-[120px] mb-2 rounded-[10px]"
                  src={game.image}
                  alt=""
                />
                <div className="flex items-center gap-1">
                  <img className="w-[16px] h-[16px]" src={game.icon} alt="" />
                  <p className="text-[11px] text-[#667697]">{game.provider}</p>
                </div>
                <h3 className="mt-1 text-[14px] font-bold text-white">
                  {game.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
