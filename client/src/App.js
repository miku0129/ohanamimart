import { useEffect } from "react";
import { initializeCategoryData_2 } from "./utils/firebase/firebase.utils";

// import { initializeCategoryData } from "./utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout/basic-layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
// import Exhibitions from "./routes/exhibitions/exhibitions.component";
// import AdminSignin from "./compoments/admin-signin/admin-signin.component";
// import AdminParamSetting from "./compoments/admin-param-setting/admin-param-setting.component";
// import AdminDashboad from "./routes/admin-dashboad/admin-dashboad.component";
import Admin from "./routes/admin/admin.component";

import ScrollToTop from "./component-utils/scroll-to-top";

const App = () => {
  // useEffect(() => {
  //   const initCategoryData = async () => {
  //     await initializeCategoryData();
  //   };
  //   initCategoryData();
  // }, []);

  // useEffect(() => {
  //   const initCategoryData = async () => {
  //     await initializeCategoryData_2();
  //   };
  //   initCategoryData();
  // }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          {/* <Route path="/exhibitions/*" element={<Exhibitions />} /> */}
          {/* <Route path="admin/*" element={<AdminSignin />} />
          <Route path="admin/dashboad" element={<AdminDashboad />} />
          <Route path="admin/param" element={<AdminParamSetting />} /> */}
          <Route path="admin/*" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
