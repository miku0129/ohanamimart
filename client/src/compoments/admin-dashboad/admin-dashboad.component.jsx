import { useState, useEffect, useMemo } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

import HankoProfile from "../../hanko/hanko-profile/hanko-profile.component"
import HankoLogoutBtn from "../../hanko/hanko-logout-button/hanko-logout-button.component"

import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../store/categories/category.selector";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const AdminDashboad = () => {
  const [userEmail, setUserEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [products, setProducts] = useState([]);

  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const categories = useSelector(selectCategories);

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
      const shop = categories.filter((shop) => {
        return shop.shop_email === userEmail;
      })[0];
      setShopName(shop.shop_name);
      setProducts(shop.products)
    }
  }, [userEmail, categories]);

  console.log(products)

  return (
    <div>
      <p>Hello {shopName}</p>

      <div>
        {products && products.map(product => {
            return (
                <div>
                    <p key={product.product_name}>{product.product_name}</p>
                </div>
            )
        })}
      </div>

      <HankoLogoutBtn />
      <hr />
      <HankoProfile />
    </div>
  );
};

export default AdminDashboad;
