import React, {useEffect} from "react";
import styled from "styled-components";
import { TitleStyles } from "./reusableStyles";
import AOS from 'aos';
import "aos/dist/aos.css";

const Section = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

function Newsletter() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Section id="newsletter" data-aos={"fade-bottom"}>
      <div className="title">
        <h1 data-aos={"fade-bottom"}>
          <span>Subscribe</span> For Latest Newsletter
        </h1>
        <p data-aos={"fade-bottom"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
          perferendis nesciunt illum, voluptas nulla laborum alias similique
          praesentium quam.
        </p>
      </div>
      <div className="container" data-aos={"fade-bottom"}>
        <input type="text" placeholder="Search site ..." />
        <button>Search</button>
      </div>
    </Section>
  );
}

export default Newsletter;