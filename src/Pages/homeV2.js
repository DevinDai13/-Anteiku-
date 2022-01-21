import React, {useEffect} from "react";
import menubg from "../Images2/menuBG.jpg";
import styled from "styled-components";
import AOS from 'aos';
import "aos/dist/aos.css";
import Newsletter from "../Components/newsLetter";
import Portfolio from "../Components/portfolio";


const mainbackgroundstyle = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${ menubg })`,
  height: '100vh', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius:'70px 70px 70px 70px',
};

const Section = styled.section`

  height: 100vh;
  width: 100vw;
  position: relative;
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  .info {
    position: absolute;
    top: 25%;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    h2 {
      color: #f9c74f;
      font-size: 4rem;
      letter-spacing: 0.5rem;
    }
    em {
      color: black;
      width: 60%;
      font-size: 1.1rem;
      text-align: start;
    }
    button {
      padding: 1rem 2rem;
      margin-top: 12px;
      font-size: 1.4rem;
      background-color: white;
      border: 2px solid #f9c74f;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #f9c74f;
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;

function HomeV2 () {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
      <Section id="home" style={mainbackgroundstyle}>
        <div className="content">
          <div className="info">
            <h2 data-aos={"fade-right"}>THE PERFECT BITE</h2>
            <em data-aos={"fade-right"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet facilisis metus. Sed eleifend massa in nisi vestibulum sollicitudin.
            </em>
            <button data-aos={"fade-right"}>MAKE A RESERVATION</button>
          </div>
        </div>
      </Section>

      <Portfolio />
      <Newsletter />
    
    </>
    
  )
}

export default HomeV2;
