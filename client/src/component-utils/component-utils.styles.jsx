import { styled } from "styled-components";

//decoration
export const BottomLine = styled.div`
  margin: auto;
  width: 95vw;
  border-bottom: solid 0.5px gainsboro;
`;

export const LabelLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    opacity: 0.6;
  }
`;

export const LabelWithIndicatorLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    opacity: 0.6;
  }

  .label-with-indicator-link-inner {
    display: flex;
    flex-direction: row;
    gap:1%;
  }
`;

//layout
export const PreviewOneItemsInALine = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 10px; // 両端に余白を追加

  // レスポンシブ対応
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 20px;
    padding: 0;
    padding: 0 10px; // 両端に余白を追加
  }
`;

export const PreviewThreeItemsInALine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 10px; // 両端に余白を追加

  // レスポンシブ対応
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 20px;
    padding: 0;
    padding: 0 10px; // 両端に余白を追加
  }
`;

export const PreviewFourItemsInALine = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 10px; // 両端に余白を追加

  // レスポンシブ対応
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 20px;
    padding: 0;
    padding: 0 10px; // 両端に余白を追加
  }
`;
