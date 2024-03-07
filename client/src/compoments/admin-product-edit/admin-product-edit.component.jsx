import { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import AdminProductForm from "../admin-product-form/admin-product-form.component";
import { formTypes } from "../../types/types";

const AdminProductEdit = () => {
  const { product_id } = useParams();
  const location = useLocation();
  const state = location.state;

  const categories = useContext(CategoriesContext);

  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState(null);
  const [selectedProductDescription, setSelectedProductDescription] =
    useState("");

  useEffect(() => {
    if (state !== null) {
      const selectedProduct = categories
        .filter((category) => category.id === state.shopId)[0]
        .products.filter((product) => String(product.id) === product_id)[0];
      setSelectedProductName(selectedProduct.product_name);
      setSelectedProductPrice(selectedProduct.product_price);
      setSelectedProductDescription(selectedProduct.product_description);
    }
  }, [
    categories,
    state,
    product_id,
    selectedProductName,
    selectedProductPrice,
    selectedProductDescription,
  ]);

  const initFormState = {
    product_name: selectedProductName,
    product_description: selectedProductDescription,
    product_price: selectedProductPrice,
    // shop_id: undefined,
    is_product_image_used_in_main_visual: false,
    is_book: false,
    product_images: [],
  };

  console.log(selectedProductName);
  console.log(selectedProductPrice);
  console.log(selectedProductDescription);

  return (
    <div>
      {selectedProductName && (
        <AdminProductForm
          props={{
            formType: formTypes["UPDATE"],
            shopId: state.shopId,
            initFormState: initFormState,
            product_id: product_id,
          }}
        />
      )}
    </div>
  );
};

export default AdminProductEdit;
