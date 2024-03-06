import { deleteDocument_of_a_product } from "../../utils/firebase/firebase.utils";

const AdminProductSetting = ({ props }) => {
  const { products, shopId } = props;
  return (
    <div>
      <div>
        <div>
          {products &&
            products.map((product) => {
              return (
                <div>
                  <p key={product.product_name}>{product.product_name}</p>
                  <button
                    onClick={() =>
                      deleteDocument_of_a_product(shopId, product.id)
                    }
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminProductSetting;
