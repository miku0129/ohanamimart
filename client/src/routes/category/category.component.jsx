import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../compoments/product-card/product-card.component";
import { ReactComponent as Homelogo } from "../../assets/home-1-svgrepo-com.svg";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  const [shopName, setShopName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  useEffect(() => {
    if (categoriesMap[category]) {
      setShopName(categoriesMap[category]["shopName"]);
      setWebsiteUrl(categoriesMap[category]["websiteUrl"]);
      setProducts(categoriesMap[category]["items"]);
    }
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2>
        {shopName && (
          <span className="title">
            {shopName.toUpperCase()}{" "}
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              <Homelogo
                className="homeLogo"
                style={{ height: 20, width: 20 }}
              />
            </a>
          </span>
        )}
      </h2>
      <div className="category-subcontainer">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
