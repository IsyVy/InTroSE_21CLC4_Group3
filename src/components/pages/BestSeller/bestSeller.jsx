import "./bestSeller.css";
import BestList from "./bestSellerList";

function BestSell() {
  return (
    <>
      <div className="ic-title">
        <div className="ic"></div>
        BEST SELLERS
      </div>
      <hr
        style={{
          width: "1050px",
          marginTop: "30px",
          marginLeft: "165px",
          height: "1px",
          backgroundColor: "#e1e8f2",
          opacity: "50%",
        }}
      ></hr>
      <hr
        style={{
          marginLeft: "165px",
          width: "130px",
          height: "3.5px",
          backgroundColor: "#eb5d44",
          border: "#eb5d44",
          marginTop: "-12px",
        }}
      ></hr>
      <BestList></BestList>
    </>
  );
}

export default BestSell;
