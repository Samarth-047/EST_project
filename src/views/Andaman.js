
import { textAlign } from "@mui/system";
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardNASDAQChart,
  SpeciesPieChart,
  pieChartOptions
} from "variables/charts.js";

const AndamanSpeciesPieChart = () => {
  const data = (SpeciesPieChart.data)('Andaman');
  const options = pieChartOptions;
  const indices = [...Array(data.labels.length).keys()];
  const half = Number(Math.ceil(data.labels.length / 2));
  const legendColors = data.datasets[0].backgroundColor;
  const legendLabels = data.labels;

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Species Cover Statistics</CardTitle>
        <p className="card-category">Latest species information</p>
      </CardHeader>
      <CardBody style={{ height: "266px" }}>
        <Pie
          data={data}
          options={options}
        />
      </CardBody>
      <CardFooter>
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignItems: "center"
        }}
        >
          <div className="legend">
            {indices.slice(0, half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
          <div className="legend">
            {indices.slice(half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
        </div>
        {/* <hr />
        <div className="stats">
          <i className="fa fa-calendar" /> Number of emails sent
        </div> */}
      </CardFooter>
    </Card>
  )
}

function NASDAQChart() {
  return (
    <>
    <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card></>
  )
  }

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <AndamanSpeciesPieChart />
          </Col>
          <Col md="8">
            <NASDAQChart />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
