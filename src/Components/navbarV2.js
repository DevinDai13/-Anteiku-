import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {GiHamburgerMenu} from "react-icons/gi";
import {VscChromeClose} from "react-icons/vsc";
import navbg from "../Images2/navbg.jpg";
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
  background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: tomato;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: black;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
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
  width: ${({ state }) => (state ? "40%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
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
            <li><a href={HOME_URL} onClick={() => setNavbarState(false)}>Home</a></li>
            <li><a href={MENU_URL} onClick={() => setNavbarState(false)}>Menu</a></li>
            <li><a href={TEAM_URL} onClick={() => setNavbarState(false)}>Team</a></li>
            <li><a href={CONTACT_URL} onClick={() => setNavbarState(false)}>Contact</a></li>
          </ul>
        </ResponsiveNav>

        <ResponsiveNavLeft state={navbarState} className={navbarState ? "showLeft" : ""}>
          <img src={navbg} alt="1" />
        </ResponsiveNavLeft>
      </div>
    );
  }
  


export default NavbarV2;