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
    height: 3.8rem;
    width: 3.8rem;
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
      // text-align: center;
      line-height: 56px;
    }

    .contactForm {
      margin-top: 4.8rem;
    }

    .memojiRow {
      justify-content: center;
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
          A <span className="textPrimary">FREE WEBINAR</span> ON HOW TO CREATE
          AN EFFECTIVE DIGITAL MARKETING PLAN FOR YOUR BUSINESS
        </h1>
        <Spacer y={4.8} />
        <div className="flex-row memojiRow">
          <img src={memoji_ibk} alt="memoji" />
          <Spacer x={2.4} />
          <span className="textLargeBold">With Ibukun Adegbulugbe</span>
        </div>
        <Spacer y={4.8} />
        <div className="moreContent">
          <p className="textMedium">
            Date: Wednesday, June 23rd, 2021
            <br />
            Time: 12:00pm - 1:00pm
          </p>
          <Spacer y={6} />
          <h2 className="textLargeBold">We’ll discuss the following:</h2>
          <Spacer y={4.8} />
          <div className="flex-row textMedium">
            <span className="blueCircle">1</span>
            <Spacer x={2.4} />
            <span>Must-haves for a digital marketing plan.</span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">2</span>
            <Spacer x={2.4} />
            <span>Doing a quick SWOT Analysis.</span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">3</span>
            <Spacer x={2.4} />
            <span>Deciding on the SMART goals for your marketing.</span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">4</span>
            <Spacer x={2.4} />
            <span>Creating a target persona.</span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">5</span>
            <Spacer x={2.4} />
            <span>Defining your marketing strategy</span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">6</span>
            <Spacer x={2.4} />
            <span>Timelines &amp; Budgets</span>
          </div>
          <Spacer y={2.4} />
          <div className="flex-row textMedium">
            <span className="blueCircle">7</span>
            <Spacer x={2.4} />
            <span>Important KPIs to track.</span>
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
