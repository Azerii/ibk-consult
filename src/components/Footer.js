import styled from "styled-components";
import { facebook, instagram, linkedinFooter, twitter } from "../assets";
import Container from "./Container";
import Spacer from "./Spacer";

const Wrapper = styled.footer`
  background-color: #212129;
  padding: 6rem 0;

  .textWhite {
    color: #ffffff;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .socials {
    display: flex;
    align-items: center;
  }

  .copyright {
    font-family: Eudoxus Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container className="inner">
        <p className="copyright textWhite">
          © 2021 - Digifigs Limited | All Rights Reserved
        </p>
        <div className="socials">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <Spacer x={2.4} />
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <Spacer x={2.4} />
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <Spacer x={2.4} />
          <a href="/">
            <img src={linkedinFooter} alt="linkedin" />
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
