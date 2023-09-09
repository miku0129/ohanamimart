import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../store/categories/category.selector";

import { SpanLink } from "../../component-utils/component-utils.styles";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  console.log("product", product);
  const { id, product_name, product_price, shop_id, product_image, shop_of_the_product } = product;
  // const { product_image_url } = product.product_image;
  const name_of_product =
    product_name.length < 20 ? product_name : product_name.slice(0, 20) + "...";
  // const shops = useSelector(selectCategories);
  // const shop = shops.filter((shop) => shop.id === shop_id)[0];

  return (
    <div className="product-card-container">
      {/* {shop && ( */}
        <img
          className="product-image"
          src={product_image.product_image_url}
          alt={`${product_name}`}
        />
      {/* )} */}

      <div className="product-card-footer">
        <div className="product-card-footer-left">
          {/* {shop && ( */}
            <Link
              to={`/shop/${shop_of_the_product.shop_name_lowercase_no_spaces_for_url}/${id}`}
            >
              <SpanLink className="name_of_product">{name_of_product}</SpanLink>
            </Link>
          {/* )} */}
          {/* {shop && ( */}
            <Link to={`/shop/${shop_of_the_product.shop_name_lowercase_no_spaces_for_url}`}>
              <SpanLink>{shop_of_the_product.shop_name}</SpanLink>
            </Link>
          {/* )} */}
        </div>
        {product_price && <span className="price">{product_price}&euro;</span>}
      </div>
    </div>
  );
};

export default ProductCard;
