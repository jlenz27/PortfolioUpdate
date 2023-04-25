import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          <h1>My <span className="green">Skills</span></h1>
        </h4>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Front-End"}
            disc={<><ul>Html</ul><ul>CSS</ul><ul>JavaScript</ul><ul>Node</ul><ul>React</ul><ul>React Native</ul></>}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            // `HTML, CSS, JavaScript, Node, Bootstrap, React`
            title={"Back-End"}
            disc={<><ul>C#</ul><ul>MySQL</ul><ul>Redux</ul><ul>Net 6</ul><ul>ASP.Net</ul><ul>EF Core 6</ul></>}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Tools"}
            disc={<><ul>VS Code</ul><ul>Git</ul><ul>Bash</ul><ul>Figma</ul><ul>Unity</ul></>}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 2rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
