import styled from "styled-components";
import { linkedin, mailIcon } from "../assets";
import Container from "./Container";
import Logo from "./Logo";
import Spacer from "./Spacer";

const Wrapper = styled.nav`
  padding: 2.4rem 0;

  .inner,
  .navRight,
  .navLink {
    display: flex;
    align-items: center;
  }

  .inner {
    justify-content: space-between;
  }

  .navLink img {
    height: 2.4rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container className="inner">
        <Logo />
        <div className="navRight">
          <a href="mailto:ibukunadegbulugbe@gmail.com" className="navLink">
            <img src={mailIcon} alt="mail" />
            <Spacer x={1.2} />
            <span className="textMedium">ibukunadegbulugbe@gmail.com</span>
          </a>
          <Spacer x={2.4} />
          {/* get linkedin link */}
          <a href="" className="navLink">
            <img src={linkedin} alt="mail" />
            <Spacer x={1.2} />
            <span className="textMedium">Ibukun Adegbulugbe</span>
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
