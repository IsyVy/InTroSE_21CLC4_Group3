import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashBoard";
import Login from "../Login/login";
import NotFound from "../../routes/NotFound";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Nav from "../Navigation/Nav";
import logo from "../../images/shoes-logo.webp";
import Store from "../Store/Store";
import Cart from "../CartDetail/cartManage";

const { Header, Content, Sider, Footer } = Layout;

import "./header.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          {" "}
        </Route>

        <Route index element={<DashBoard />} />
        <Route path="store" element={<Store />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" />
        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
