import React from "react";
import styled from "styled-components";
import { ReactComponent as TextLogo } from "../../assets/Group.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <TextLogo />
      <div>
        <p>Мой профиль</p>
        <p>Избранные новости</p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 192px;
  background: #151515;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 124px;
  div {
    display: flex;
    align-items: center;
    gap: 26px;
    margin-top: 20px;
    p {
      font-family: "Ubuntu";
      font-style: normal;
      color: #ffffff;
    }
  }
`;
