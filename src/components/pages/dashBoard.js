import React from "react";

import HeadNav from "../Navigation/header";
import "./dashBoard.css";
import banner from "../../images/slider-image.webp";
import "../Navigation/Nav";

import BestSell from "./BestSeller/bestSeller";

function DashBoard() {
  return (
    <>
      <div className="home">
        <HeadNav></HeadNav>
      </div>

      <div className="image">
        <img src={banner} />
      </div>

      <div className="bestSell">
        <BestSell></BestSell>
      </div>
    </>
  );
}

export default DashBoard;
