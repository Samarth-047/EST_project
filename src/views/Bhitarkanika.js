
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
  LandCoverLine,
  SpeciesPieChart,
  pieChartOptions,
  lineChartOptions
} from "variables/charts.js";
const { SpeciesPieChartColors } = require("data/species_pie");
const { SpeciesPieChartLabels } = require("data/species_pie");

const BhitarkanikaSpeciesPieChart = () => {
  const currMangrove = localStorage.getItem('currMangrove');
  const data = (SpeciesPieChart.data);
  const options = pieChartOptions;
  const legendColors = SpeciesPieChartColors(currMangrove);
  const legendLabels = SpeciesPieChartLabels(currMangrove);
  console.log(legendColors)
  const indices = Array.from({length: legendColors.length}, (_, i) => i);
  const half = Number(Math.ceil(legendColors.length / 2));

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

function LandCoverLineChart() {
  const options = lineChartOptions;
  const data = LandCoverLine.data

  return (
    <>
    <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h5">Land Cover Distribution</CardTitle>
        <p className="card-category">Line Chart with Points</p>
      </CardHeader>
      <CardBody>
        <Line
          data={data}
          options={options}
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
    </Card>
    </>);
}

function Dashboard() {
  const useBeforeRender = (callback, deps) => {
    const [isRun, setIsRun] = React.useState(false);

    if (!isRun) {
        callback();
        setIsRun(true);
    }

    React.useEffect(() => () => setIsRun(false), deps);
};
useBeforeRender(() => localStorage.setItem('currMangrove', 'Bhitarkanika'), []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <BhitarkanikaSpeciesPieChart />
          </Col>
          <Col md="6">
            <BhitarkanikaSpeciesPieChart />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <LandCoverLineChart />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <LandCoverLineChart />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
