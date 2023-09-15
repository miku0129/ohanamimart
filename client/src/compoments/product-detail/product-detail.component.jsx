import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
import { get_product_by_id, get_shop_by_id } from "../../utils/data/data.utils";

import ImgGallery from "../img-gallery/img-gallery";
import Slick from "../slick/slick.component";

import {
  CustomUserIcon,
  ParagraphLink,
  BottomLine,
} from "../../component-utils/component-utils.styles";
import "./product-detail.styles.scss";

const ProductDetail = () => {
  const categories = useSelector(selectCategories);
  const { product_id } = useParams();

  const product =
    categories.length > 0 ? get_product_by_id(categories, product_id) : {};
  const shop = get_shop_by_id(categories, product.shop_id);
  const productType = product.is_book ? "book" : "common-product";

  return (
    <div className="product-detail-container">
      <div className="product-detail-sub-container-upper">
        <div className="product-detail-sub-right">
          {!product.is_book && (
            <Slick images={product.product_images} slickUsage={productType} />
          )}
          {product.is_book && (
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
