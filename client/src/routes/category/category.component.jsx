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
  const [shop_name, setShopName] = useState("");
  const [shop_website_url, setShopWebsiteUrl] = useState("");
  const [shop_intro_text, setIntroText] = useState("");

  useEffect(() => {
    if (categories) {
      categories.forEach((shop) => {
        if (shop["shop_name_lowercase_no_spaces_for_url"] === category) {
          setShopName(shop["shop_name"]);
          setShopWebsiteUrl(shop["shop_website_url"]);
          setProducts(shop["products"]);
          setIntroText(shop["shop_intro_text"]);
        }
      });
    }
  }, [categories, category]);

  return (
    <div className="category-container">
      <div className="category-headline">
        <div className="category-main-headline">
          <div className="category-title">
            <h1>
              {shop_name && (
                <span className="title">{shop_name.toUpperCase()} </span>
              )}
            </h1>
          </div>
        </div>
        <div className="category-subtitle">
          <div className="category-icon">
            <a href={shop_website_url} target="_blank" rel="noreferrer">
              <UserLogo
                className="userLogo"
                style={{ height: 40, width: 40 }}
              />
            </a>
          </div>
          <div className="category-intro-text">
            <div>
              <span>{shop_intro_text}</span>
            </div>
            <div className="purchase-icon">
              {/* <a href={shop_website_url} target="_blank" rel="noreferrer"> */}
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
