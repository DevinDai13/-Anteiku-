import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Section = styled.footer`
    bottom: 0;
    margin: 0;
    border-radius: 70px 70px 0px 0px;
    background: linear-gradient(to right, #fc4958, #e85d04);
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    padding: 4vw;
    p {
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
    }
    ul {
        display: flex;
        list-style-type: none;
        gap: 4vw;
        margin-top: 2vw;
        li {
            padding: 0.8rem;
            border-radius: 2rem;
            background-color: white;
            transition: 0.3s ease-in-out;
            cursor: pointer;
            &:hover {
                background-color: black;
                svg {
                    transform: scale(1.2);
                }
            }
            svg {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fc4958;
                font-size: 1.6rem;
                transition: 0.3s ease-in-out;
                &:hover {
                }
            }
        }
    }
    img {
        filter: brightness(0) invert(1);
        width: 10vw;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 260px) and (max-width: 1080px) {
        grid-template-columns: 1fr;
        .container {
            img {
            height: 4rem;
            width: 10rem;
            }
        }
    }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    color: orange;
    font-size: 1rem;
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;


 function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <h3>Sunset Boulevard</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>
          <ul>
            <li><AiFillInstagram /></li>
            <li><FaFacebookF /></li>
            <li><BsTwitter /></li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>(780) 489-1002</p>
          <p>sunsetboulevard@gmail.com</p>
          <p>8882 170 St NW #1946, Edmonton, AB T5T 3J7</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
            {'© '}
            {"Sunset Boulevard "}
            {new Date().getFullYear()}
        </h2>
      </LowerFooter>
    </div>
  );
}

export default Footer;