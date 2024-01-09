import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Favorite.css";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/footer";

const ProductItem = ({ name, image, price, onRemove, onAddToCart }) => (
    <div className="product-item">
      <img src={image} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{price}d</p>
      </div>
      <div className="product-actions">
        <button onClick={onRemove}>X</button>
        <button onClick={onAddToCart}>Buy</button>
      </div>
    </div>
  );
  
  const Favorite = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([
      { id: 1, name: 'Sản phẩm 1', image: 'url/to/image1.jpg', price: 29.99 },
      { id: 2, name: 'Sản phẩm 2', image: 'url/to/image2.jpg', price: 39.99 },
      { id: 3, name: 'Sản phẩm 3', image: 'url/to/image3.jpg', price: 49.99 },
      // Thêm các sản phẩm khác nếu cần
    ]);
  
    const removeProduct = (productId) => {
      const updatedProducts = favoriteProducts.filter(product => product.id !== productId);
      setFavoriteProducts(updatedProducts);
    };
  
    const addToCart = (productId) => {
      // Implement logic to add product to cart
      console.log(`Thêm sản phẩm có ID ${productId} vào giỏ hàng`);
    };
  
    return (
        <div>
        <Nav/>
        <div className="favorite-products-page">
        <h2>Favorite List</h2>
        {favoriteProducts.map(product => (
          <ProductItem
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onRemove={() => removeProduct(product.id)}
            onAddToCart={() => addToCart(product.id)}
          />
        ))}
      </div>
      <Footer/>
      </div>
);
};
  
  export default Favorite;