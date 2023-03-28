import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 3.65rem 0 0 0;

  @media screen and (min-width: 830px) {
    margin: 5.65rem 0 0 0;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  font-family: "Poppins", sans-serif;

  @media screen and (min-width: 830px) {
    font-size: 3.5rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 3.125rem auto;
  font-family: "Poppins", sans-serif;

  @media screen and (min-width: 830px) {
    margin: 4rem auto 5rem;
  }
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  padding: 1.125rem;
  font-size: 1rem;
  letter-spacing: 1px;
  width: 100%;
  height: 15rem;
  background-color: rgba(0, 0, 0, 0.06);
  border: 0;
  border-radius: 2px;
  font-family: "Poppins", sans-serif;
  line-height: 1.3;

  &::placeholder {
    font-size: 0.96rem;
    font-style: italic;
    color: #767676;
    font-weight: 300;
  }

  &:hover {
    outline: 2px dashed #ccc;
  }

  &:focus {
    outline: 2px dashed #555;
  }

  @media screen and (min-width: 830px) {
    height: 19rem;
  }
`;

export const MediaLabel = styled.label`
  display: inline-block;
  margin: ${(props) =>
    props.src == "" ? "2.5rem 0 3.125rem" : "2.5rem 0 1rem"};
  font-size: 1.125rem;
  cursor: pointer;
  text-align: left;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  input {
    display: none;
  }

  @media screen and (min-width: 830px) {
    font-size: 1.4rem;
  }
`;

export const MediaPreview = styled.div`
  display: ${(props) => (props.src == "" ? "none" : "block")};
  width: 100%;
  height: 270px;
  margin: 0 0 3.125rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 830px) {
    height: 350px;
  }
`;

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 1.125rem;
  padding: 0.75rem 1.75rem;
  border: 1px solid transparent;
  color: #fff;
  background-color: #444;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid #444;
    color: #444;
    transform: scale(0.9);
  }

  @media screen and (min-width: 830px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.06rem;
  background-color: #bbb;
  margin-top: 3.125rem;

  @media screen and (min-width: 830px) {
    margin-top: 5rem;
  }
`;
