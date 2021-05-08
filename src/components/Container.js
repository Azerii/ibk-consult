import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0 2.4rem;

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 700px) {
    max-width: 620px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }

  @media screen and (min-width: 1240px) {
    max-width: 1190px;
  }

  @media (min-width: 1400px) {
    max-width: 1296px;
  }
  @media (min-width: 1600px) {
    max-width: 1460px;
  }
`;

export default Container;
