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

  .category-title-text {
    font-weight: initial;

    //google font
    // font-family: "Ysabeau Office", sans-serif;
  }
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
  .image_circle {
    &:hover {
      opacity: 0.5;
    }
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

  #creator_description {
    max-width: 700px;

    /最初だけ大文字にする/ 
    font-size: 12pt; /* 文字のサイズ */
    text-align: left; /* 文字位置     */
    padding: 5px; /* 枠の余白     */
    line-height: 1; /* 1行の高さ    */

    &:first-letter {
      font-size: 2em; /* 文字サイズ   */
      padding: 0px; /* 余白         */
      float: left; /* 2文字目の位置合わせ */
    }
  }

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
`;
