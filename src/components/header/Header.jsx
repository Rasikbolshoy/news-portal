import React from "react";
import styled from "styled-components";
import bacground from "../../assets/image3.png";
import { ReactComponent as TextLogo } from "../../assets/Group.svg";
import { ReactComponent as PoiskLogo } from "../../assets/search.svg";
import { ReactComponent as Contact } from "../../assets/Group2.svg";
import { ReactComponent as Menu } from "../../assets/menu1.svg";
export const Header = () => {
  return (
    <Container>
      <img src={bacground} />
      <ContainerImage>
        <TextLogo />
        <div>
          <PoiskLogo />
          <Contact />
          <Menu />
        </div>
      </ContainerImage>
      <h1>Новости</h1>
    </Container>
  );
};
const Container = styled.header`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 83px;
    color: #ffffff;
    margin-top: 46px;
  }
  img {
    width: 100%;
    height: 240px;
    position: absolute;
    z-index: -99;
  }
`;
const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 150px 0px 150px;
  div {
    display: flex;
    gap: 30px;
  }
`;
