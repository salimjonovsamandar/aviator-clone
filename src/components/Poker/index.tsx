import React from "react";
import pokerImg from "../../assets/images/pokerImg.svg";
// import backgroundImage from "../../assets/";

const Index: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "730px",
        height: "288px",
        backgroundColor: "#131B2E",
        marginTop: "16px",
        marginLeft: "20px",
        borderRadius: "1rem",
        padding: "25px",
      }}
      className="p-[25px] bg-[#131B2E] mt-4 ml-5 rounded-2xl"
    >
      <div
        style={{
          height: "5px",
          marginTop: "-25px",
          marginBottom: "20px",
          backgroundImage:
            "linear-gradient(90deg, rgb(27, 241, 255) 0%, rgb(8, 85, 196) 100%)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          zIndex: 0,
          filter: "drop-shadow(0px 10px 40px rgba(200, 200, 200, 0.5))",
          borderRadius: "1rem",
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 1 }} className="mb-5 pl-3">
        <h2 className="text-white text-[32px] font-bold flex items-center">
          <img className="mr-4" src={pokerImg} alt="" />
          Poker
        </h2>
        <p className="text-[16px] text-[#ffffff] mt-3">Come in, play and win</p>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 25px",
            backgroundImage: "linear-gradient(255deg, #00b7ff, #8d53e9)",
            fontWeight: "bold",
            fontSize: "15px",
            borderRadius: "8px",
            color: "white",
          }}
        >
          Get bonus
        </button>
      </div>
    </div>
  );
};

export default Index;
