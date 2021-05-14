import { useState } from "react";
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
    pointer-events: none;
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

const Dropdown = styled.div`
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
    pointer-events: none;
    transition: all 200ms ease-in;

    &.show {
      height: fit-content;
      opacity: 1;
      pointer-events: all;
    }
  }

  .listItem {
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

const budgetItems = [
  "$500 - $999",
  "$1,000 - $4,999",
  "$5,000 - $50,000",
  "Above $50,000",
];

const checkboxNames_services = [
  "_Sales_Funnel_Marketing",
  "_Social_Media_Marketing",
  "_Search_Engine_Optimisation",
  "_Google_Search_Ads",
  "_Wordpress_Development",
  "_UX_UI_Design",
  "_Web_Development",
];

const checkboxNames_budgetItems = [
  "_500_to_999_dollars",
  "_1000_to_4999_dollars",
  "_5000_to_50000_dollars",
  "_above_500000_dollars",
];

const handleListToggle = (e, listName) => {
  e.target.childNodes[1] && e.target.childNodes[1].classList.toggle("rotate");
  document.querySelector(`.${listName}`).classList.toggle("show");

  return null;
};

const handleServiceClick = (e, id, budget) => {
  if (budget) {
    document.querySelectorAll(`.budgetList .listItem`).forEach((item) => {
      item.classList.remove("active");
    });

    e.target.classList.toggle("active");
    document.querySelector(`input#${id}`).click();
  } else {
    e.target.classList.toggle("active");
    document.querySelector(`input#${id}`).click();
  }
};

const ContactForm = ({ className }) => {
  const [hideLabel, setHideLabel] = useState(false);

  const handleReset = () => {
    document.querySelector("#form").reset();
    document.querySelectorAll(`.listItem`).forEach((item) => {
      item.classList.remove("active");
    });
    setHideLabel(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    document.querySelector(".successMessage").classList.add("open");
    setTimeout(() => {
      document.querySelector(".successMessage").classList.remove("open");
    }, 3000);
  };

  return (
    <div className={className} id="get-started">
      <h2 className="textUppercase textLargeBold">Get Started</h2>
      <Spacer y={4.8} />
      <Wrapper id="form" onSubmit={handleSubmit} onReset={handleReset}>
        <p className="textMedium textCenter successMessage">
          Thank you for reaching out!
          <br />
          I'll get back to you shortly.
        </p>
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="text"
          name="full_name"
          placeholder="Full name"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
          required
        />
        <Spacer y={2.4} />
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="email"
          name="email_address"
          placeholder="Email address"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
          required
        />
        <Spacer y={2.4} />
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="number"
          name="phone_number"
          placeholder="Phone number"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
          required
        />
        <Spacer y={2.4} />
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="text"
          name="company_name"
          placeholder="Company name"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
          required
        />
        <Spacer y={2.4} />
        <Dropdown>
          <button
            type="button"
            onClick={(e) => handleListToggle(e, "serviceList")}
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
                className="textSmall black top center listItem"
                onClick={(e) =>
                  handleServiceClick(e, checkboxNames_services[index])
                }
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </Dropdown>
        <Spacer y={2.4} />
        <Dropdown>
          <button
            type="button"
            onClick={(e) => handleListToggle(e, "budgetList")}
            className="toggler fullWidth"
          >
            <span className="noPointerEvents">What's your budget like</span>
            <img
              src={chevronDown}
              alt="chevron down"
              className="noPointerEvents icon"
            />
          </button>
          <div className="list budgetList">
            <Spacer y={2.4} />
            {budgetItems.map((item, index) => (
              <button
                key={`service_${item}`}
                className="textSmall black top center listItem"
                onClick={(e) =>
                  handleServiceClick(e, checkboxNames_budgetItems[index], true)
                }
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </Dropdown>
        {services.map((service, index) => (
          <input
            key={`checkbox_${service}`}
            id={checkboxNames_services[index]}
            type="checkbox"
            name={checkboxNames_services[index]}
            className="serviceCheckbox hidden"
            value={service}
          />
        ))}
        {budgetItems.map((item, index) => (
          <input
            key={`radio_${item}`}
            id={checkboxNames_budgetItems[index]}
            type="checkbox"
            name={checkboxNames_budgetItems[index]}
            className="hidden"
            value={item}
          />
        ))}
        <Spacer y={2.4} />
        <FormGroup
          fieldStyle="longText"
          inputType="text"
          name="about"
          placeholder="Tell me a bit about your business"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
          required
        />
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
