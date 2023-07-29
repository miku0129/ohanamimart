import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.style.scss";

const CategoryPreview = ({ store_name_lowercase_for_url, store_name, products }) => {
  console.log("store_name_lowercase_for_url", store_name_lowercase_for_url);
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${store_name_lowercase_for_url}`}>
          <span className="title">{store_name.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
