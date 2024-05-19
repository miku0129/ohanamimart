import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import ProductCard from "../product-card/product-card.component";
import Slick from "../slick/slick.component";
import {
  BottomLine,
  PreviewFourItemsInALine,
} from "../../component-utils/component-utils.styles";

import { get_product_array_for_main_visual } from "../../utils/data/data.utils";

import { ReactComponent as TeamLogo } from "../../assets/hanami-cat-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram-svgrepo-com.svg";

import {
  team_text,
  team_sub_text,
  team_instagram_url,
} from "../../assets/page-assets";

import "./directory.styles.scss";

const Directory = () => {
  const categories = useContext(CategoriesContext);
  const products =
    categories.length > 0 ? get_product_array_for_main_visual(categories) : [];

  return (
    <div className="main-visual-container">
      <Slick slickUsage="mainVisual" />
      <div className="main-visual-message-container">
        <p className="message">{team_text}</p>
        <p>{team_sub_text}</p>
        <div>
          <TeamLogo
            id="team-logo"
            style={{ width: "150px", height: "100px" }}
          />
          <a href={team_instagram_url} target="_blank" rel="noreferrer">
            <InstagramLogo
              style={{ width: "20px", height: "20px", opacity: "50%" }}
            />
          </a>
        </div>
      </div>
      <PreviewFourItemsInALine>
        {products.length > 0 &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </PreviewFourItemsInALine>
      <BottomLine />
      <CategoriesPreview />
    </div>
  );
};

export default Directory;
