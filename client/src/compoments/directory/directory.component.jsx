import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import MainVisuals from "../main-visuals/main-visuals.component";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import ProductCard from "../product-card/product-card.component";
import {
  BottomLine,
  PreviewFourItemsInALine,
} from "../../component-utils/component-utils.styles";

import { get_product_array_for_main_visual } from "../../utils/data/data.utils";

const Directory = () => {
  const categories = useContext(CategoriesContext);
  const products =
    categories.length > 0 ? get_product_array_for_main_visual(categories) : [];

  return (
    <div className="directory-container">
      <MainVisuals />
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
