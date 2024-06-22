import React from "react";
import BetsUsers from "./components/bet-users";
import Main from "./components/Main";
import propeller from "../assets/images/propeller.png";
import AdminHeader from "./components/admin/header";
import Header from "./components/header";

import Context from "./context";
import Headers from "./sections/Headers";
import Navbar from "./sections/Navbar";

function Aviator() {
  const { unityLoading, currentProgress, rechargeState } =
    React.useContext(Context);

  return (
    <>
      <div className="main-container">
        {!unityLoading && (
          <div className="myloading">
            <div className="loading-container">
              <div className="rotation">
                {/* <img alt="propeller" src={propeller}></img> */}
              </div>
              <div className="waiting">
                <div
                  style={{ width: `${currentProgress * 1.111 + 0.01}%` }}
                ></div>
              </div>
              <p>{Number(currentProgress * 1.111 + 0.01).toFixed(2)}%</p>
            </div>
          </div>
        )}
        {rechargeState && (
          <div className="recharge">
            <div className="recharge-body">
              <div className="recharge-body-font">
                Insufficient balance amount
              </div>
              <a href="https://induswin.com/#/pages/recharge/recharge">
                Induswin.com
              </a>
            </div>
          </div>
        )}

        <Headers />
        <Navbar />
        <div className="game-container">
          <Header />
          <BetsUsers />
          {/* <AdminHeader /> */}
          <Main />
        </div>
      </div>
    </>
  );
}

export default Aviator;
