import styled from "styled-components";

export const Exhibitor = styled.div`
  padding: 5px 5px 5px 5px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media (max-width: 360px) {
    flex-direction: column;
  }

  .image_circle {
    min-width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: ${({ imageurl }) => `url(${imageurl})`};
    background-position: center;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const ExhibitorDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 360px) {
      h3 {
        margin: 0 0 0 0;
      }
`;