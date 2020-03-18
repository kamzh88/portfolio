import React from "react";
import Wrapper from "../../Component/Wrapper";
import "./portfolio.styles.scss";
import Directory from "../../Component/Directory/directory.component";

const Portfolio = () => (
  <div>
    <Wrapper title={"Portfolio"}>
      <Directory />
    </Wrapper>
  </div>
);

export default Portfolio;