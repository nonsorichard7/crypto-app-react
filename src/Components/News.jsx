import React from "react";
import { Link } from "react-router-dom";
import { Layout, Select, Typography, Row, Col, Space, Card } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import { useGetCryptoNewsQuery } from "../Services/cryptoApi";
import Loader from "./Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [isHover, setIsHover] = React.useState(true);
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery(simplified ? 10 : 100);

  // const { data: cryptoNews } = useGetCryptoNewsQuery({
  //   newsCategory,
  //   count: simplified ? 6 : 12,
  // });
  console.log(cryptoNews);
  if (!cryptoNews) return <Loader />;

  return (
    <div>
      <Layout.Content>
        <Row
          gutter={[24, 24]}
          style={{ width: "1000px", padding: "15px", margin: "5px" }}
        >
          {!simplified && (
            <Col span={24}>
              <Select
                showSearch
                className='select-news'
                placeholder='Select a Crypto'
                optionFilterProp='children'
                // onChange={(value) => setNewsCategory(value)}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value='Cryptocurency'>Cryptocurrency</Option>
                {data?.data?.coins?.map((currency) => (
                  <Option value={currency.name}>{currency.name}</Option>
                ))}
              </Select>
            </Col>
          )}
          {cryptoNews &&
            cryptoNews?.articles.map((news, i) => (
              <Col xs={24} lg={8} style={{ padding: "2px" }}>
                <Card
                  key={news.source.id}
                  style={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "15px",
                  }}
                >
                  <Space
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a
                      href={news.url}
                      target='_blank'
                      rel='noreferrer'
                      style={{ width: "50%" }}
                    >
                      <Title level={5}>
                        {news.title.length < 50
                          ? news.title
                          : `${news.title.slice(0, 50)}..Read more`}
                      </Title>
                    </a>
                    <img
                      src={news.urlToImage || demoImage}
                      alt={news.source.name}
                      Height='70px'
                      style={{
                        maxWidth: "50px",
                        position: "relative",
                        // bottom: "20px",
                      }}
                    />
                  </Space>
                  {news.description.length > 100 ? (
                    <Text>`${news.description.slice(0, 100)}...`</Text>
                  ) : (
                    <Text> {news.description} </Text>
                  )}
                  <Space
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <Text level={5}>{news.source.name} </Text>
                    <Text level={5}>
                      {moment(news.publishedAt).startOf("ss").fromNow()}{" "}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
        </Row>
      </Layout.Content>
    </div>
  );
};

export default News;
