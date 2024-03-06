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
              <p>アイテムの説明: {product.product_description}</p>
              <p>
                アイテムの価格:{" "}
                {product.product_price ? product.product_price : "表示無し"}
              </p>

              <CustomBtnGroup>
                <button
                  onClick={() =>
                    deleteDocument_of_a_product(shopId, product.id)
                  }
                >
                  削除
                </button>

                <button>編集</button>
              </CustomBtnGroup>
            </div>
          );
        })}
    </div>
  );
};

export default AdminProductList;
