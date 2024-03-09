import AdminProductForm from "../admin-product-form/admin-product-form.component";
import { formTypes } from "../../types/types";

import "./admin-product-register.styles.scss";

const initFormState = {
  product_name: "",
  product_description: "",
  product_price: undefined,
  is_product_image_used_in_main_visual: false,
  is_book: false,
  product_images: [],
};

const AdminProductRegister = ({ shopId }) => {
  return (
    <div>
      <AdminProductForm
        props={{
          formType: formTypes["REGISTER"],
          shopId: shopId,
          initFormState: initFormState,
        }}
      />
    </div>
  );
};

export default AdminProductRegister;
