import React, { Component, Fragment } from "react";
import "./projectInfo.styles.scss";

// const styles = {
//   card: {
//     padding: "10px",
//     border: "1px solid grey",
//     borderRadius: "1px"
//   },
//   text: {
//     fontWeight: "bold"
//   },
//   heading: {
//     fontWeight: "bold"
//   }
// };

const ProejctInfo = ({ project }) => (
  <div className="content">
    <h1 className="title">{project.name}</h1>
    <div className="grid">
      <span className="summary">
        {project.summary ? (
          <p>
            <span>Summary:</span>
            <br></br>
            {project.summary}
          </p>
        ) : (
          ""
        )}
      </span>
      <span className="tools">
        {project.tools ? (
          <p>
            <span>Tools Used: </span> <br></br>
            {project.tools}
          </p>
        ) : (
          ""
        )}
      </span>
      <span className="projectUrl">
        <a className="projectLink" href={project.url}>See Project</a>
        <a className="gitLink" href={project.url}>Github Link</a>
      </span>
    </div>
  </div>
);

export default ProejctInfo;

// const styles = {
//   card: {
//     padding: "10px",
//     border: "1px solid grey",
//     borderRadius: "1px",
//   },
//   text: {
//     fontWeight: "bold"
//   },
//   heading: {
//     fontWeight: "bold"
//   }
// };

// class ProjectInfo extends Component {
//   render() {

//     return (
//       <Fragment>
//         <div style={styles.card}>
//           <div style={styles.heading}>{this.props.data.name}</div>
//           <br></br>
//           <div>
//             {this.props.data.summary ? (
//               <p>
//                 <span style={styles.text}>Summary:</span>
//                 <br></br>
//                 {this.props.data.summary}
//               </p>
//             ) : (
//               ""
//             )}
//           </div>
//           <div>
//             {this.props.data.tools ? (
//               <p>
//                 <span style={styles.text}>Tools Used: </span> <br></br>
//                 {this.props.data.tools}
//               </p>
//             ) : (
//               ""
//             )}
//           </div>
//           <div>
//             <a href={this.props.data.url}>See Project</a>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default ProjectInfo;
