import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fdfdfd;
  padding: 0 7.5%;
  transform: ${(props) => (props.nav ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 830px) {
    position: relative;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
    width: fit-content;
    background-color: none;
    transform: translateX(0);
    padding: 0;
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  font-size: 1.55rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  color: #888;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  &:hover {
    color: #444;
    transform: scale(1.1);
  }

  @media screen and (min-width: 830px) {
    position: relative;
    font-size: 1.07rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 25%;
      height: 0.12rem;
      background-color: #888;
      transition: all 0.3s;
    }

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 1.7rem;
    }

    &:hover {
      color: #444;
      transform: scale(1);
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
