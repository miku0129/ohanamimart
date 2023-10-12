import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  .footer-subcontainer {
    display: flex;
    flex-direction: column; 
    .footer-text {
      display: flex;
      justify-content: center;
    }
  }
`;