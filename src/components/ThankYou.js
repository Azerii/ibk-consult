import styled from "styled-components";
import { memoji_ibk } from "../assets";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00000070;
  backdrop-filter: blur(5px);

  .inner {
    position: relative;
    width: 40vw;
    padding: 4.8rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 32px #0000fe50;
    border-radius: 3rem;
    pointer-events: none;
    transition: all 500ms ease-in;
  }

  .memoji {
    position: absolute;
    top: 4.8rem;
    right: 10%;
    height: 15rem;
    border-radius: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    .inner {
      width: 90vw;
      padding: 2.4rem;
      border-radius: 1.2rem;
    }

    .memoji {
      height: 10rem;
      right: 2.4rem;
    }
  }
`;

const handleModalClose = (e) => {
  if (e.currentTarget.id === "modal") {
    window.location.replace("/");
  }
};

const ThankYou = () => {
  return (
    <Wrapper id="modal" onClick={(e) => handleModalClose(e)}>
      <div className="inner">
        <img src={memoji_ibk} alt="memoji" className="memoji" />
        <p className="textMedium">
          Thank you for your interest!
          <br />
          See you at the webinar.
        </p>
        <Spacer y={2.4} />
        <p className="textMedium">Regards,</p>
        <Spacer y={1.2} />
        <p className="textMediumBold">Ibukun Adegbulugbe</p>
      </div>
    </Wrapper>
  );
};

export default ThankYou;
