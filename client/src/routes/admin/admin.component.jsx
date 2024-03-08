import { Routes, Route } from "react-router-dom";
import AdminSignin from "../../compoments/admin-signin/admin-signin.component";
import AdminParamSetting from "../../compoments/admin-param-setting/admin-param-setting.component";
import AdminDashboad from "../admin-dashboad/admin-dashboad.component";
import AdminProductEdit from "../../compoments/admin-product-edit/admin-product-edit.component";

const Admin = () => {
  return (
    <Routes>
      <Route index element={<AdminSignin />} />
      <Route path="setting" element={<AdminParamSetting />} />
      <Route path="dashboad/*" element={<AdminDashboad />} />
      <Route path="dashboad/product/edit/:product_id" element={<AdminProductEdit />} />
    </Routes>
  );
};

export default Admin;
