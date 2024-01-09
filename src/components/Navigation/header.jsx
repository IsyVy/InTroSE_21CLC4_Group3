import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./header.css";
import logo from "../../images/shoes-logo.webp";
import Login from "../Login/login.jsx";
import DashBoard from "../pages/dashBoard.jsx";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import NotFound from "../../routes/NotFound";
import Store from "../Store/Store";
import Favorite from "../Favorite/Favorite.jsx";
const { Header, Content, Sider, Footer } = Layout;

function headNav() {
  return (
    <>
      <Layout>
        <Header className="site-layout-background">
          <img src={logo} alt="Logo" width={218} height={57} />
          <React.StrictMode>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Nav />}>
                  <Route index element={<DashBoard />} />
                  <Route path="store" element={<Store />} />
                  <Route path="login" element={<Login />}>
                    <Route path="favorite" element={<Favorite />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </React.StrictMode>
        </Header>
      </Layout>
    </>
  );
}

export default headNav;
