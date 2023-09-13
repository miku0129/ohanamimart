import { useEffect, useState } from "react";

import MainVisualImages from "./main-visual-images";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import ProductCard from "../product-card/product-card.component";
import Slick from "../slick/slick.component";
import {
  BottomLine,
  PreviewFourItemsInALine,
} from "../../component-utils/component-utils.styles";

import { get_product_array_for_main_visual } from "../../utils/data/data.utils";

import "./directory.styles.scss";

const Directory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await get_product_array_for_main_visual();
      setProducts(data);
    };
    getProducts();
  }, []);

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
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </PreviewFourItemsInALine>
      <BottomLine />
      <CategoriesPreview />
    </div>
  );
};

export default Directory;
