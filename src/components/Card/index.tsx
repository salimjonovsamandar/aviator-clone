import React from "react";
// import games from "../../../games.js";

interface Game {
  name: string;
  provider: string;
  image: string;
}
const card: Game[] = [
  {
    name: "TVBET",
    provider: "Live Games 24/7",
    image: "/tvbet.png",
  },
  {
    name: "Casino",
    provider: "Over 3000 games",
    image: "/casino.png",
  },
  {
    name: "Live games",
    provider: "Live dealers",
    image: "/livegames.png",
  },
  {
    name: "Pocer",
    provider: "free tournaments",
    image: "/poker.png",
  },
];

const Index: React.FC = () => {
  return (
    <div className="px-[25px] flex mt-2 gap-[20px]">
      {card.map((game: Game, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#131B2E] rounded-[12px] cursor-pointer w-[378px] h-[75px] py-1.5 px-2.5"
        >
          <div className="ml-4">
            <h2
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "-8px",
              }}
            >
              {game.name}
            </h2>
            <span
              style={{ color: "white", fontWeight: "600", fontSize: "13px" }}
            >
              {game.provider}
            </span>
          </div>
          <img className="w-[61px] h-[61px] mr-2" src={game.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Index;
