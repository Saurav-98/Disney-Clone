import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home icon" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="home icon" />
          <span>SEARCH</span>
        </a>

        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="home icon" />
          <span>WATCHLIST</span>
        </a>

        <a href="/">
          <img src="/images/original-icon.svg" alt="home icon" />
          <span>ORIGINALS</span>
        </a>

        <a href="/">
          <img src="/images/movie-icon.svg" alt="home icon" />
          <span>MOVIES</span>
        </a>

        <a href="/">
          <img src="/images/series-icon.svg" alt="home icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src="/images/user.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    justiy-content: center;
    padding: 0 1rem;

    img {
      height: 20px;
      margin-right: 2px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  cursor: pointer;
  align-items: center;
`;
