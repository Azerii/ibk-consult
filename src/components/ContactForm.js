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

    .formGroup {
      border-radius: 0;
      text-align: center;
      transition: all 250ms ease-out;
      font-size: 14px;
      height: 0;
      overflow: hidden;

      &.show {
        height: 5.6rem;
      }

      input {
        text-align: center;
      }
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

const descriptionItems = [
  "Student",
  "Entrepreneur / Business Owner",
  "Marketing Execuctive",
  "Freelancer",
  "Other",
];

const checkboxNames_descriptionItems = [
  "Student",
  "Entrepreneur_or_Business_Owner",
  "Marketing_Execuctive",
  "Freelancer",
  "Other",
];

const handleListToggle = (e, listName) => {
  e.target.childNodes[1] && e.target.childNodes[1].classList.toggle("rotate");
  document.querySelector(`.${listName}`).classList.toggle("show");

  return null;
};

const handleDescriptionClick = (e, id) => {
  document.querySelectorAll(`.description .listItem`).forEach((item) => {
    item.classList.remove("active");
    document.querySelector(".list .formGroup").classList.remove("show");
  });

  e.target.classList.add("active");
  document.querySelector(`input#${id}`).click();

  if (id.toLowerCase() === "other") {
    document.querySelector(".list .formGroup").classList.add("show");
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
    window.location.replace("/response-recorded");
  };

  return (
    <div className={className} id="register">
      <h2 className="textUppercase textLargeBold">Register</h2>
      <Spacer y={4.8} />
      <Wrapper id="form" onSubmit={handleSubmit} onReset={handleReset}>
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="text"
          name="name"
          placeholder="Name"
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
        />
        <Spacer y={2.4} />
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="text"
          name="city"
          placeholder="What city do you stay?"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
          required
        />
        <Spacer y={2.4} />
        <Dropdown>
          <button
            type="button"
            onClick={(e) => handleListToggle(e, "description")}
            className="toggler fullWidth"
          >
            <span className="noPointerEvents">What best describes you?</span>
            <img
              src={chevronDown}
              alt="chevron down"
              className="noPointerEvents icon"
            />
          </button>
          <div className="list description">
            <Spacer y={2.4} />
            {descriptionItems.map((item, index) => (
              <button
                key={`description_${item}`}
                className="textSmall black top center listItem"
                onClick={(e) =>
                  handleDescriptionClick(
                    e,
                    checkboxNames_descriptionItems[index]
                  )
                }
                type="button"
              >
                {item}
              </button>
            ))}
            <FormGroup
              fieldStyle="shortText"
              inputType="text"
              name="other_description"
              placeholder="Type here.."
              hideLabel={hideLabel}
              setHideLabel={setHideLabel}
              className="formGroup"
            />
          </div>
        </Dropdown>
        {descriptionItems.map((item, index) => (
          <input
            key={`radio_${item}`}
            id={checkboxNames_descriptionItems[index]}
            type="checkbox"
            name={checkboxNames_descriptionItems[index]}
            className="hidden"
            value={item}
          />
        ))}
        <Spacer y={2.4} />
        <FormGroup
          className="inputWrapper"
          fieldStyle="shortText"
          inputType="text"
          name="workplace"
          placeholder="Where do you work?"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
        />
        <Spacer y={2.4} />
        <FormGroup
          fieldStyle="longText"
          inputType="text"
          name="excitment_factor"
          placeholder="What excites you the most about this webinar?"
          hideLabel={hideLabel}
          setHideLabel={setHideLabel}
        />
        <Spacer y={4.8} />
        <Button text="SUBMIT" fullWidth />
      </Wrapper>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
