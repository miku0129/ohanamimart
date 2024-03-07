import { Link } from "react-router-dom";
import { deleteDocument_of_a_product } from "../../utils/firebase/firebase.utils";
import { CustomBtnGroup } from "../../component-utils/component-utils.styles";
import "./admin-product-list.styles.scss";

const AdminProductList = ({ props }) => {
  const { products, shopId } = props;
  return (
    <div className="admin-product-list-container">
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} className="admin-product-list-card">
              <p>アイテムの名前: {product.product_name}</p>
              <p>
                アイテムの価格:{" "}
                {product.product_price ? product.product_price : "表示無し"}
              </p>
              <p>アイテムの写真: {product.product_images.map(img => {
                return (
                  <div>
                    <a href={img.product_image_url} target="blank">{img.product_image_url}</a>

                  </div>
                )
              })}</p>
              <CustomBtnGroup>
                <button
                  onClick={() =>
                    deleteDocument_of_a_product(shopId, product.id)
                  }
                >
                  削除
                </button>

                <Link
                  to={`product/edit/${product.id}`}
                  state={{ shopId: shopId }}
                >
                  <button>編集</button>
                </Link>
              </CustomBtnGroup>
            </div>
          );
        })}
    </div>
  );
};

export default AdminProductList;
