import { useState } from "react";
import {
  addDocument_of_a_product,
  updateDocument_of_a_product,
} from "../../utils/firebase/firebase.utils";
import { formTypes } from "../../types/types";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CustomContentContainer } from "../../component-utils/component-utils.styles";
import "./admin-product-form.styles.scss"

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
      shop_id: shopId,
      is_product_image_used_in_main_visual: false,
      is_book: false,
    };
    const image = {
      product_image_url: formData.product_images,
    };

    if (formType === formTypes["REGISTER"]) {
      await addDocument_of_a_product(shopId, product, image);
      setFormData(initFormState);
      window.location.reload();
    } else if (formType === formTypes["UPDATE"]) {
      await updateDocument_of_a_product(shopId, product, product_id, image);
      window.location = "http://localhost:3000/admin/dashboad/";
    }
  };

  return (
    <CustomContentContainer className="admin-product-form">
      <Form >
        <Row>
          <Form.Label htmlFor="product_name">アイテムの名前</Form.Label>
          <Form.Control
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
          />
          <Form.Label htmlFor="product_price">
            アイテムの価格(単位/euro)
          </Form.Label>
          <Form.Control
            type="text"
            id="product_price"
            name="product_price"
            value={formData.product_price}
            onChange={handleChange}
          />
          <Form.Label htmlFor="product_description">アイテムの説明</Form.Label>
          <Form.Control
            type="text"
            id="product_description"
            name="product_description"
            value={formData.product_description}
            onChange={handleChange}
          />
          {formType === formTypes["UPDATE"] && formData && (
            <div>
              <Form.Label htmlFor="product_images">アイテム写真URL</Form.Label>
              <Form.Control
                type="text"
                id="product_images"
                name="product_images"
                value={
                  formData.product_images &&
                  formData.product_images[0].product_image_url
                }
                onChange={handleChange}
              />
            </div>
          )}
          {formType === formTypes["REGISTER"] && (
            <div>
              <Form.Label htmlFor="product_images">アイテム写真URL</Form.Label>
              <Form.Control
                type="text"
                id="product_images"
                name="product_images"
                value={formData.product_images}
                onChange={handleChange}
              />
            </div>
          )}
        </Row>
        <br />
        <Button variant="success" type="submit" onClick={handleSubmit}>
          {formType === formTypes["REGISTER"]
            ? "アイテムを追加する"
            : "アイテムを更新する"}
        </Button>
      </Form>
    </CustomContentContainer>
  );
};

export default AdminProductForm;
