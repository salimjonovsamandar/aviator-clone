import React from "react";
import gaming from "../../assets/icons/gaming.svg";
import theplayer from "../../assets/icons/theplayer.svg";
import wingames from "../../assets/icons/wingames.svg";
import hpgaming from "../../assets/icons/100hpgaming.svg";
import right from "../../assets/icons/right.svg";
import left from "../../assets/icons/left.svg";

interface Game {
  name: string;
  provider: string;
  image: string;
  icon: string;
}

const livegames: Game[] = [
  {
    name: "Crazy Time",
    provider: "Evolution",
    image: "/crazytime.avif",
    icon: "/evolution.svg",
  },
  {
    name: "1win Russian",
    provider: "Pragmatic",
    image: "/winrussian.avif",
    icon: "/pragmatic.svg",
  },
  {
    name: "1win Auto Meg...",
    provider: "Pragmatic",
    image: "/roulette.avif",
    icon: "/pragmatic.svg",
  },
  {
    name: "1win Blackjack",
    provider: "Evolution",
    image: "/blacjack.avif",
    icon: "/evolution.svg",
  },
  {
    name: "Stock Market",
    provider: "Evolution",
    image: "/stockmarket.avif",
    icon: "/evolution.svg",
  },
  {
    name: "Speed Roulette",
    provider: "Ezugi",
    image: "/speedroulette.avif",
    icon: "/ezugi.svg",
  },
  {
    name: "Infinite Blackjack",
    provider: "Evolution",
    image: "/infinite.avif",
    icon: "/evolution.svg",
  },
  {
    name: "Ultimate Roulette",
    provider: "Ezugi",
    image: "/ultimate.avif",
    icon: "/ezugi.svg",
  },
  {
    name: "Roulette",
    provider: "TVBet",
    image: "/roulette.avif",
    icon: "/tvbet.svg",
  },
  {
    name: "Unlimited...",
    provider: "Ezugi",
    image: "/blackjack.avif",
    icon: "/ezugi.svg",
  },
  {
    name: "Funky Time",
    provider: "Evolution",
    image: "/funkytime.avif",
    icon: "/evolution.svg",
  },
  {
    name: "Crazy Pachinko",
    provider: "Evolution",
    image: "/crazypachinko.avif",
    icon: "/evolution.svg",
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
                "linear-gradient(90deg, rgb(255, 78, 223) 0%, rgb(255, 41, 88) 100%)",
            }}
          ></div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-white text-[17px]">
              Livegames{" "}
              <span className="text-[12px] inline-block ml-2 opacity-50">
                577
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
              <div
                className="
               w-[21px]
               h-[30px]
               bg-[rgb(8,85,196)]
               rounded-lg
              absolute
               mr-[665px]
               cursor-pointer
               flex
               items-center
               justify-center
               hover:bg-[#2259a5]
             "
              >
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

              {/* Icon with theplayer */}
              <div
                className=" flex
                items-center
                bg-[#94a6cd26]
                rounded-lg
                cursor-pointer hover:bg-[#e0e7f526]"
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

              {/* Icon with gaming */}
              <div
                className=" flex
                items-center
                bg-[#94a6cd26]
                rounded-lg
                cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img className="w-[22px] h-[22px] mr-2 " src={gaming} alt="" />
                <p style={{ color: "white", fontSize: "13px" }}>7777 Gaming</p>
              </div>

              {/* Icon with gaming */}
              <div
                className=" flex
                items-center
                bg-[#94a6cd26]
                rounded-lg
                cursor-pointer hover:bg-[#e0e7f526]"
                style={{
                  padding: "5px 10px",
                }}
              >
                <img className="w-[22px] h-[22px] mr-2 " src={gaming} alt="" />
                <p style={{ color: "white", fontSize: "13px" }}>7777 Gaming</p>
              </div>

              {/* Icon with hpgaming */}
              <div
                className=" flex
                items-center
                bg-[#94a6cd26]
                rounded-lg
                cursor-pointer hover:bg-[#e0e7f526]"
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

              {/* Icon with wingames */}
              <div
                className=" flex
                items-center
                bg-[#94a6cd26]
                rounded-lg
                cursor-pointer hover:bg-[#e0e7f526]"
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
                className="
               w-[21px]
               h-[30px]
               bg-[rgb(8,85,196)]
               rounded-lg
                              absolute
               ml-[665px]
               cursor-pointer
               flex
               items-center
               justify-center
               hover:bg-[#2259a5]
             "
              >
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

          {/* Render livegames */}
          <div className="flex justify-between flex-wrap gap-[15px]">
            {livegames.map((game: Game, index: number) => (
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
