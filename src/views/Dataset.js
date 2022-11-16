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
import {
    Dropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


import land_cover from "data/land_cover";
import { Typography } from "@mui/material";

const LandCoverTable = ({ mangroveKey }) => {
    const headings = land_cover["headings"][mangroveKey] || [];
    const data = land_cover["data"][mangroveKey] || [];

    return (
        <>
            <Table responsive style={{ 'text-align': 'center' }}>
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

function Dataset() {
    const [mangrove, setMangrove] = React.useState("Krishna");

    const mangroveKeys = ["Krishna", "Sundarbans", "Bhitarkanika", "Andaman", "Gulf-of-kachh"];

    const mangroveName = new Map([
        ["Krishna", "Krishna Godavari"],
        ["Gulf-of-kachh", "Gulf of Kachh"],
        ["Bhitarkanika", "Bhitarkanika"],
        ["Sundarbans", "Sunderbans"],
        ["Andaman", "Andaman and Nicobar"],
    ])

    const LandCoverDropDown = () => {
        const [dropdownOpen, setDropdownOpen] = React.useState(false);
        const toggle = () => setDropdownOpen((prevState) => !prevState);

        return (
            <>
                <div className="d-flex p-5">
                    <UncontrolledDropdown 
                    // isOpen={dropdownOpen} toggle={toggle} direction={"down"}
                    >
                        <Typography>Land Cover: <DropdownToggle  caret> {mangroveName.get(mangrove)} </DropdownToggle> </Typography>
                        <DropdownMenu >
                            {mangroveKeys.map((mangroveKey) => (
                                <DropdownItem 
                                    onClick={() => setMangrove(mangroveKey)}
                                >
                                    {mangroveName.get(mangroveKey)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    {/* </Dropdown> */}
                    </UncontrolledDropdown>
                </div>
            </>);
    }


    return (
        <>
            <div className="content">
                <Row>
                    <LandCoverDropDown />
                </Row>  
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Land Cover of {mangroveName.get(mangrove)} (in ha)</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <LandCoverTable mangroveKey={mangrove} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Dataset;
