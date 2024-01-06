import React from "react";
import './Cart.css';
import Nav from "../Navigation/Nav";
import cartProductList from "../ProductList/cartProductList";

const itemsPerPage = 7;

const Cart = () => {
  // Giả sử có một giỏ hàng với các sản phẩm
  const cartItems = cartProductList;

  // Tính tổng số tiền của giỏ hàng
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);

  // Trang hiện tại
  const [currentPage, setCurrentPage] = React.useState(1);

  // Xác định index bắt đầu và kết thúc cho sản phẩm trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Hiển thị chỉ các sản phẩm trên trang hiện tại
  const displayedItems = cartItems.slice(startIndex, endIndex);

  return (
    <div>
    <Nav />
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-items">
        {/* Column Headers */}
        <div className="cart-item cart-header">
          <div className="product">Product</div>
          <div className="quantity">Quantity</div>
          <div className="price">Price</div>
          <div className="subtotal">Subtotal</div>
        </div>
        {/* Cart Items */}
        {displayedItems.map((item) => (
            <div key={item.id} className="cart-item">
            <div className="product">
              <button className="delete-btn">X</button>
              <img src={item.thumb} alt={item.product_name} />
              <span>{item.product_name}</span>
            </div>
            <div className="quantity">{item.quantity}</div>
            <div className="price">{item.price} {item.currency}</div>
            <div className="subtotal">{item.quantity * item.price} {item.currency}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>&lt;</button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPages}>&gt;</button>
      </div>
      <div className="cart-summary">
        <div className="total">Total: {calculateTotal()} đ</div>
      </div>
      <div className="checkout-btn-container">
        <button className="checkout-btn">Check Out</button>
      </div>
    </div>
  </div>
  );
};

export default Cart;
