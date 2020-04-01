import React, { Fragment } from "react";
import Wrapper from "../../Component/Wrapper";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./style.css";

const styles = {
  linkedinIcon: {
    fontSize: 60,
    margin: 20,
    color: "2477B5"
  },
  githubIcon: {
    fontSize: 60,
    margin: 20,
    color: "23292D"
  },
  mailIcon: {
    fontSize: 60,
    margin: 20,
    color: "1878D4"
  }
};

const Contact = () => (
  <Fragment>
    <Wrapper title="Contact Information">
      <div>
        <div className="phone">
          Phone Number: <a href="tel:862-208-2672">(862)-208-2672</a>
        </div>
        <br></br>
        <a href={`mailto: kamzh1988@gmail.com`}>
          <EmailIcon color="inherit" style={styles.mailIcon} />
        </a>
        <a href="https://www.linkedin.com/in/kinzhao/">
          <LinkedInIcon style={styles.linkedinIcon} />
        </a>
        <a href="https://github.com/kamzh88">
          <GitHubIcon style={styles.githubIcon} />
        </a>
      </div>
    </Wrapper>
  </Fragment>
);

export default Contact;
