import React from "react";
import styled from "styled-components";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";


const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h2>
            Hello <span className="green">I am</span>
          </h2>
          <h1 className="green">John Lenz</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Born and raised in Denver, I now call San Diego home. It is from my desk in San Diego that I cultivated my passion for coding and software development. Through collaboration with peers and countless hours of independent study,
            I have developed a solid foundation in full-stack development. While in the Epicodus accelerated program, I had the opportunity to gain expertise in both front-end and back-end technologies such as HTML, CSS, JavaScript, C#, React,
            Node.js, and MYSql. With this arsinal of knowledge and experience, I am now eager to channel these skills into  real-life application and big-picture innovation.

          </p>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/jlenz27">
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/john-lenz27">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src='../test.png' alt='Logo'></img>"

        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 10rem;
  padding-bottom:20rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
    color:  #000000;

  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color:  #000000;

  }
  h3 {
    color:  #000000;
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  h2 {
    color:  #000000;
    font-weight: 1000;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    color:  #000000;
    font-weight: 500;
    padding-right: 1.5rem;

  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #838391;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px hsl(121, 27%, 33%));
    :hover {
      filter: drop-shadow(0px 10px 10px hsl(121, 27%, 33%));
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: bottom;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #418142;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width:100%;
    height: 100%
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

 
`;
