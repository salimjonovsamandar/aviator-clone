import React from "react";
// import games from "../../../games.json";
import wingame from "../../assets/icons/wingames.svg";

// Define interfaces for game and provider
interface Game {
  name: string;
  provider: string;
  image: string;
  icon: string;
}

interface Provider {
  name: string;
  image: string;
  icon: string;
}
const wingames: Game[] = [
  {
    name: "Lucky Jet",
    provider: "1win Games",
    image: "/luckyjet.avif",
    icon: "/wingames.svg",
  },
  {
    name: "Spins Queen",
    provider: "Spinomenal",
    image: "/spinsqueen.avif",
    icon: "/spinomenal.svg",
  },
  {
    name: "Rocket Queen",
    provider: "1win Games",
    image: "/rocketqueen.avif",
    icon: "/wingames.svg",
  },
  {
    name: "Mines",
    provider: "1win Games",
    image: "/mines.avif",
    icon: "/wingames.svg",
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
                "linear-gradient(90deg, rgb(27, 241, 255) 0%, rgb(8, 85, 196) 100%)",
            }}
          ></div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-white text-[32px] font-bold flex items-center">
              <img className="mr-4" src={wingame} alt="" />
              1win games
            </h2>
            <p className="text-[11px] text-[#1a68db] cursor-pointer">All</p>
          </div>

          <div className="flex justify-between flex-wrap gap-[15px]">
            {wingames.map((game: Game, index: number) => (
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
