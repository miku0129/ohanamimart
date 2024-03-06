import { useState } from "react";

import AdminHeader from "../../compoments/admin-header.component/admin-header.component";
import AdminProductRegisterForm from "../../compoments/admin-product-register-form/admin-product-register-form.component";
import AdminProductSetting from "../../compoments/admin-product-setting/admin-product-setting.component";

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
      <AdminProductSetting
        props={{
          products: products,
          setShopId: setShopId,
        }}
      />
    </div>
  );
};

export default AdminDashboad;
