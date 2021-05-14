import styled from "styled-components";
import { linkedin } from "../assets";
import Container from "./Container";
import Logo from "./Logo";

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

  .mb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mb {
      display: block;
    }

    .lg {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container className="inner">
        <Logo />
        <div className="navRight">
          <a
            href="https://ng.linkedin.com/in/ibukunadegbulugbe"
            target="_blank"
            rel="noreferrer noopener"
            className="navLink"
          >
            <img src={linkedin} alt="mail" />
            {/* <Spacer className="lg" x={1.2} />
            <span className="textMedium lg">Ibukun Adegbulugbe</span> */}
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
