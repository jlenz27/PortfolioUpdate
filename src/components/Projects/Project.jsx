import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>Description</h1>
            <p>{disc}
            <a href="/">Github</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 19rem;
    background-color: #4e5156;
    margin: .1rem;
    padding: .1rem;
    border-radius: 1px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 600ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 600ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 1.1rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.1);
    }

    :hover > .disc{
        bottom: 0;
    }

`