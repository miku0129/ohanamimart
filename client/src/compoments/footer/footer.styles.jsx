import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  .footer-subcontainer {
    display: flex;
    gap: 5px;
    .footer-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
`;