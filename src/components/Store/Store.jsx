import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import StoreNav from "../Navigation/Nav";
import Footer from "../Footer/footer";
import productCart from "../ProductList/productList";

const products = [
  // ...productCart,
];

const itemsPerPage = 6; // Số sản phẩm hiển thị trên mỗi trang

const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productCart.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div>
      <StoreNav />
      <div className="store-header">
        <h2>Store</h2>
        <div className="store-search-container">
          <input type="text" placeholder="search..." />
          <button type="button">search</button>
        </div>
      </div>
      <div className="product-grid">
        {currentProducts.map((productCart, index) => (
          <div key={productCart.id} className="product-card">
            <img src={productCart.thumb} alt={productCart.product_name} />
            <h3>{productCart.product_name}</h3>
            <p>Price: {productCart.price}{productCart.currency}</p>
            <div className="button-container">
              <button>Buy</button>
              <button>🤍</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <div className="pagination">
          {Array.from({
            length: Math.ceil(productCart.length / itemsPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#8592;
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
          >
            &#8594;
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Store;
