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
  const [store_name, setStoreName] = useState("");
  const [store_website_url, setStoreWebsiteUrl] = useState("");

  useEffect(() => {
    if (categoriesMap["store"]) {
      categoriesMap["store"].forEach((store) => {
        if (store["store_name_lowercase_for_url"] === category) {
          setStoreName(store["store_name"]);
          setStoreWebsiteUrl(store["store_website_url"]);
          setProducts(store["products"]);
        }
      });
    }
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2>
        {store_name && (
          <span className="title">
            {store_name.toUpperCase()}{" "}
            <a href={store_website_url} target="_blank" rel="noreferrer">
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
