import React from "react";
import { Typography, Menu } from "antd";
import { Link } from "react-router-dom";
//
const Navbar = () => {
  return (
    <div>
      <div style={{ minHeight: "1000px" }}>
        <Menu theme='dark'>
          <Typography.Title level={3}>CryptoVerse</Typography.Title>
          <Menu.Item>
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='/exchanges'>Exchanges</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='/cryptocurrencies'> Cryptocurrency </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='/news'> News </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
