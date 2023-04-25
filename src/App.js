import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Contact2 from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import ProjectsV2 from "./components/ProjectV2/ProjectV2";
import { Element } from 'react-scroll';
import FeatureText from "./components/MyFeatureText/FeatureText";

function App() {

  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <FeatureText />
      <Element
        name='projectsV2'
        className='element'
      >
        <ProjectsV2
        />
      </Element>
      <Projects />
        <Contact2 />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
background-image: url('/background2.png');
background-repeat: no-repeat;  
background-position: 0% 0%;
background-size: 100% 100%;   

`;


// background-image: 
// url(
// "https://media.geeksforgeeks.org/wp-content/uploads/rk.png");
//1478 X1017