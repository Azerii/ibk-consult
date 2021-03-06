import styled from "styled-components";
import Spacer from "./Spacer";

const Wrapper = styled.div`
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
    .mb {
      display: block;
    }

    .lg {
      display: none;
    }
  }
`;

const Note = () => {
  return (
    <Wrapper>
      <p className="textPrimary textLargeBold textCenter lg">
        There is a very limited number of slots available for this
        <br />
        free consultation and it won’t stay free for long, so ensure
        <br />
        to utilize this opportunity now.
      </p>
      <p className="textPrimary textLargeBold textCenter mb">
        There is a very limited number of slots available for this free
        consultation and it won’t stay free for long, so ensure to utilize this
        opportunity now.
      </p>
      <Spacer y={4.8} />
      <a
        href="/#get-started"
        className="textLargeBold textPrimary textUnderline textCenter"
      >
        Claim free consultation now
      </a>
    </Wrapper>
  );
};

export default Note;
