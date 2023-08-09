import React from "react";
import "./App.css";
import {
  Navbar,
  Home,
  Cryptocurrencies,
  Exchanges,
  News,
  Cryptodetails,
} from "./Components";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space } from "antd";

function App() {
  return (
    <div>
      <Layout>
        <Layout.Sider>
          <Navbar />
        </Layout.Sider>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route
              exact
              path='/cryptocurrencies'
              element={<Cryptocurrencies />}
            />
            <Route exact path='/crypto/:coinId' element={<Cryptodetails />} />
            <Route exact path='/exchanges' element={<Exchanges />} />
            <Route exact path='/news' element={<News />} />
          </Routes>
        </div>
        <div>
          <Layout.Footer>
            CryptoVerse <br />
            All rights reserved <br />
            <Space>
              <Link to='/'>Home </Link>
              <Link to='/exchanges'> Exchanges </Link>
              <Link to='/news'> News </Link>
            </Space>
          </Layout.Footer>
        </div>
      </Layout>
    </div>
  );
}

export default App;
