import React from "react";

import HeadNav from "../Navigation/header";
import "./dashBoard.css";
import banner from "../../images/slider-image.webp";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/footer";
import OnDemands from "./OnDemands/onDemand";

import BestSell from "./BestSeller/bestSeller";

function DashBoard() {
  return (
    <>
      <div className="home">
        <Nav></Nav>
      </div>

      <div className="image">
        <img src={banner} />
      </div>

      <div className="onDemands">
        <OnDemands></OnDemands>
      </div>
      <div className="bestSell">
        <BestSell></BestSell>
      </div>

      <Footer />
    </>
  );
}

export default DashBoard;
