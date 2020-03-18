import React, { Component, Fragment } from "react";
import "./projectInfo.styles.scss";

const ProejctInfo = ({ project }) => (
  <div className="content">
    <h1 className="title">{project.name}</h1>
    <div className="grid">
      <div>
        {project.summary ? (
          <p>
            <span className="heading">Summary:</span>
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
            <span className="heading">Tools Used: </span> <br></br>
            {project.tools}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="projectUrl">
        <a className="projectLink" href={project.projectLink}>
          See Project
        </a>
        <a className="gitLink" href={project.gitLink}>
          Github Link
        </a>
      </div>
    </div>
  </div>
);

export default ProejctInfo;