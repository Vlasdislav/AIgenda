"use client";

import styled from "styled-components";

const FooterTag = styled.footer`
  background-color: transparent !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: 639px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin-top: 24px;

  &:last-of-type {
    margin-top: 48px;
  }

  @media (max-width: 639px) {
    &:first-of-type {
      flex-direction: column;
      font-size: 14px;
      line-height: 14px;
    }

    &:last-of-type {
      margin-top: 24px;
    }
  }
`;

const FooterLink = styled.a`
  color: #808191;
  font-family: 'Noah', sans-serif;
  font-weight: 700;
  margin-right: 8px;
  padding: 8px 16px;
  display: inline-block;
  text-align: center;

  &:last-of-type {
    margin-right: 0;
  }
`;

const SocialNetworkLink = styled.a`
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default function Footer() {
  return (
    <FooterTag>
      <img src="./images/Logo.svg" alt="AiGenda" />
      <Nav>
        <FooterLink href="#">How does it work?</FooterLink>
        <FooterLink href="#">Why us?</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
        <FooterLink href="#">Contacts</FooterLink>
      </Nav>
      <Nav>
        <SocialNetworkLink href="#">
          <img src="./images/social-networks/instagram.svg" alt="inst" />
        </SocialNetworkLink>
        <SocialNetworkLink href="#">
          <img src="./images/social-networks/x.svg" alt="x" />
        </SocialNetworkLink>
        <SocialNetworkLink href="#">
          <img src="./images/social-networks/telegram.svg" alt="tel" />
        </SocialNetworkLink>
        <SocialNetworkLink href="#">
          <img src="./images/social-networks/in.svg" alt="in" />
        </SocialNetworkLink>
      </Nav>
    </FooterTag>
  );
}
