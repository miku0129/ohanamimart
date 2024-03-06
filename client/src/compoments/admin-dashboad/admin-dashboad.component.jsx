import { useState, useEffect, useMemo, useContext } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

import HankoProfile from "../../hanko/hanko-profile/hanko-profile.component";
import HankoLogoutBtn from "../../hanko/hanko-logout-button/hanko-logout-button.component";
import AdminProductRegisterForm from "../admin-product-register-form/admin-product-register-form.component";

import { CategoriesContext } from "../../context/categories.context";

import { deleteDocument_of_a_product } from "../../utils/firebase/firebase.utils";
import { CustomBtnGroup } from "../../component-utils/component-utils.styles";

import "./admin-dashboad.styles.scss";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const AdminDashboad = () => {
  const [userEmail, setUserEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopId, setShopId] = useState(null);
  const [products, setProducts] = useState([]);

  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const categories = useContext(CategoriesContext);

  useEffect(() => {
    hanko.user
      .getCurrent()
      .then(({ email }) => {
        setUserEmail(email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hanko]);

  useEffect(() => {
    if (userEmail) {
      const shopInfo = categories.filter((shop) => {
        return shop.shop_email === userEmail;
      })[0];
      if (shopInfo) {
        setShopName(shopInfo.shop_name);
        setProducts(shopInfo.products);
        setShopId(shopInfo.id);
      }
    }
  }, [userEmail, categories]);

  return (
    <div>
      <CustomBtnGroup>
        <p>Hello {shopName}</p>
        <div className="hankoLogoutBtn-style">
          <HankoLogoutBtn className="btn-style" />
        </div>
      </CustomBtnGroup>

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
        <br />
        <hr />
        <div>
          <AdminProductRegisterForm shopId={shopId} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboad;
