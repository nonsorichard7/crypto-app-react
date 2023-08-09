import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  useEffect(() => {
    if (!coinHistory) return;
    const history = coinHistory?.data?.history;
    for (let i = 0; i < history?.length; i += 1) {
      coinPrice.push(history[i].price);
    }

    for (let i = 0; i < history?.length; i += 1) {
      coinTimestamp.push(new Date(history[i].timestamp).toLocaleDateString());
    }
    console.log(coinPrice);
    console.log(coinTimestamp);
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      no
      <Row className='chart-header'>
        <Typography.Title level={2} className='chart-title'>
          {coinName} Price Chart
        </Typography.Title>
        <Col className='price-container'>
          <Typography.Title level={5} className='price-change'>
            Change: {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className='current-price'>
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      {<Line data={coinTimestamp && data} options={options} />}
    </>
  );
};

export default LineChart;

// options={options}
