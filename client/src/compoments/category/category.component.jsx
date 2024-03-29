import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../compoments/product-card/product-card.component";

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
  StyledUserLogo,
  PreviewLogosInALine,
} from "../../component-utils/component-utils.styles";

const Category = () => {
  const { category } = useParams();
  const categories = useContext(CategoriesContext)
  console.log("categories", categories)
  const shop = categories.filter((shop) => {
    return shop.shop_name_lowercase_no_spaces_for_url === category;
  })[0];

  const {
    shop_name,
    shop_website_url,
    shop_intro_text,
    shop_purchase_website_url,
    shop_icon_url,
    products,
  } = shop;

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
              <div id="creator_description">{shop_intro_text}</div>
            </div>
            <PreviewLogosInALine>
              {shop_website_url ? (
                <a href={shop_website_url} target="_blank" rel="noreferrer">
                  <StyledUserLogo />
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
