import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  max-width: 1400px;
  margin: auto;

  @media screen and (min-width: 830px) {
    width: 92%;
  }
`;

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
        color: #444;
    }
`;
