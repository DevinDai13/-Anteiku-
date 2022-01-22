import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {GiHamburgerMenu} from "react-icons/gi";
import {VscChromeClose} from "react-icons/vsc";
import navbg from "../Images2/navbg.jpg";
import wine from "../Images2/wine.jpg";
import {
    HOME_URL,
    MENU_URL,
    TEAM_URL,
    CONTACT_URL,
  } from "../url"


  const Nav = styled.nav`
  display: flex;
  top: -50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
    h3 {
        color: tomato;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
      .active {
        color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
        &:hover {
            cursor: pointer;
          }
      }
    }
    .links {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background: linear-gradient(to right, #fc4958, #e85d04);
  height: 100vh;
  width: ${({ state }) => (state ? "70%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  h3 {
    color: white;
  }
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 1.3rem;
    margin-left: 7rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 1rem;
      h3 {
        margin-left: 0.5rem;
        font-size: 1.5rem;
        font-weight: 900;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 1rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: black;
        }
      }
      }
    }
  }
`;

const ResponsiveNavLeft = styled.div`
  position: fixed;
  left: -100vw;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: ${({ state }) => (state ? "45%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  img {
    background-size: cover;
    border-radius: 0px 0px 0px 0px;
  }
`;

const ResponsiveNavBottom = styled.div`
  position: fixed;
  bottom: -100vw;
  bottom: 0;
  right: 0;
  z-index: 10;
  height: 35vh;
  width: ${({ state }) => (state ? "55%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  img {
    background-size: cover;
    border-radius: 150px 0px 0px 0px;
  }
`;



function NavbarV2() {
    const [navbarState, setNavbarState] = useState(false);

    const html = document.querySelector("html");
    html.addEventListener("click", () => setNavbarState(false));

    useEffect(() => {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function(){
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos)
          document.getElementById("navbar").style.top = "0";
        else 
          document.getElementById("navbar").style.top = "-50px";
        prevScrollpos = currentScrollPos;
      }
    })
    
    return (
      <div>
        <Nav id="navbar" className="h-20 text-xl">
          <div className="brand">
            <h3 className="text-2xl">SUNSET BOULEVARD</h3>
            <div className="toggle">
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu
                  onClick={(e) => {
                    e.stopPropagation();
                    setNavbarState(true);
                  }}
                />
              )}
            </div>
          </div>
          <ul className="links">
            <li><a href={HOME_URL}>Home</a></li>
            <li><a href={MENU_URL}>Menu</a></li>
            <li><a href={TEAM_URL}>Team</a></li>
            <li><a href={CONTACT_URL}>Contact</a></li>
          </ul>
        </Nav>

        <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
          <ul>
            <h3 className="text-xl center-items">SUNSET BOULEVARD</h3>
            <li className="p-6 flex w3-animate-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <a href={HOME_URL} onClick={() => setNavbarState(false)}>HOME</a>
            </li>
            <li className="p-6 flex w3-animate-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <a href={MENU_URL} onClick={() => setNavbarState(false)}>MENU</a>
            </li>
            <li className="p-6 flex w3-animate-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <a href={TEAM_URL} onClick={() => setNavbarState(false)}>TEAM</a>
            </li>
            <li className="p-6 flex w3-animate-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={CONTACT_URL} onClick={() => setNavbarState(false)}>CONTACT</a>
            </li>
          </ul>
        </ResponsiveNav>

        <ResponsiveNavLeft state={navbarState} className={navbarState ? "showLeft" : ""}>
          <img src={navbg} alt="1" />
        </ResponsiveNavLeft>
        
        <ResponsiveNavBottom state={navbarState} className={navbarState ? "showBottom" : ""}>
          <img src={wine} alt="1" className="w3-animate-bottom"/>
        </ResponsiveNavBottom>

      </div>
    );
  }
  


export default NavbarV2;