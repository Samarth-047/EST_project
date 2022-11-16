const SpeciesPieChart = () => {

    const data = dashboardEmailStatisticsChart.data;
    const options = dashboardEmailStatisticsChart.options;
    const legendColors = data.datasets[0].backgroundColor;
    const legendLabels = data.labels;
    const half = Number(Math.ceil(legendLabels.length / 2));
    const indices = [...Array(legendLabels.length).keys()];
  
    return (
      <>
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
                      <i className="fa fa-circle" style={{ color: legendColors[index] }}>  
                        {legendLabels[index]}
                      </i>);
                  }
                )}
              </div>
              <div className="legend">
                {indices.slice(half).map((index) => {
                    return (
                      <i className="fa fa-circle" style={{ color: legendColors[index] }}>  
                        {legendLabels[index]}
                      </i>);
                  }
                )}
              </div>
            </div>
            {/* <hr />
            <div className="stats">
              <i className="fa fa-calendar" /> Number of emails sent
            </div> */}
          </CardFooter>
        </Card>
      </>);
  }
  

  <Card>
              <CardHeader>
                <CardTitle tag="h5">Species Cover Statistics</CardTitle>
                <p className="card-category">Latest species information</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
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
                    <i className="fa fa-circle text-primary" /> Opened <br />
                    <i className="fa fa-circle text-warning" /> Read<br />
                    <i className="fa fa-circle text-danger" /> Deleted<br />
                  </div>
                  <div className="legend">
                    <i className="fa fa-circle text-gray" /> Unopened<br />
                    <i className="fa fa-circle" 
                      style={{color: '#9368e9'}} /> Bounced<br />
                  </div>
                </div>
                {/* <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div> */}
              </CardFooter>
            </Card>