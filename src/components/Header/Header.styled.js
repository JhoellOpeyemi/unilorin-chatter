import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5625rem;

  @media screen and (min-width: 830px) {
    padding-top: 2.3rem;
  }
`;

export const Logo = styled.p`
  font-family: Forum;
  font-size: 1.25rem;
  color: #7d7d7d;
  z-index: 3;

  @media screen and (min-width: 830px) {
    font-size: 1.5rem;
  }
`;

export const Hamburger = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 2rem;
  height: 0.85rem;
  border: 0;
  background: none;
  cursor: pointer;
  z-index: 3;

  div {
    width: 100%;
    height: 0.14rem;
    background-color: #000;
    transition: all 0.35s ease-in-out;
  }

  ${(props) =>
    props.nav == true &&
    css`
      div {
        width: 100%;
        height: 0.14rem;
        background-color: #000;

        &:nth-of-type(1) {
          transform: rotate(45deg) translateY(2px) translateX(4px);
        }

        &:nth-of-type(2) {
          transform: rotate(-45deg) translateY(-4px) translateX(5px);
        }
      }
    `}

  @media screen and (min-width: 830px) {
    display: none;
  }
`;
