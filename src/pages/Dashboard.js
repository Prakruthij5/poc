import { React, useEffect, useState, useRef } from "react";
import { Bar, Doughnut, Radar, Scatter, PolarArea, Pie, Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import {
  Chart as Chartjs,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
Chartjs.register(
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {

  // const countOccurances = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  const chartData = useSelector((state)=>state.dataFromApi).dataFromApi;
  console.log("chartData",chartData);
  const priorityList = chartData.map((item) => {
    return item.priority
})

console.log("priorityList",priorityList);
// let minor = countOccurances(priorityList, '3');
// console.log("minor",minor);
const counts = {};
for (const num of priorityList) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts['1'],counts['2'],counts['3'],counts['4'])
let filteredChartData = [];

const minor = counts['1'];
const normal = counts['2'];
const major = counts['3'];
const critical = counts['4'];

filteredChartData.push(minor);
filteredChartData.push(normal);
filteredChartData.push(major);
filteredChartData.push(critical);

console.log("filteredChartData",filteredChartData);

  const data = {
    labels: [
      'Minor',
      'Normal',
      'Major',
      'Critical'
    ],
    datasets: [{
      data: filteredChartData,
      backgroundColor: [
        'rgb(255, 205, 86)',
        '#00e600',
        '#ff9966',
        '#e60000'
      ],
    }]
  };

  const options = {

  }

  // let changeTheme = (e) => {
  //   e.target.checked === true ? setStyle("darkTheme") : setStyle("lightTheme");
  // }

  return (<>
    <div >
      <div>
        {/* <Row>
          <Col>
          <h1>Dashboard</h1>
          </Col>
          <Col>
          <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Change theme"
          onChange={(e) => { changeTheme(e) }}
          size="lg"
          className="checkbox"
          style={{ float:"right" }}>
        </Form.Check>
      </Form>
          </Col>
        </Row> */}
      <Row>
        <Col>
        <Doughnut data={data} options={options} className="chartStyle"/>
        </Col>
      </Row>
      </div>
    </div>
  </>)
}

export default Dashboard;