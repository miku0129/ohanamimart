import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../compoments/product-card/product-card.component";
import { ReactComponent as Purchaselogo } from "../../assets/gift-1-svgrepo-com.svg";
import { ReactComponent as UserLogo } from "../../assets/user-2-svgrepo-com.svg";

import { selectCategories } from "../../store/categories/category.selector";

import {
  CategoryContainer,
  CategoryHeadline,
  CategorySubtitle,
  CategoryIcon,
  CategoryIntro,
  CategorySubContainer,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState([]);
  const [shop_name, setShopName] = useState("");
  const [shop_website_url, setShopWebsiteUrl] = useState("");
  const [shop_intro_text, setIntroText] = useState("");
  const [shop_purchase_website_url, setShopPurchaseWebsiteUrl] = useState("");
  const [shop_icon_url, setShopIconUrl] = useState("");

  useEffect(() => {
    if (categories) {
      categories.forEach((shop) => {
        if (shop["shop_name_lowercase_no_spaces_for_url"] === category) {
          setShopName(shop["shop_name"]);
          setShopWebsiteUrl(shop["shop_website_url"]);
          setProducts(shop["products"]);
          setIntroText(shop["shop_intro_text"]);
          setShopPurchaseWebsiteUrl(shop["shop_purchase_website_url"]);
          setShopIconUrl(shop["shop_icon_url"]);
        }
      });
    }
  }, [categories, category]);

  return (
    <CategoryContainer>
      <CategoryHeadline>
        <div className="category-main-headline">
          <div className="category-title">
            <h1>
              {shop_name && (
                <span className="title">{shop_name} </span>
              )}
            </h1>
          </div>
        </div>
        <CategorySubtitle>
          <CategoryIcon imageurl={shop_icon_url}>
            <a href={shop_website_url} target="_blank" rel="noreferrer">
              {shop_icon_url && <div class="image_circle"></div>}
              {!shop_icon_url && (
                <UserLogo
                  className="userLogo"
                  style={{ height: 100, width: 100 }}
                />
              )}
            </a>
          </CategoryIcon>
          <CategoryIntro>
            <div>
              <div id="creator_description">
                {(() => {
                  const div = document.getElementById("creator_description");
                  const str = shop_intro_text.replace(/\r?\n/g, "<br>");
                  if (div) {
                    div.innerHTML = str;
                  }
                })()}
              </div>
            </div>
            {shop_purchase_website_url ? (
              <div className="purchase-icon">
                <a
                  href={shop_purchase_website_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Purchaselogo
                    className="purchaseLogo"
                    style={{ height: 30, width: 30 }}
                  />
                </a>
              </div>
            ) : null}
          </CategoryIntro>
        </CategorySubtitle>
      </CategoryHeadline>
      <CategorySubContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategorySubContainer>
    </CategoryContainer>
  );
};

export default Category;
