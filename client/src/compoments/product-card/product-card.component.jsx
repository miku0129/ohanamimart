import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../store/categories/category.selector";

import { SpanLink } from "../../component-utils/component-utils.styles";
import { get_shop_by_id } from "../../utils/data/data.utils";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { id, product_name, product_price, shop_id, product_images } = product;

  const name_of_product =
    product_name.length < 20 ? product_name : product_name.slice(0, 20) + "...";

  const categories = useSelector(selectCategories);
  const shop = get_shop_by_id(categories, shop_id)

  return (
    <div className="product-card-container">
      {product_images.length > 0 ? (
        <img
          className="product-image"
          src={
            product_images.filter((img) => {
              return img.is_main_product_image;
            })[0].product_image_url
          }
          alt={`${product_name}`}
        />
      ) : (
        <div>no image</div> // Need to arrange default image
      )}

      <div className="product-card-footer">
        <div className="product-card-footer-left">
          <Link
            to={`/shop/${shop.shop_name_lowercase_no_spaces_for_url}/${id}`}
          >
            <SpanLink className="name_of_product">{name_of_product}</SpanLink>
          </Link>
          <Link to={`/shop/${shop.shop_name_lowercase_no_spaces_for_url}`}>
            <SpanLink>{shop.shop_name}</SpanLink>
          </Link>
        </div>
        {product_price && <span className="price">{product_price}&euro;</span>}
      </div>
    </div>
  );
};

export default ProductCard;
