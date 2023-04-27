import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>Below is a series of projects - completed and ongoing - that give a well-rounded sample of my work. These projects vary in complexity and language.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 10rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 2.2rem;
    }

    p{
        width: 40rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.1rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``