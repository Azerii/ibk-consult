import styled from "styled-components";
import { anike, futureNet, heroshe, myGst, tsGetout } from "../assets";
import Button from "./Button";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  background-color: #fffaf2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .textPrimary {
    color: #0000fe;
  }

  .mb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2.4rem;

    .lg {
      display: none;
    }

    .mb {
      display: block;
    }
  }
`;

const Brands = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 7.2rem;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: ${(props) => props.gridColumn || "unset"};
`;

const Experience = () => {
  return (
    <Wrapper>
      <Spacer y={9.6} />
      <h1 className="displayMediumBold">Work Experience</h1>
      <Spacer y={2.4} />
      <p className="textMedium textCenter lg">
        My track record as an experienced Digital Marketing Manager has seen me
        help businesses to
        <br />
        leverage the strengths & weak-points of their market competitors into
        generating awareness
        <br />
        for their brand and services. I can help you do the same by showing you
        exactly where your
        <br />
        previous strategies have fallen short and where to pick up from.{" "}
      </p>
      <p className="textMedium textCenter mb">
        My track record as an experienced
        <br />
        Digital Marketing Manager has seen me help businesses to leverage the
        strengths & weak-points of their market competitors into generating
        awareness for their brand and services. I can help you do the same by
        showing you exactly where your previous strategies have fallen short and
        where to pick up from.{" "}
      </p>
      <Spacer y={7.2} />
      <Button text="Get free expert advice" as="a" href="/#get-started" />
      <Spacer y={14.4} />
      <h1 className="displayMediumBold textCenter">
        Why should you trust
        <br />
        my services?
      </h1>
      <Spacer y={4.8} />
      <Brands>
        <Brand gridColumn="1/3">
          <img src={anike} alt="logo" />
          <Spacer y={1.2} />
          <h3 className="textUppercase textLargeBold textCenter">
            Anike Naturals
          </h3>
          <Spacer y={0.6} />
          <p className="textSmall textCenter">
            Drove a 700% increase in conversion rates in one month
          </p>
        </Brand>
        <Brand gridColumn="3/5">
          <img src={heroshe} alt="logo" />
          <Spacer y={1.2} />
          <h3 className="textUppercase textLargeBold textCenter">Heroshe</h3>
          <Spacer y={0.6} />
          <p className="textSmall textCenter">
            Generated 15,000+ signups at a cost per signup of $0.7
          </p>
        </Brand>
        <Brand gridColumn="5/7">
          <img src={tsGetout} alt="logo" />
          <Spacer y={1.2} />
          <h3 className="textUppercase textLargeBold textCenter">TS Getout</h3>
          <Spacer y={0.6} />
          <p className="textSmall textCenter">
            Generated 40 leads per month for a brand that previously recorded 0
            leads in 6 months
          </p>
        </Brand>
        <Brand gridColumn="2/4">
          <img src={futureNet} alt="logo" />
          <Spacer y={1.2} />
          <h3 className="textUppercase textLargeBold textCenter">Futurenet</h3>
          <Spacer y={0.6} />
          <p className="textSmall textCenter">
            Increased website signups by 30% in two weeks
          </p>
        </Brand>
        <Brand gridColumn="4/6">
          <img src={myGst} alt="logo" />
          <Spacer y={1.2} />
          <h3 className="textUppercase textLargeBold textCenter">
            Sixers Solutions
          </h3>
          <Spacer y={0.6} />
          <p className="textSmall textCenter">
            Generated 2700+ conversions in 7 months
          </p>
        </Brand>
      </Brands>
      <Spacer y={9.6} />
      <a
        href="/#get-started"
        className="textLargeBold textPrimary textUnderline"
      >
        Schedule free consultation
      </a>
      <Spacer y={9.6} />
    </Wrapper>
  );
};

export default Experience;
