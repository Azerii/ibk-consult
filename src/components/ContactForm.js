import styled from "styled-components";
import PropTypes from "prop-types";
import { chevronDown } from "../assets";
import Button from "./Button";
import FormGroup from "./FormGroup";
import Spacer from "./Spacer";

const Wrapper = styled.form`
  width: 100%;

  .hidden {
    display: none;
  }

  .successMessage {
    width: fit-content;
    position: fixed;
    top: -14.4rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 2.4rem;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    z-index: 20;
    background-color: #ffffff;
    border-radius: 3rem;
    opacity: 0;
    pointer-events: none;
    transition: all 500ms ease-in;

    &.open {
      top: 2.4rem;
      opacity: 1;
    }
  }
`;

const Services = styled.div`
  padding: 1.8rem 2.4rem;
  background-color: #fafafa;
  border-radius: 1.2rem;

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0px;

    .icon {
      height: 0.6rem;
      transition: transform 250ms ease-out;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1.2rem;
    height: 0px;
    opacity: 0;
    transition: all 200ms ease-in;

    &.show {
      height: fit-content;
      opacity: 1;
    }
  }

  .service {
    border: 1px solid;
    padding: 1rem 3rem;
    border-radius: 5rem;
    text-align: center;
    transition: all 200ms ease-in;
    font-size: 14px;

    &.active {
      background-color: #000000;
      color: #ffffff;
    }
  }
`;

const services = [
  "Sales Funnel Marketing",
  "Social Media Marketing",
  "Search Engine Optimisation",
  "Google Search Ads",
  "Wordpress Development",
  "UX/UI Design",
  "Web Development",
];

const checkboxNames = [
  "Sales_Funnel_Marketing",
  "Social_Media_Marketing",
  "Search_Engine_Optimisation",
  "Google_Search_Ads",
  "Wordpress_Development",
  "UX/UI_Design",
  "Web_Development",
];

const handleListToggle = (e) => {
  e.target.childNodes[1] && e.target.childNodes[1].classList.toggle("rotate");
  document.querySelector(".serviceList").classList.toggle("show");

  return null;
};

const handleServiceClick = (e, checkboxName) => {
  e.target.classList.toggle("active");
  document.querySelector(`input[name="${checkboxName}"]`).click();
};

const handleSubmit = (e) => {
  e.preventDefault();
  document.querySelector(".successMessage").classList.add("open");
  setTimeout(() => {
    document.querySelector(".successMessage").classList.remove("open");
  }, 3000);
};

const ContactForm = ({ className }) => {
  return (
    <div className={className} id="get-started">
      <h2 className="textUppercase textLargeBold">Get Started</h2>
      <Spacer y={4.8} />
      <Wrapper onSubmit={handleSubmit}>
        <p className="textMedium textCenter successMessage">
          Message Sent Successfully.
          <br />
          We will get back to you Shortly.
        </p>
        <FormGroup
          fieldStyle="shortText"
          inputType="text"
          name="full_name"
          placeholder="Full name"
          required
        />
        <Spacer y={2.4} />
        <FormGroup
          fieldStyle="shortText"
          inputType="email"
          name="email_address"
          placeholder="Email address"
          required
        />
        <Spacer y={2.4} />
        <FormGroup
          fieldStyle="shortText"
          inputType="number"
          name="phone_number"
          placeholder="Phone number"
          required
        />
        <Spacer y={2.4} />
        <FormGroup
          fieldStyle="shortText"
          inputType="text"
          name="company_name"
          placeholder="Company name"
          required
        />
        <Spacer y={2.4} />
        <Services>
          <button
            type="button"
            onClick={handleListToggle}
            className="toggler fullWidth"
          >
            <span className="noPointerEvents">
              What services are you interested in?
            </span>
            <img
              src={chevronDown}
              alt="chevron down"
              className="noPointerEvents icon"
            />
          </button>
          <div className="list serviceList">
            <Spacer y={2.4} />
            {services.map((item, index) => (
              <button
                key={`service_${item}`}
                className="textSmall black top center service"
                onClick={(e) => handleServiceClick(e, checkboxNames[index])}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </Services>
        <Spacer y={2.4} />
        <FormGroup
          fieldStyle="shortText"
          inputType="text"
          name="budget"
          placeholder="What's your budget like"
          required
        />
        {services.map((service, index) => (
          <input
            key={`checkbox_${service}`}
            type="checkbox"
            name={checkboxNames[index]}
            className="serviceCheckbox hidden"
          />
        ))}
        <Spacer y={4.8} />
        <Button text="REQUEST CONSULTATION" fullWidth />
      </Wrapper>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
