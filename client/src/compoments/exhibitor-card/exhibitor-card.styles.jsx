import styled from "styled-components";

export const Exhibitor = styled.div`
  padding: 5px 5px 5px 5px;
  display: flex;
  justify-content: flex-start;
  gap: 25px;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const ExhibitorDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    margin-top: 0;
  }
`;
