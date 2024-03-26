import { useEffect, useState, useContext } from "react";

import AdminHeader from "../../compoments/admin-header/admin-header.component";
import AdminProductRegister from "../../compoments/admin-product-register/admin-product-register.component";
import AdminProductList from "../../compoments/admin-product-list/admin-product-list.component";
import { CategoriesContext } from "../../context/categories.context";
import { CustomContentContainer } from "../../component-utils/component-utils.styles";

const AdminDashboad = ({ props }) => {
  const { setAdmin, admin } = props;

  const emailOfAdmin = admin.email;

  const categories = useContext(CategoriesContext);

  const [shopId, setShopId] = useState(null);
  const [shopName, setShopName] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const shop = categories.filter(
      (category) => category.shop_email === emailOfAdmin
    )[0];
    if (shop) {
      setShopId(shop.id);
      setShopName(shop.shop_name);
      setProducts(shop.products);
    }
  }, [categories, emailOfAdmin]);

  return (
    <CustomContentContainer>
      <AdminHeader
        props={{
          setAdmin: setAdmin,
          shopName: shopName,
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
