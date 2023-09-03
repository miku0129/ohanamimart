import { styled } from "styled-components";

export const ContentsContainer = styled.div``;

export const MainImageContainer = styled.div`
  padding: 3% 0 3% 0;
  text-align: center;

  img {
    max-width: 90%; // 画像の幅を調整
    max-height: 90vh; // 画像の高さを調整
  object-fit: cover;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    @media (max-width: 796px) {
      padding: 3% 3% 3% 3%;

      img {
        width: 100%; // 画像の幅を調整
        height: auto; // 画像の高さを自動調整
      }
`;

export const ImageContainer = styled.div`
@media (max-width: 796px) {
  padding: 3% 5% 3% 5%;
`;

export const ContentsSubContainer = styled.div`
  padding: 5% 10% 5% 10%;
  display: flex;
  justify-content: space-between;

  .contents-subcontainer-left {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .contents-subcontainer-right {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
  }
  @media (max-width: 796px) {
    flex-direction: column; // スマホでは縦に並べる
    justify-content: center; // 中央寄せに調整
    align-items: center; // 中央寄せに調整
  }
`;

export const Overlay = styled.div`
  //画面全体を覆う設定
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2; //Positioning modal

  //画面の中央に要素を表示させる設定
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3; //Positioning modal

    img {
      max-width: 90%; // 画像の幅を調整
      max-height: 90vh; // 画像の高さを調整
    }

    .modal-image-subcontainer {
      width: 90%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
