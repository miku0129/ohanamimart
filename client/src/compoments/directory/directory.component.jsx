import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import ProductCard from "../product-card/product-card.component";
import Slick from "../slick/slick.component";
import {
  BottomLine,
  PreviewFourItemsInALine,
} from "../../component-utils/component-utils.styles";

import { get_product_array_for_main_visual } from "../../utils/data/data.utils";
import MainVisualImages from "../../assets/main-visual-images";

import "./directory.styles.scss";

const Directory = () => {
  const categories = useSelector(selectCategories);
  const products =
    categories.length > 0 ? get_product_array_for_main_visual(categories) : [];
  
  return (
    <div className="main-visual-container">
      <Slick images={MainVisualImages} isPrimary={false} />
      <div className="main-visual-message-container">
        <p className="message">
          Acheter en ligne des articles, directement auprès des fabricants
          japonais
        </p>
        <p>Hanami est la maison de l'artisanat japonais de qualité</p>
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
