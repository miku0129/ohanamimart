import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../compoments/product-card/product-card.component";
import { ReactComponent as Purchaselogo } from "../../assets/gift-1-svgrepo-com.svg";
import { ReactComponent as UserLogo } from "../../assets/user-2-svgrepo-com.svg";

import { selectCategories } from "../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState([]);
  const [store_name, setStoreName] = useState("");
  const [store_website_url, setStoreWebsiteUrl] = useState("");
  const [store_intro_text, setIntroText] = useState("");

  useEffect(() => {
    if (categories) {
      categories.forEach((store) => {
        if (store["store_name_lowercase_for_url"] === category) {
          setStoreName(store["store_name"]);
          setStoreWebsiteUrl(store["store_website_url"]);
          setProducts(store["products"]);
          setIntroText(store["store_intro_text"]);
        }
      });
    }
  }, [categories]);

  return (
    <div className="category-container">
      <div className="category-headline">
        <div className="category-main-headline">
          <div className="category-title">
            <h1>
              {store_name && (
                <span className="title">{store_name.toUpperCase()} </span>
              )}
            </h1>
          </div>
        </div>
        <div className="category-subtitle">
          <div className="category-icon">
            <a href={store_website_url} target="_blank" rel="noreferrer">
              <UserLogo
                className="userLogo"
                style={{ height: 40, width: 40 }}
              />
            </a>
          </div>
          <div className="category-intro-text">
            <div>
              <span>{store_intro_text}</span>
            </div>
            <div className="purchase-icon">
              {/* <a href={store_website_url} target="_blank" rel="noreferrer"> */}
              <Purchaselogo
                className="purchaseLogo"
                style={{ height: 20, width: 20 }}
              />
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>

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
