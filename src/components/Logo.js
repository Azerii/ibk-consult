import styled from "styled-components";

import { logoMain } from "../assets/index";

const Wrapper = styled.a`
  width: fit-content;

  img {
    height: 4.8rem;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 3.2rem;
    }
  }
`;

const Logo = () => {
  return (
    <Wrapper href="/">
      <img src={logoMain} alt="Digifigs" />
    </Wrapper>
  );
};

export default Logo;
