import React, { Component, Fragment } from "react";
import "./projectInfo.styles.css";

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
  text: {
    fontWeight: "bold"
  },
  heading: {
    fontWeight: "bold"
  }
};

class ProjectInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div style={styles.heading}>{this.props.data.name}</div>
        <br></br>
        <div>
          {this.props.data.summary ? (
            <p>
              <span style={styles.text}>Summary:</span>
              <br></br>
              {this.props.data.summary}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          {this.props.data.tools ? (
            <p>
              <span style={styles.text}>Tools Used: </span> <br></br>
              {this.props.data.tools}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <a href={this.props.data.url}>See Project</a>
        </div>
      </Fragment>
    );
  }
}

export default ProjectInfo;
