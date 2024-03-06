import { useState } from "react";

import AdminHeader from "../../compoments/admin-header.component/admin-header.component";
import AdminProductRegisterForm from "../../compoments/admin-product-register-form/admin-product-register-form.component";
import AdminProductList from "../../compoments/admin-product-list/admin-product-list.component"

const AdminDashboad = () => {
  const [userEmail, setUserEmail] = useState("");
  const [shopId, setShopId] = useState(null);
  const [shopName, setShopName] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <div>
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
      <AdminProductRegisterForm shopId={shopId} />
      <AdminProductList
        props={{
          products: products,
          setShopId: setShopId,
        }}
      />
    </div>
  );
};

export default AdminDashboad;
