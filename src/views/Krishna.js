/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const KrishnaTable = () => {
  const headings = [
    "Sr. No.",
    "Land Cover",
    "Year 1990",
    "Year 2000",
    "Year 2011",
    "% change in 1990-2011",
  ];
  const data = [
    ["1.", "Dense Mangroves", "7948", "8850", "9150", "15.12"],
    ["2.", "Sparse Mangroves", "1667", "1443", "3373", "102.34"],
    ["3.", "Degraded Mangroves", "2454", "1363", "1339", "-45.44"],
    ["4.", "Aquaculture", "863", "20758", "14838", "1619.35"],
    ["5.", "Water Bodies", "5765", "5878", "6319", "9.61"],
    ["6.", "Agricuture", "26535", "12111", "15448", "-41.78"],
    ["7.", "Sand", "1128", "2200", "2686", "138.12"],
    ["8.", "Mud Flat", "14656", "10638", "8999", "-38.6"],
    ["9.", "Casuarina", "3184", "959", "2048", "-35.68"],
  ];
  return (
    <>
      <Table responsive style={{'text-align': 'center'}}>
        <thead className="text-primary">
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((land, index) => {
            return (
              <tr>
                {land.map((val, index) => {
                  return <td>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Land Cover of Krishna (in ha)</CardTitle>
              </CardHeader>
              <CardBody>
                <KrishnaTable />
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-right">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-right">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-right">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-right">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
