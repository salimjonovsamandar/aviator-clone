import React from "react";
import Footer from "../components/Footer";
// import MoviesCarusel from "../components/MoviesCarusel";
import Casino from "../components/Casino/index";
import Livegame from "../components/Livegame/index";
import Wingames from "../components/Wingames/index";
import Card from "../components/Card/index";
import Poker from "../components/Poker/index";
import MainLayout from "./MainLayout";
import TwoCard from "../components/TwoCard/index";
import MoviesCarousel from "../components/MoviesCorusel";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className=""
      >
        <MoviesCarousel />
        <TwoCard />
      </div>
      <Card />
      <div style={{ display: "flex" }}>
        <Wingames />
        <Poker />
      </div>
      <div style={{ display: "flex" }}>
        <Casino />
        <Livegame />
      </div>
      {/* <MoviesCarusel /> */}
      <Footer />
    </>
  );
};

export default Home;
