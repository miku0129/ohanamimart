import { useState } from "react";
import { addDocument_of_a_product } from "../../utils/firebase/firebase.utils";

const initFormData = {
  product_name: "",
  product_description: "",
  product_price: null,
  shop_id: null,
  is_product_image_used_in_main_visual: false,
  is_book: false,
  product_images: [],
};

const AdminProductRegisterForm = ({ shopId }) => {
  const [formData, setFormData] = useState(initFormData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      product_name: formData.product_name,
      product_description: formData.product_description,
      product_price: Number(formData.product_price),
      shop_id: shopId,
      is_product_image_used_in_main_visual: false,
      is_book: false,
      product_images: [],
    };

    console.log("??", newProduct)

    await addDocument_of_a_product(shopId, newProduct);
    setFormData(initFormData);
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product_name">アイテムの名前:</label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          value={formData.product_name}
          onChange={handleChange}
        />

        <label htmlFor="product_description">アイテムの説明:</label>
        <textarea
          type="text"
          id="product_description"
          name="product_description"
          value={formData.product_description}
          onChange={handleChange}
        />

        <label htmlFor="product_price">アイテムの価格(euro):</label>
        <input
          type="text"
          id="product_price"
          name="product_price"
          value={formData.product_price}
          onChange={handleChange}
        />

        <button type="submit">アイテムを追加する</button>
      </form>{" "}
    </div>
  );
};

export default AdminProductRegisterForm;
