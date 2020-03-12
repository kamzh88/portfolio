import React, { Component, Fragment } from "react";
import Wrapper from "../../Component/Wrapper";
import data from "../../Images/data.json";
import { Typography, Card } from "@material-ui/core/";
import "./style.css";

const styles = {
  card: {
    backgroundColor: `rgba(255, 255, 255, 0.55)`,
    width: "auto",
    margin: 10,
    textAlign: "justify",
    padding: "25px",
    border: "1px solid grey",
    borderRadius: "5px"
  },
  // card:hover: {
  //   transform: 'scale(1.05)'
  // }
  text: {
    fontWeight: "bold"
  },
  heading: {
    fontWeight: "bold"
  }
};

class Portfolio extends Component {
  state = {
    data: data
  };

  changeBackground = e => {
    e.target.style.transform = `scale(1.05)`;
  };

  resetBackground = e => {
    e.target.style.transform = `scale(1)`;
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Typography variant="h6">Portfolio</Typography>

          {data.map((project, index) => (
            <Card
              key={index}
              style={styles.card}
              onMouseEnter={this.changeBackground}
              onMouseLeave={this.resetBackground}
            >
              <div style={styles.heading}>{project.name}</div>
              <br></br>
              <div>
                {project.summary ? (
                  <p>
                    <span style={styles.text}>Summary:</span>
                    <br></br>
                    {project.summary}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                {project.tools ? (
                  <p>
                    <span style={styles.text}>Tools Used: </span> <br></br>
                    {project.tools}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <a href={project.url}>See Project</a>
              </div>
            </Card>
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

export default Portfolio;
