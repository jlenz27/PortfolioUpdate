import React from 'react'
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';

const FeatureText = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Featured  <span className="green">Projects</span></h1>
            <p>Below is a list of completed Projects each focusing on using different languages and components.</p>
        </Zoom>
       
    </Container>
  )
}
export default FeatureText;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 7rem 5rem;
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