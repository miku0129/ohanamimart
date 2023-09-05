import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../compoments/product-card/product-card.component";

import { selectCategories } from "../../store/categories/category.selector";

import {
  CategoryContainer,
  CategoryHeadline,
  CategorySubtitle,
  CategoryIntro,
  CategorySubContainer,
} from "./category.styles";
import {
  CustomUserIcon,
  DefaultUserIcon,
  StyledPurchaseLogo,
  StyledHomeLogo,
  PreviewLogosInALine,
} from "../../component-utils/component-utils.styles";

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
            <h1>{shop_name && <span className="title">{shop_name} </span>}</h1>
          </div>
        </div>
        <CategorySubtitle>
          {shop_icon_url && <CustomUserIcon imageurl={shop_icon_url} />}
          {!shop_icon_url && <DefaultUserIcon />}
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
            <PreviewLogosInALine>
              {shop_website_url ? (
                <a href={shop_website_url} target="_blank" rel="noreferrer">
                  <StyledHomeLogo />
                </a>
              ) : null}

              {shop_purchase_website_url ? (
                <a
                  href={shop_purchase_website_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledPurchaseLogo />
                </a>
              ) : null}
            </PreviewLogosInALine>
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
