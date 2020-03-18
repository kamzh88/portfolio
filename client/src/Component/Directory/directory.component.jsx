import React, { Component } from "react";
import data from "../../Images/data.json";
import ProjectInfo from "../ProjectInfo/projectInfo.component";

class Directory extends Component {
  state = {
    data: data
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map((project, index) => (
          <div
            key={index}
            className="project-item"
            style={{ backgroundColor: `rgba(255, 255, 255, 0.55)` }}
          >
            <ProjectInfo project={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default Directory;
