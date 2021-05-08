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

const ContactForm = ({ className }) => {
  return (
    <div className={className} id="get-started">
      <h2 className="textUppercase textLargeBold">Get Started</h2>
      <Spacer y={4.8} />
      <Wrapper>
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
