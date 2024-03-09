import { Link } from "react-router-dom";
import { deleteDocument_of_a_product } from "../../utils/firebase/firebase.utils";
import { CustomBtnGroup } from "../../component-utils/component-utils.styles";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./admin-product-list.styles.scss";

const AdminProductList = ({ props }) => {
  const { products, shopId } = props;
  return (
    <div>
      <hr />
      <Row xs={1} md={3} className="g-4 admin-product-list-row">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {products &&
          products
            .filter((product) => {
              //当座は編集できるアイテムは本以外かつHomeトップに画像が表示されていないもののみとする
              return (
                !product.is_book &&
                !product.is_product_image_used_in_main_visual
              );
            })
            .map((product) => {
              return (
                <Col key={product.id}>
                  <Card className="admin-product-card">
                    <Card.Body>
                      <Card.Title>{product.product_name}</Card.Title>
                      <Card.Text>
                        アイテムの説明:{product.product_description}
                      </Card.Text>
                      <Card.Text>
                        アイテムの価格(euro):
                        {product.product_price
                          ? product.product_price
                          : "表示無し"}
                      </Card.Text>
                      <Card.Text>
                        {product.product_images.map((img) => {
                          return (
                            <img
                              class="admin-product-list-img"
                              src={img.product_image_url}
                              alt={`Id:${img.id}`}
                            />
                          );
                        })}
                      </Card.Text>
                      <CustomBtnGroup>
                        <Button
                          variant="outline-danger"
                          onClick={() =>
                            deleteDocument_of_a_product(shopId, product.id)
                          }
                        >
                          削除
                        </Button>
                        <Link
                          to={`product/edit/${product.id}`}
                          state={{ shopId: shopId }}
                        >
                          <Button variant="secondary">編集</Button>
                        </Link>
                      </CustomBtnGroup>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
      </Row>
    </div>
  );
};

export default AdminProductList;
