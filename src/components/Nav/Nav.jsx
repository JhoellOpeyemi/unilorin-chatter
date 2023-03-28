import { StyledNav, StyledLink } from "./Nav.styled";

const Nav = ({ nav }) => {
  return (
    <StyledNav nav={nav}>
      <StyledLink href="#">View Instagram Account</StyledLink>
      <StyledLink href="#">Give Feedback</StyledLink>
      <StyledLink href="#">Contact Developers</StyledLink>
    </StyledNav>
  );
};

export default Nav;
