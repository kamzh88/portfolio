import React, { Component, Fragment } from "react";
import Wrapper from "../../Component/Wrapper";
import data from "../../Images/data.json";
import { Typography } from "@material-ui/core/";
import "./style.css";

const styles = {
  card: {},
  text: {
    fontWeight: "bold"
  }
};

class Portfolio extends Component {
  state = {
    data: data
  };

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <div style={styles.Card}>
            <Typography variant="h6">Portfolio</Typography>
            {data.map((project, index) => (
              <div
                key={index}
                style={{
                  width: "auto",
                  margin: 20
                }}
              >
                <div>{project.name}</div>
                <div>{project.summary}</div>
                <div>
                  {project.tools ? (
                    <p>
                      <span style={styles.text}>Tools Used:</span>
                      {project.tools}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <a href={project.url}>See Project</a>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Portfolio;
