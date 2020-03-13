import React, { Component, Fragment } from "react";
import Wrapper from "../../Component/Wrapper";
import data from "../../Images/data.json";
import ProjectInfo from "../../Component/ProjectInfo/projectInfo.component";
import { Typography, Card } from "@material-ui/core/";
import "./style.css";

const styles = {
  card: {
    backgroundColor: `rgba(255, 255, 255, 0.55)`,
    width: "auto",
    margin: 10,
    textAlign: "left",
    padding: "25px",
    border: "1px solid grey",
    borderRadius: "5px"
  }
};

class Portfolio extends Component {
  state = {
    data: data
  };

  // changeBackground = e => {
  //   console.log(e.target);
  //   e.target.style.transform = `scale(1.05)`;
  // };

  // resetBackground = e => {
  //   e.target.style.transform = `translateZ(0)`;
  // };

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <Wrapper title={"Portfolio"}>
          {data.map((project, index) => (
            <Card
              key={index}
              style={styles.card}
              onMouseEnter={this.changeBackground}
              onMouseLeave={this.resetBackground}
            >
              <ProjectInfo data={project}></ProjectInfo>
            </Card>
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

export default Portfolio;
