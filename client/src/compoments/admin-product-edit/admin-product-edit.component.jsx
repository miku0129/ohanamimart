import { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

import AdminProductForm from "../admin-product-form/admin-product-form.component";

import { CategoriesContext } from "../../context/categories.context";
import { get_product_by_id } from "../../utils/data/data.utils";
import { formTypes } from "../../types/types";

const AdminProductEdit = () => {
  const { product_id } = useParams();
  const location = useLocation();
  const state = location.state;

  const categories = useContext(CategoriesContext);

  const [selectedProdName, setSelectedProdName] = useState("");
  const [selectedProdPrice, setSelectedProdPrice] = useState(null);
  const [selectedProdDescription, setSelectedProdDescription] = useState("");
  const [isSelectedProdMainVisual, setIsSelectedProdMainVisual] =
    useState(false);
  const [selectedProdImages, setSelectedProdImages] = useState([]);

  useEffect(() => {
    if (state !== null) {
      // const selectedProd = categories
      //   .filter((category) => category.id === state.shopId)[0]
      //   .products.filter((product) => String(product.id) === product_id)[0];
      const selectedProd = get_product_by_id(categories, )
      setSelectedProdName(selectedProd.product_name);
      setSelectedProdPrice(selectedProd.product_price);
      setSelectedProdDescription(selectedProd.product_description);
    }
  }, [
    categories,
    state,
    product_id,
    selectedProdName,
    selectedProdPrice,
    selectedProdDescription,
  ]);

  const initFormState = {
    product_name: selectedProdName,
    product_description: selectedProdDescription,
    product_price: selectedProdPrice,
    // shop_id: undefined,
    is_product_image_used_in_main_visual: false,
    is_book: false,
    product_images: [],
  };

  console.log(selectedProdName);
  console.log(selectedProdPrice);
  console.log(selectedProdDescription);

  return (
    <div>
      {selectedProdName && (
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
