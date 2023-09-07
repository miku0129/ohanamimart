import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
import { get_product_by_id } from "../../utils/data/data.utils";
import Slick from "../slick/slick.component";
import {
  CustomUserIcon,
  ParagraphLink,
} from "../../component-utils/component-utils.styles";

import "./product-detail.styles.scss";

const ProductDetail = () => {
  const categories = useSelector(selectCategories);
  const { product_id } = useParams();
  const product = get_product_by_id(product_id);
  const shop = categories.filter(
    (category) => category.id === product.shop_id
  )[0];

  return (
    <div className="product-detail-container">
      <div className="product-title">{product.product_name}</div>
      <div className="product-detail-sub-container">
        <div className="shop-datail">
          <CustomUserIcon className="shop-icon" imageurl={shop.shop_icon_url} />
          <Link to={`/shop/${shop.shop_name_lowercase_no_spaces_for_url}`}>
            <ParagraphLink className="shop-title">
              {shop.shop_name}
            </ParagraphLink>
          </Link>
        </div>
        <div className="product-detail">
          {/* <div className="product-detail-image">
            <img src={product.product_image_url} alt={product.product_name}/>
          </div> */}
          <Slick images={product.product_image_url} isPrimary={true}/>
          <div className="description">
            <div class="tab-001">
              <label>
                <input type="radio" name="tab-001" checked />
                Description
              </label>
              <div className="description-text">
                Les accessoires sont des éléments qui complètent et améliorent
                la tenue ou l'apparence d'une personne. Ils jouent un rôle
                crucial dans le style personnel et l'expression de soi. Ces
                ajouts peuvent inclure des bijoux, des écharpes, des ceintures,
                des chapeaux, des lunettes de soleil, et plus encore. Les
                accessoires permettent aux individus d'injecter de la
                personnalité dans leur tenue, transformant une tenue de base en
                quelque chose d'unique et élégant. Ils peuvent également avoir
                des fonctions pratiques, comme se tenir au chaud en hiver avec
                une écharpe douillette ou protéger les yeux du soleil avec des
                lunettes de soleil.
              </div>

              <label>
                <input type="radio" name="tab-001" />
                Paiement et expédition
              </label>
              <div className="description-text">En préparation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;