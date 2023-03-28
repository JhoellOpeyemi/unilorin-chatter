import styled from "styled-components";

export const FooterContainer = styled.div``;

export const FooterText = styled.p`
  font-size: 0.875rem;
  margin: 0 0 2rem;
  text-align: center;

  span {
    font-weight: bold;
    font-style: italic;
    line-height: 1.45;
  }

  @media screen and (min-width: 830px) {
    font-size: 1.2rem;
    margin: 0 0 3rem;
  }
`;
