import React from "react";
import { Layout, Typography, Statistic, Row, Col, Space } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../Components";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import millify from "millify";

//import axios from "axios";
//import useSWR from "swr";

const Home = () => {
  const { data } = useGetCryptosQuery(10);
  const cryptoStats = data?.data?.stats;
  const { Title } = Typography;

  if (!data) return "Loading...";

  return (
    <div>
      <Layout.Content>
        <Title level={2} style={{ marginLeft: "20px" }}>
          Global Crypto Stats
        </Title>
        <Row gutter={32} style={{ marginLeft: "10px" }}>
          <Col span={12}>
            <Statistic
              title='Total Crypto Currencies'
              value={data && millify(cryptoStats.total)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Exchange'
              value={data && millify(cryptoStats.totalExchanges)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title='Total market Cap'
              value={data && millify(cryptoStats.totalMarketCap)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title='Total 24h Volume'
              value={data && millify(cryptoStats.total24hVolume)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Markets'
              value={data && millify(cryptoStats.totalMarkets)}
            ></Statistic>
          </Col>
        </Row>
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <Title level={2}>Top 10 Cryptocurrencies in the world</Title>
          <Title level={3} style={{ marginRight: "20px" }}>
            <Link to='/cryptocurrencies'> Show More</Link>
          </Title>
        </Space>
        <Cryptocurrencies simplified />
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <Title level={2} style={{ marginLeft: "10px" }}>
            Latest Crypto News
          </Title>
          <Title level={3} style={{ marginRight: "50px" }}>
            <Link to='/News'> Show More</Link>
          </Title>
        </Space>

        <News simplified />
      </Layout.Content>
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
  );
};

export default Home;
