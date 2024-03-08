import { useMemo, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";

import { CategoriesContext } from "../../context/categories.context";

import HankoLogoutBtn from "../../hanko/hanko-logout-button/hanko-logout-button.component";

import { CustomBtnGroup } from "../../component-utils/component-utils.styles";
import Button from 'react-bootstrap/Button';
import "./admin-header.styles.scss";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const AdminHeader = ({ props }) => {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const {
    setUserEmail,
    userEmail,
    setShopName,
    shopName,
    setProducts,
    setShopId,
  } = props;

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
  }, [hanko, setUserEmail]);

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
  }, [userEmail, setShopId, setShopName, setProducts, categories]);

  return (
    <div>
      <CustomBtnGroup>
        <p>Hello, {shopName}</p>
        <div className="hankoLogoutBtn-style">
          <HankoLogoutBtn className="btn-style" />
        </div>
      </CustomBtnGroup>
      <Link to="/admin/setting">
        <Button variant="outline-secondary">設定</Button>
      </Link>
    </div>
  );
};

export default AdminHeader;
