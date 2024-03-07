import { useState } from "react";
import {
  addDocument_of_a_product,
  updateDocument_of_a_product,
} from "../../utils/firebase/firebase.utils";
import { formTypes } from "../../types/types";

const AdminProductForm = ({ props }) => {
  const { formType, shopId, initFormState, product_id } = props;
  const [formData, setFormData] = useState(initFormState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const product = {
      product_name: formData.product_name,
      product_description: formData.product_description,
      product_price: Number(formData.product_price),
      // is_product_image_used_in_main_visual:
      //   formData.is_product_image_used_in_main_visual,
      product_images: formData.product_images,
    };

    if (formType === formTypes["REGISTER"]) {
      await addDocument_of_a_product(shopId, product);
      setFormData(initFormState);
    } else if (formType === formTypes["UPDATE"]) {
      await updateDocument_of_a_product(shopId, product_id, product);
      //リダイレクトさせる
    }
    // window.location.reload();
  };

  return (
    <form className="admin-product-register-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product_name">アイテムの名前:</label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          value={formData.product_name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="product_description">アイテムの説明:</label>
        <textarea
          type="text"
          id="product_description"
          name="product_description"
          value={formData.product_description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="product_price">アイテムの価格(単位/euro):</label>
        <input
          type="text"
          id="product_price"
          name="product_price"
          value={formData.product_price}
          onChange={handleChange}
        />
      </div>

      {formData &&
        formData.product_images.map((image) => {
          return (
            <div>
              <label htmlFor="product_price">アイテムイメージ:</label>
              <input
                type="text"
                id="product_price"
                name="product_price"
                value={image.product_image_url}
                onChange={handleChange}
              />
            </div>
          );
        })}

      <div>
        <button type="submit">
          {formType === formTypes["REGISTER"]
            ? "アイテムを追加する"
            : "アイテムを更新する"}
        </button>
      </div>
    </form>
  );
};

export default AdminProductForm;
