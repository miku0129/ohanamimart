import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  padding: 0 10px; // 両端に余白を追加
  gap: 10px;
`;

export const CategoryHeadline = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px; // 両端に余白を追加
`;

export const CategorySubtitle = styled.div`
  display: flex;
  gap: 5px;
`;

export const CategoryIcon = styled.div`
  position: relative;

  .image_circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: ${({ imageurl }) => `url(${imageurl})`};
    background-position: center;
  }
  .userLogo {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const CategoryIntro = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .purchase-icon {
    .purchaseLogo {
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;

export const CategorySubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    padding: 10px 10px; // 両端に余白を追加

    // レスポンシブ対応
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 20px;
      padding: 0;
      padding: 0 10px; // 両端に余白を追加
    }
`