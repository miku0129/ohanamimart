import { useState } from "react";

import AdminHeader from "../../compoments/admin-header/admin-header.component";
import AdminProductRegister from "../../compoments/admin-product-register/admin-product-register.component";
import AdminProductList from "../../compoments/admin-product-list/admin-product-list.component";

import { CustomContentContainer } from "../../component-utils/component-utils.styles";

const AdminDashboad = () => {
  const [userEmail, setUserEmail] = useState("");
  const [shopId, setShopId] = useState(null);
  const [shopName, setShopName] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <CustomContentContainer>
      <AdminHeader
        props={{
          setUserEmail: setUserEmail,
          userEmail: userEmail,
          setShopName: setShopName,
          shopName: shopName,
          setProducts: setProducts,
          setShopId: setShopId,
        }}
      />
      <AdminProductRegister shopId={shopId} />
      <AdminProductList
        props={{
          products: products,
          shopId: shopId,
        }}
      />
    </CustomContentContainer>
  );
};

export default AdminDashboad;
