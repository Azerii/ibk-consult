import styled from "styled-components";
import { memoji_ibk } from "../assets";
import ContactForm from "./ContactForm";
import Container from "./Container";
import Spacer from "./Spacer";

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.4rem;

  .content {
    grid-column: 1/3;
  }

  .contactForm {
    grid-column: 3/4;
  }

  .moreContent {
    width: 80%;
  }

  .textPrimary {
    color: #0000fe;
  }

  .textWhite {
    color: #ffffff;
  }

  .blueCircle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #0000fe;
    color: #ffffff;
  }

  .bgPrimary {
    background-color: #0000fe;
  }

  @media screen and (max-width: 768px) {
    display: block;
    grid-template-columns: unset;

    .content,
    contactForm {
      grid-column: unset;
    }

    .content > .caption {
      text-align: center;
    }

    .contactForm {
      margin-top: 4.8rem;
    }

    .moreContent {
      width: 100%;
    }

    .blueCircle {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
`;

const MainContent = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1 className="displayMediumBold caption">
          A 30-MINUTES{" "}
          <span className="textPrimary">
            FREE COMPREHENSIVE STRATEGY SESSION
          </span>{" "}
          TO HELP RESHAPE YOUR BUSINESS GOALS.{" "}
        </h1>
        <Spacer y={4.8} />
        <div className="flex-row">
          <img src={memoji_ibk} alt="memoji" />
          <Spacer x={2.4} />
          <span className="textLargeBold">With Ibukun Adegbulugbe</span>
        </div>
        <Spacer y={4.8} />
        <div className="moreContent">
          <p className="textMedium">
            Book a <span className="textPrimary textMediumBold">TOTALLY</span>{" "}
            free 30-minute strategy consultation with me where we discuss
            bespoke business solutions and I help resteer your business goals to
            exactly where you want it to be.
          </p>
          <Spacer y={2.4} />
          <p className="textMedium">
            We will cover how to approach your particular business challenge,
            answer any questions you have and map out a streamlined,
            results-driven plan you can immediately execute.{" "}
          </p>
          <Spacer y={2.4} />
          <p className="textMedium">
            There are very limited slots so the pick will be based on those who
            show genuine interest in wanting to grow their business.{" "}
          </p>
          <Spacer y={6} />
          <h2 className="textLargeBold">
            Here’s what you can expect on submitting the information contained
            in the form:{" "}
          </h2>
          <Spacer y={4.8} />
          <div className="flex-row textMedium">
            <span className="blueCircle">1</span>
            <Spacer x={2.4} />
            <span>
              We review the responses and on selection, you get an email to
              confirm your request and availability.
            </span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">2</span>
            <Spacer x={2.4} />
            <span>
              On confirming your availability, you’ll get another email
              containing a Calendly invite with meeting details.
            </span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">3</span>
            <Spacer x={2.4} />
            <span>
              We assess where you are with your business, provide general
              recommendations and a bespoke, mapped-out business strategy.
            </span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">4</span>
            <Spacer x={2.4} />
            <span>
              We’ll proffer options to help you execute this plan towards
              reaching your goals.
            </span>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default MainContent;
