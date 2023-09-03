import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import { BottomLine, ProductsPreview } from "../utility/utility.styles";

import "./category-preview.style.scss";

const CategoryPreview = ({ shop_name_lowercase_no_spaces_for_url, shop_name, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${shop_name_lowercase_no_spaces_for_url}`}>
          <span className="title">{shop_name}</span>
        </Link>
      </h2>
      <ProductsPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {

            return <ProductCard key={product.id} product={product} />
          }
          )}
      </ProductsPreview>
      <BottomLine />
    </div>
  );
};

export default CategoryPreview;
