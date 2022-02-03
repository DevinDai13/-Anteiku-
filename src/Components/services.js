import React, {useEffect} from "react";
import styled from "styled-components";
import { TitleStyles } from "../Components/reusableStyles";
import AOS from 'aos';
import "aos/dist/aos.css";

const Section = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 10rem;
  margin-bottom: 10rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 20rem;
        border-radius: 20px;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;


function Services() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow" data-aos={"fade-bottom"}>What we offer ?</h1>
        <p data-aos={"fade-bottom"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          incidunt magnam labore ipsam vero minima maxime doloribus dolores ipsa
          soluta.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img data-aos={"fade-left"} src={"https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" />
          <p data-aos={"fade-left"}>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button data-aos={"fade-left"}>Read More</button>
        </div>
        <div className="service yellow">
          <img data-aos={"fade-bottom"} src={"https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" />
          <p data-aos={"fade-bottom"}>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button data-aos={"fade-bottom"}>Read More</button>
        </div>
        <div className="service">
          <img data-aos={"fade-right"} src={"https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" />
          <p data-aos={"fade-right"}>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button data-aos={"fade-right"}>Read More</button>
        </div>
      </div>
    </Section>
  );
}

export default Services;