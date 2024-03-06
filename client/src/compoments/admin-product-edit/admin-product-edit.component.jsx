import { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";

const AdminProductEdit = () => {
  const { product_id } = useParams();
  const location = useLocation();
  const state = location.state;

  const categories = useContext(CategoriesContext);

  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState(null);
  const [selectedProductDiscription, setSelectedProductDiscription] =
    useState("");

  useEffect(() => {
    if (state !== null) {
      const selectedProduct = categories
        .filter((category) => category.id === state.shopId)[0]
        .products.filter((product) => String(product.id) === product_id)[0];
      setSelectedProductName(selectedProduct.product_name);
      setSelectedProductPrice(selectedProduct.product_price);
      setSelectedProductDiscription(selectedProductDiscription);
    }
  }, [
    categories,
    state,
    product_id,
    selectedProductName,
    selectedProductPrice,
    selectedProductDiscription,
  ]);

  
  return (
    <div>
      <p>{selectedProductName}</p>
    </div>
  )
};

export default AdminProductEdit;
