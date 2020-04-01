import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProject } from "../../redux/project/project.selectors";

import ProjectInfo from "../ProjectInfo/projectInfo.component";

import "./directory.styles.scss";

const Directory = ({ projects }) => {
  return (
    <div className="card-info">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <ProjectInfo project={project} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectProject
});

export default connect(mapStateToProps)(Directory);
