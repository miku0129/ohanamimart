import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import { ReactComponent as Foward } from "../../assets/chevrons-right-arrows-svgrepo-com.svg";

import {
  BottomLine,
  PreviewFourItemsInALine,
  LabelWithIndicatorLink,
} from "../../component-utils/component-utils.styles";

import "./category-preview.style.scss";

const CategoryPreview = ({ category }) => {
  const { id, shop_name_lowercase_no_spaces_for_url, shop_name, products } =
    category;
  return (
    <div className="category-preview-container">
      <LabelWithIndicatorLink>
        <Link to={`/shop/${shop_name_lowercase_no_spaces_for_url}`}>
          <div className="label-with-indicator-link-inner">
            {id > 2 && <p>Créateur associé</p>}
            <p className="title fix-position">{shop_name}</p>
            <div className="fix-position">
              <Foward style={{ width: "30px", height: "30px" }} />
            </div>
          </div>
        </Link>
      </LabelWithIndicatorLink>
      <PreviewFourItemsInALine>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </PreviewFourItemsInALine>
      <BottomLine />
    </div>
  );
};

export default CategoryPreview;
