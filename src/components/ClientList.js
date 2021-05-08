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
  }
`;

const List = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.6rem;

  p {
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    p {
      text-align: center;
    }
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
      <Spacer y={12} />
      <List>
        <div>
          <p className="textLargeBold">MedicalSearch AU, Australia</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Johnson A. Furnitures, Nigeria</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Professional Seduction, USA</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">IndustrySearch AU, Australia</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">TS Elimination, Nevada, USA</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Gallant Gardens, Singapore</p>
          <Spacer y={2.4} />
        </div>
        <div>
          <p className="textLargeBold">MedicalSearch AU, Australia</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Johnson A. Furnitures, Nigeria</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Professional Seduction, USA</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">IndustrySearch AU, Australia</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">TS Elimination, Nevada, USA</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Gallant Gardens, Singapore</p>
          <Spacer y={2.4} />
        </div>
        <div>
          <p className="textLargeBold">MedicalSearch AU, Australia</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Johnson A. Furnitures, Nigeria</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Professional Seduction, USA</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">IndustrySearch AU, Australia</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">TS Elimination, Nevada, USA</p>
          <Spacer y={2.4} />
          <p className="textLargeBold">Gallant Gardens, Singapore</p>
          <Spacer y={2.4} />
        </div>
      </List>
    </Wrapper>
  );
};

export default ClientList;
