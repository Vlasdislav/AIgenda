"use client";

import styled from 'styled-components';
import { useState } from 'react';
import Button from '../ui/button';

const HeaderTag = styled.header`
  padding: 23.5px 128px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  position: relative;

  @media (max-width: 1100px) {
    padding: 20px 40px;
  }

  @media (max-width: 639px) {
    padding: 10px 16px;
  }
`;

const Logo = styled.img`
  @media (max-width: 639px) {
    height: 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: #808191;
    font-family: 'Noah', sans-serif;
    font-weight: 700;
    margin-right: 8px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  .button {
    padding: 14px 24px;
  }

  .button:last-child {
    margin-left: 24px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const AdaptiveButtons = styled.div`
  display: none;

  .button:last-child {
    margin-left: 24px;
  }

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
  }
`;

const Dropdown = styled.div`
  display: flex;
  position: absolute;
  top: 80px;
  right: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  flex-direction: column;
  width: 200px;
  z-index: 100;

  a {
    padding: 10px 20px;
    color: #808191;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    display: block;
    text-align: center;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderTag className="container">
      <Logo src="/images/logo.svg" alt="AiGenda" />

      <Nav>
        <a href="#">Why us?</a>
        <a href="#pricing">Pricing</a>
        <a href="#">FAQ</a>
        <a href="#">Contacts</a>
      </Nav>

      <Buttons>
        <Button icon={<img src="./images/global.svg" alt="global" />} primary={false} />
        <Button text="Log in" />
      </Buttons>

      <AdaptiveButtons>
        <Button icon={<img src="./images/login.svg" alt="login" />} primary={false} />
        <Button icon={<img src="./images/Icon.svg" alt="icon" />} primary={false} onClick={toggleMenu} />
      </AdaptiveButtons>

      {isMenuOpen && (
        <Dropdown>
          <a href="#">Why us?</a>
          <a href="#pricing">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Contacts</a>
        </Dropdown>
      )}
    </HeaderTag>
  );
}
