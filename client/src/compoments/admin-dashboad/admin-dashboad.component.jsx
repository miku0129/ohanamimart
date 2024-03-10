import { useEffect, useState, useContext } from "react";

import AdminHeader from "../../compoments/admin-header/admin-header.component";
// import AdminProductRegister from "../../compoments/admin-product-register/admin-product-register.component";
// import AdminProductList from "../../compoments/admin-product-list/admin-product-list.component";
import { CategoriesContext } from "../../context/categories.context";
import { CustomContentContainer } from "../../component-utils/component-utils.styles";

import { AdminStatusContext } from "../../context/admin-status.context";

const AdminDashboad = ({ props }) => {
  const { setAdmin, admin } = props;

  const adminState = useContext(AdminStatusContext)
  console.log(adminState)

  // const emailOfAdmin = admin.email;
  // console.log("admin", admin);

  // const categories = useContext(CategoriesContext);

  // const [userEmail, setUserEmail] = useState("");
  // const [shopId, setShopId] = useState(null);
  // const [shopName, setShopName] = useState("");
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setUserEmail(emailOfAdmin);
  // }, [emailOfAdmin]);
  // useEffect(() => {
  //   const shop = categories.filter(
  //     (category) => category.shop_email === userEmail
  //   )[0];
  //   if (shop) {
  //     setShopId(shop.id);
  //     setShopName(shop.shop_name);
  //     setProducts(shop.products);
  //   }
  // }, [categories, userEmail]);

  return (
    <CustomContentContainer>
      <AdminHeader
        props={{
          setAdmin: setAdmin,
          // shopName: shopName,
          //   setUserEmail: setUserEmail,
          //   userEmail: userEmail,
          //   setShopName: setShopName,
          //   setProducts: setProducts,
          //   setShopId: setShopId,
        }}
      />
      {/* <AdminProductRegister shopId={shopId} />
      <AdminProductList
        props={{
          products: products,
          shopId: shopId,
        }}
      /> */}
    </CustomContentContainer>
  );
};

export default AdminDashboad;
