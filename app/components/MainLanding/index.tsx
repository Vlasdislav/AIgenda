"use client"

import styled from 'styled-components';
import Button from '../Button';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const TableAdaptive = dynamic(() => import('../TableAdaptive'), { ssr: false });
const TableDesktop = dynamic(() => import('../TableDesktop'), { ssr: false });

const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

const ProtocolSection = styled.section`
  position: relative;
  padding: 70px;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
  
  @media (max-width: 639px) {
    padding: 16px;
  }
`;

const ProtocolContent = styled.div`
  margin-bottom: 150px;
  max-width: 485px;

  @media (max-width: 1023px) {
    margin-bottom: 32px;
    max-width: 648px;
  }
  
  @media (max-width: 639px) {
    width: 310px;
  }
`;

const ProtocolTitle = styled.h2`
  font-family: 'Unbounded', sans-serif;
  line-height: 42px;
  font-size: 34px;
  margin-bottom: 16px;

  @media (max-width: 1023px) {
    font-size: 30px;
    line-height: 38px;
    width: 350px;
    margin: auto;
    margin-bottom: 8px;
  }
  
  @media (max-width: 639px) {
    font-size: 26px;
    line-height: 30px;
    width: 100%;
    margin: auto;
  }
`;

const ProtocolDescription = styled.p`
  line-height: 27px;
  font-size: 22px;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    font-size: 18px;
    line-height: 22px;
  }
  
  @media (max-width: 639px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;

const ProtocolBadges = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  gap: 10px;
  padding: 65px 17px 70px 70px;
  border-radius: 0 60px 0 0;
  background-color: #EBEBEB;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const ProtocolBadge = styled.span`
  padding: 16px;
  border-radius: 64px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-family: 'Unbounded', sans-serif;

  &:nth-child(1) {
    background-color: #EC279D;
  }

  &:nth-child(2) {
    background-color: #8793F3;
    transform: rotate(2.39deg);
  }

  &:nth-child(3) {
    background-color: #0E1C36;
    transform: rotate(-6.87deg);
  }
`;

const PricingSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px;

  @media (max-width: 1023px) {
    padding: 24px;
  }

  @media (max-width: 639px) {
    padding: 16px;
  }
`;

const PricingTitle = styled.h2`
  font-size: 34px;
  line-height: 44px;
  font-family: 'Unbounded', sans-serif;
  margin-bottom: 16px;

  @media (max-width: 1023px) {
    font-size: 30px;
    line-height: 30px;
  }

  @media (max-width: 639px) {
    font-size: 26px;
    line-height: 30px;
    width: 100%;
    margin: auto;
  }
`;

const PricingDescription = styled.p`
  font-size: 22px;
  line-height: 27px;
  color: #474747;
  margin-bottom: 64px;
  max-width: 748px;

  @media (max-width: 1023px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 48px;
  }

  @media (max-width: 639px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

export default function MainLanding() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Main>
            <ProtocolSection className="container">
                <ProtocolContent>
                    <ProtocolTitle>Автоматический протокол встречи</ProtocolTitle>
                    <ProtocolDescription>AiGenda быстро и качественно переводит речь в текст и создает автоматический протокол встречи при помощи искусственного интеллекта</ProtocolDescription>
                    <Button text="Начать работу" />
                    <ProtocolBadges>
                        <ProtocolBadge><span style={{ fontSize: "22px", lineHeight: "22px" }}>98%</span><span style={{ fontSize: "12px", lineHeight: "12px" }}>точность</span></ProtocolBadge>
                        <ProtocolBadge><span>Лучше,</span><span>чем ChatGPT*</span></ProtocolBadge>
                        <ProtocolBadge><span style={{ fontFamily: "Noah, sans-serif", fontSize: "12px", lineHeight: "12px" }}>обработано</span><span style={{ fontSize: "15px", lineHeight: "15px" }}>1 млн часов</span></ProtocolBadge>
                    </ProtocolBadges>
                </ProtocolContent>
                <div className="protocol__image">
                    <img src="./images/CallingApp.svg" alt="Конференция с AiGenda Bot" />
                </div>
            </ProtocolSection>
            <PricingSection className="pricing container" id="pricing">
                <PricingTitle>Разные тарифы для разных задач</PricingTitle>
                <PricingDescription>Подписка на сервис AiGenda станет выгодной инвестицией для любого бизнеса с регулярными онлайн встречами</PricingDescription>
                {isMobile ? (
                    <div className="table-adaptive">
                        <TableAdaptive />
                    </div>
                ) : (
                    <div className="table-desktop">
                        <TableDesktop />
                    </div>
                )}
            </PricingSection>
        </Main>
    )
}
