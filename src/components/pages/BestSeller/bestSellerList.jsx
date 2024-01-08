import React, { useState, useEffect } from "react";
import productList from "../../ProductList/productList"; // Assuming this is correct

const BestList = () => {
  const [productCart, setProductCart] = useState([]); // Renamed state variables

  const fetchProduct = async () => {
    const response = await fetch("http://localhost:4000/api/product", {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.products);
      setProductCart(data.products); // Use correct setter function
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="main_content">
      {productCart.map((item) => (
        <div className="card" key={item.id}>
          <div className="card_img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card_header">
            <h2>{item.name}</h2>
            <p style={{ color: "black" }}>{item.description}</p>
            <p className="price">
              {item.price}
              <span>$</span>
            </p>
            <div className="btn">Add to cart</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestList;
