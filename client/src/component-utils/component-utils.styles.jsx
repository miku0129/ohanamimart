import { styled } from "styled-components";

import { ReactComponent as DefaultIcon } from "../assets/cherry-blossom-9-svgrepo-com.svg";
import { ReactComponent as PurchaseLogo } from "../assets/gift-1-svgrepo-com.svg";
import { ReactComponent as UserLogo } from "../assets/user-2-svgrepo-com.svg";

import Slider from "react-slick";

//component
export const SlickImage = styled.img`
  object-fit: cover;
  margin: auto;

  height: ${(props) =>
    props.slickUsage === "mainVisual" || props.slickUsage === "common-product"
      ? "400px"
      : "600px"};
  width: ${(props) =>
    props.slickUsage === "mainVisual"
      ? "100%"
      : props.slickUsage === "common-product"
      ? "90%"
      : "70%"};

  @media (max-width: 767px) {
    height: ${(props) =>
      props.slickUsage === "mainVisual"
        ? "400px"
        : props.slickUsage === "common-product"
        ? "300px"
        : "500px"};
    width: ${(props) => (props.slickUsage === "book" ? "350px" : "")};
  }
`;

export const CustomSlider = styled(Slider)`
  @media (max-width: 767px) {
    .slick-list {
      padding: ${(props) =>
        props.slickUsage === "book" ? "0px 20px !important" : ""};
    }
  }
`;

export const SlickContainer = styled.div`
  //slickは必ず親コンポ―ネントの幅を決める必要がある。
  width: ${(props) => (props.slickUsage === "mainVisual" ? "100vw" : "70vw")};
  @media (max-width: 767px) {
    width: 100vw;
  }
`;

export const DefaultPicture = styled.img``;
DefaultPicture.defaultProps = {
  src: "https://i.ibb.co/xmp2tKH/hong-feng-c-I2-BLo74zso-unsplash.jpg",
};

export const StyledUserLogo = styled(UserLogo)`
  height: 20px;
  width: 20px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const StyledPurchaseLogo = styled(PurchaseLogo)`
  height: 20px;
  width: 20px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const DefaultUserIcon = styled(DefaultIcon)`
  height: 100px;
  width: 100px;
`;

export const CustomUserIcon = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  border-radius: 50%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-position: center;
  }
`;

export const BottomLine = styled.div`
  margin: auto;
  width: 95vw;
  border-bottom: solid 0.5px gainsboro;
`;

export const SpanLink = styled.span`
  &:hover {
    color: cornflowerblue;
  }
`;

export const ParagraphLink = styled.p`
  &:hover {
    color: cornflowerblue;
  }
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
    gap: 1%;
  }
`;

//layout
export const IconwithLogoAtTheLeftBottom = styled.div`
  display: flex;

  .innerContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const PreviewLogosInALine = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

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
