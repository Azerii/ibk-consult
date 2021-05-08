import styled from "styled-components";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .textPrimary {
    color: #0000fe;
  }
`;

const Note = () => {
  return (
    <Wrapper>
      <p className="textPrimary textLargeBold textCenter">
        There is a very limited number of slots available for this
        <br />
        free consultation and it won’t stay free for long, so ensure
        <br />
        to utilize this opportunity now.
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
