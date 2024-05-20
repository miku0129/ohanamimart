import { useContext } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import { get_product_by_id, get_shop_by_id } from "../../utils/data/data.utils";

import ImgGallery from "../img-gallery/img-gallery";
import Slick from "../slick/slick.component";

import {
  analytics,
  analytics_logEvent,
} from "../../utils/firebase/firebase.utils";

import {
  CustomUserIcon,
  ParagraphLink,
  BottomLine,
} from "../../component-utils/component-utils.styles";
import "./product-detail.styles.scss";

const ProductDetail = () => {
  let shop;
  let product;

  const categories = useContext(CategoriesContext);
  const { product_id } = useParams();

  const location = useLocation();
  const state = location.state;

  if (state !== null) {
    shop = get_shop_by_id(categories, state.shopId);
    if (categories.length > 0) {
      product = get_product_by_id(categories, state.shopId, product_id);
    }
  }

  const productType = product.is_book ? "book" : "common-product";

  analytics_logEvent(analytics, "view_item", {
    item_id: product_id,
    item_name: product.product_name,
  });

  const imgs = product.product_images.map(image=> image.product_image_url)

  return (
    <div className="product-detail-container">
      <div className="product-detail-sub-container-upper">
        <div className="product-detail-sub-right">
          {product && !product.is_book && (
            <Slick images={imgs} slickUsage={productType} />
          )}
          {product && product.is_book && (
            <ImgGallery
              images={product.product_images}
              slickUsage={productType}
            />
          )}
        </div>
        <div className="product-detail-sub-left">
          <CustomUserIcon
            className="shop-icon"
            imageurl={shop && shop.shop_icon_url}
          />
          <Link
            to={shop && `/shop/${shop.shop_name_lowercase_no_spaces_for_url}`}
          >
            <ParagraphLink className="shop-title">
              {shop && shop.shop_name}
            </ParagraphLink>
          </Link>
          <div className="product-title">{product.product_name}</div>
        </div>
      </div>
      <div className="product-detail-sub-container-lower">
        <BottomLine />
        <div className="description">
          <div className="description-text">{product.product_description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
