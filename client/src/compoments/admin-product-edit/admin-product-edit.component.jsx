import { useState, useEffect, useContext } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import AdminProductForm from "../admin-product-form/admin-product-form.component";

import { CategoriesContext } from "../../context/categories.context";
import { get_product_by_id } from "../../utils/data/data.utils";
import { formTypes } from "../../types/types";
import { CustomContentContainer } from "../../component-utils/component-utils.styles";
import Button from 'react-bootstrap/Button';

const AdminProductEdit = () => {
  const [selectedProdName, setSelectedProdName] = useState("");
  const [selectedProdPrice, setSelectedProdPrice] = useState(0);
  const [selectedProdDescription, setSelectedProdDescription] = useState("");
  const [selectedProdImages, setSelectedProdImages] = useState([]);

  const { product_id } = useParams();

  const location = useLocation();
  const state = location.state;

  const navigate = useNavigate();

  const categories = useContext(CategoriesContext);

  useEffect(() => {
    if (state !== null) {
      const selectedProd = get_product_by_id(
        categories,
        state.shopId,
        product_id
      );
      setSelectedProdName(selectedProd.product_name);
      setSelectedProdPrice(selectedProd.product_price);
      setSelectedProdDescription(selectedProd.product_description);
      // setIsSelectedProdMainVisual(selectedProd.is_product_image_used_in_main_visual)
      setSelectedProdImages(selectedProd.product_images);
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
    // is_product_image_used_in_main_visual: isSelectedProdMainVisual,
    // is_book: false,
    product_images: selectedProdImages,
  };

  console.log(selectedProdImages);

  return (
    <CustomContentContainer>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        戻る
      </Button>
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
    </CustomContentContainer>
  );
};

export default AdminProductEdit;
