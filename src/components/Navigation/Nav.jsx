import React from "react";
import "./Nav.scss";
import { Outlet, Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import logo from "../../images/shoes-logo.webp";
import "./header.css";

const { Header, Content, Sider, Footer } = Layout;
const Nav = (props) => {
  const handleExpand = () => {
    const search = document.querySelector(".search-input");
    search.classList.toggle("search-expanded");
  };
  return (
    <div>
      <nav className="topnav">
        <Layout>
          <Header className="site-layout-background">
            <img src={logo} alt="Logo" width={218} height={57} />

            <Link to="/">HOME</Link>
            <Link to="/store">
              {" "}
              {""}
              <div>STORE </div>
            </Link>
            <Link to="/favorite">
              <div>FAVORITE </div>
            </Link>
            <Link to="/about">
              <div>ABOUT</div>
            </Link>
            <div style={{ width: "400px" }}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <Link to="/login">
              {""}
              <span>
                <FontAwesomeIcon icon={faUser} className="nav-login" />
              </span>
            </Link>

            <button className="search-wrapper" onClick={handleExpand}>
              <SearchOutlined className="nav-search" />
            </button>
            <input
              className="search-input"
              type="search"
              placeholder="Search product"
            />
            <Link to="/cart">
              <div>
                <ShoppingCartOutlined className="nav-iconsS " />
              </div>
            </Link>
            <Outlet />
          </Header>
        </Layout>
      </nav>
    </div>
  );
};

export default Nav;

/*import { Outlet, Link } from "react-router-dom";

function Nav() {
  const handleExpand = () => {
    const search = document.querySelector(".search-input");
    search.classList.toggle("search-expanded");
  };
  return (
    <div>
      <nav className="topnav">
        <Link to="/" exact>
          HOME
        </Link>
        <Link to="/store">
          <div>STORE </div>
        </Link>
        <Link to="/contact">
          <div>CONTACT </div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/login">
          {" "}
          <div>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                fontSize: "21px",
                color: "#f05d4a",
                marginTop: "0px",
                marginLeft: "200px",
              }}
            />
          </div>
        </Link>{" "}
        | <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      <button className="search-wrapper" onClick={handleExpand}>
        <SearchOutlined />
      </button>
      <input
        className="search-input"
        type="search"
        placeholder="Search product"
      />
      <Link to="/cart">
        <div>
          <ShoppingCartOutlined
            style={{
              fontSize: "23px",
              color: "#f05d4a",
              marginLeft: "130px",
            }}
          />
        </div>
      </Link>
    </div>
  );
}

export default Nav;*/
