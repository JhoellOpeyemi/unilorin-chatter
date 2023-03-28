import { useState } from "react";

import Nav from "../Nav/Nav";
import { HeaderContainer, Logo, Hamburger } from "./Header.styled";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <HeaderContainer>
      <Logo>Unilorin Chatter</Logo>

      <Nav nav={nav} />

      <Hamburger nav={nav} onClick={handleNav}>
        <div></div>
        <div></div>
      </Hamburger>
    </HeaderContainer>
  );
};

export default Header;
