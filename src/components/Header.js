import styled from "styled-components";
import { linkedin, mailIcon } from "../assets";
import Container from "./Container";
import Logo from "./Logo";
import Spacer from "./Spacer";

const Wrapper = styled.nav`
  padding: 2.4rem 0;
  // position: sticky;
  // top: 0;
  // z-index: 10;
  // background-color: #ffffff;

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

  @media screen and (max-width: 768px) {
    .inner,
    .navRight {
      flex-wrap: wrap;
    }

    .navRight {
      margin-top: 2.4rem;
    }

    .navLink {
      margin-top: 1.2rem;
    }
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
          <a
            href="https://ng.linkedin.com/in/ibukunadegbulugbe"
            target="_blank"
            rel="noreferrer noopener"
            className="navLink"
          >
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
