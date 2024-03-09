import { useEffect, useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";
import { auth, signOutUser } from "../../utils/firebase/firebase.utils";
import { CustomBtnGroup } from "../../component-utils/component-utils.styles";
// import Button from 'react-bootstrap/Button';
import "./admin-header.styles.scss";

const AdminHeader = ({ props }) => {
  const {
    setUser,
    //   setUserEmail,
    //   userEmail,
    //   setShopName,
    //   shopName,
    //   setProducts,
    //   setShopId,
  } = props;

  const categories = useContext(CategoriesContext);

  // useEffect(() => {
  //   hanko.user
  //     .getCurrent()
  //     .then(({ email }) => {
  //       setUserEmail(email);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [hanko, setUserEmail]);

  // useEffect(() => {
  //   if (userEmail) {
  //     const shopInfo = categories.filter((shop) => {
  //       return shop.shop_email === userEmail;
  //     })[0];
  //     if (shopInfo) {
  //       setShopName(shopInfo.shop_name);
  //       setProducts(shopInfo.products);
  //       setShopId(shopInfo.id);
  //     }
  //   }
  // }, [userEmail, setShopId, setShopName, setProducts, categories]);

  const signOut = async () => {
    await signOutUser();
    setUser(auth.currentUser);
  };

  return (
    <div>
      <CustomBtnGroup>
        {/* <h3>Hello, {shopName}</h3> */}
        <div className="hankoLogoutBtn-style">
          <button onClick={signOut}>Sign out</button>
        </div>
      </CustomBtnGroup>
    </div>
  );
};

export default AdminHeader;
