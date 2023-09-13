import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
import { get_product_by_id } from "../../utils/data/data.utils";
import Slick from "../slick/slick.component";
import {
  CustomUserIcon,
  ParagraphLink,
  BottomLine,
} from "../../component-utils/component-utils.styles";

import "./product-detail.styles.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const handleSetProduct = async () => {
      const prod = await get_product_by_id(product_id);
      setProduct(prod);
    };
    handleSetProduct();
  }, []);

  const categories = useSelector(selectCategories);
  const { product_id } = useParams();
  const shop = categories.filter(
    (category) => category.id === product.shop_id
  )[0];

  return (
    <div className="product-detail-container">
      <div className="product-detail-sub-container-upper">
        <div className="product-detail-sub-right">
          {product.product_images && <Slick images={product.product_images} isPrimary="primary" />}
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

          {/* <div className="tab-001">
            <label>
              <input type="radio" name="tab-001" checked />
              Description
            </label>
            <div className="description-text">
              {product.product_description}
            </div>
            <label>
              <input type="radio" name="tab-001" />
              Paiement et expédition
            </label>
            <div className="description-text">En préparation</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
