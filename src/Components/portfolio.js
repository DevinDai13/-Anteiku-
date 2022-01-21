import React, {useEffect} from "react";
import styled from "styled-components";
import beach from "../Images2/beach.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

const Section = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      width: 60%;
      color: white;
    }
    h2 {
      width: 60%;
      color: tomato;
    }
    button {
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
        color: white;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
        color: tomato;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;


function Portfolio() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Section id="portfolio" data-aos={"fade-bottom"}>
      <div className="background">
        <img src={beach} alt="" />
      </div>
      <div className="content">
        <h1 data-aos={"fade-right"}>Premium Dining Experience</h1>
        <h2 data-aos={"fade-right"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
          molestias!
        </h2>
        <button data-aos={"fade-bottom"}>Browse</button>
      </div>
    </Section>
  );
}

export default Portfolio;

