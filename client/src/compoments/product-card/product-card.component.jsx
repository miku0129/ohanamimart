import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../store/categories/category.selector";

import { SpanLink } from "../../component-utils/component-utils.styles";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { id, product_name, product_price, product_image_url, shop_id } =
    product;

  const name_of_product =
    product_name.length < 20 ? product_name : product_name.slice(0, 20) + "...";

  const shops = useSelector(selectCategories);
  const shop = shops.filter((shop) => shop.id === shop_id)[0];

  return (
    <div className="product-card-container">
      {shop && (
        <img
          className="product-image"
          src={product_image_url}
          alt={`${product_name}`}
        />
      )}

      <div className="product-card-footer">
        <div className="product-card-footer-left">
          {shop && (
            <Link
              to={`/shop/${shop.shop_name_lowercase_no_spaces_for_url}/${id}`}
            >
              <SpanLink className="name_of_product">{name_of_product}</SpanLink>
            </Link>
          )}
          {shop && (
            <Link to={`/shop/${shop.shop_name_lowercase_no_spaces_for_url}`}>
              <SpanLink>{shop.shop_name}</SpanLink>
            </Link>
          )}
        </div>
        {product_price && <span className="price">{product_price}&euro;</span>}
      </div>
    </div>
  );
};

export default ProductCard;
