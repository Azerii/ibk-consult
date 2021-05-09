import styled from "styled-components";
import Spacer from "./Spacer";

const Wrapper = styled.div`
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

    ul {
      list-style: initial;
    }
  }
`;

const List = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.6rem;

  p {
    width: 100%;
    white-space: nowrap;
    // text-align: center;
  }

  &.mb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    grid-gap: unset;
  }
`;

const ClientList = () => {
  return (
    <Wrapper>
      <h1 className="displayMediumBold textCenter lg">
        OTHER BRANDS AND CLIENTS
        <br />
        I’VE WORKED WITH
      </h1>
      <h1 className="displayMediumBold textCenter mb">
        OTHER BRANDS
        <br />
        AND CLIENTS
        <br />
        I’VE WORKED WITH
      </h1>
      <Spacer y={6} />
      <List>
        <ul className="fullWidth">
          <li className="textMediumBold">MedicalSearch AU, Australia</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Johnson A. Furnitures, Nigeria</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Professional Seduction, USA</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">IndustrySearch AU, Australia</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">TS Elimination, Nevada, USA</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Gallant Gardens, Singapore</li>
          <Spacer y={2.4} />
        </ul>
        <ul className="fullWidth">
          <li className="textMediumBold">MedicalSearch AU, Australia</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Johnson A. Furnitures, Nigeria</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Professional Seduction, USA</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">IndustrySearch AU, Australia</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">TS Elimination, Nevada, USA</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Gallant Gardens, Singapore</li>
          <Spacer y={2.4} />
        </ul>
        <ul className="fullWidth">
          <li className="textMediumBold">MedicalSearch AU, Australia</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Johnson A. Furnitures, Nigeria</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Professional Seduction, USA</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">IndustrySearch AU, Australia</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">TS Elimination, Nevada, USA</li>
          <Spacer y={2.4} />
          <li className="textMediumBold">Gallant Gardens, Singapore</li>
          <Spacer y={2.4} />
        </ul>
      </List>
    </Wrapper>
  );
};

export default ClientList;
