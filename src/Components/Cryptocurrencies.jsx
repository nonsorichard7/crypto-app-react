import React, { useState, useEffect } from "react";
import { Layout, Card, Col, Row, Input, Space } from "antd";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";

const Cryptocurrency = ({ simplified }) => {
  const limit = simplified ? 10 : 100;
  const { data } = useGetCryptosQuery(limit);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(data?.data?.coins);

    const filteredData = data?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [data, searchTerm]);
  // className='crypto-card'
  return (
    <div>
      <Layout>
        <Row gutter={[24, 24]} style={{ width: "1000px", margin: "0px" }}>
          {!simplified && (
            <Col span={24}>
              <div className='search-crypto'>
                <Input
                  placeholder='Search Cryptocurrency'
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
              </div>
            </Col>
          )}

          {cryptos?.map((coin) => (
            <Col
              xs={24}
              lg={8}
              span={8}
              key={coin.uuid}
              style={{ padding: "0px", margin: "0px" }}
            >
              <Link key={coin.uuid} to={`/crypto/${coin.uuid}`}>
                <Card
                  title={`${coin.rank}. ${coin.name}`}
                  extra={
                    <img
                      src={coin.iconUrl}
                      alt={coin.name}
                      width='20px'
                      height='20px'
                    />
                  }
                  style={{ width: 300 }}
                  key={coin.id}
                  className='crypto-card-map'
                >
                  <p>Price: {millify(coin.price)} </p>
                  <p>Market Cap: {millify(coin.marketCap)}</p>
                  <p>Daily Change: {millify(coin.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Layout>
    </div>
  );
};

export default Cryptocurrency;
