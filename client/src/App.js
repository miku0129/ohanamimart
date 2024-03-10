// import { useEffect } from "react";
// import { initializeCategoryData_2 } from "./utils/firebase/firebase.utils";

// import { initializeCategoryData_1 } from "./utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout/basic-layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Exhibitions from "./routes/exhibitions/exhibitions.component";
import Admin from "./routes/admin/admin.component";
import AdminProductEdit from "./compoments/admin-product-edit/admin-product-edit.component";

import ScrollToTop from "./component-utils/scroll-to-top";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // useEffect(() => {
  //   const initCategoryData = async () => {
  //     await initializeCategoryData_2();
  //   };
  //   initCategoryData();
  // }, []);

  // useEffect(() => {
  //   const initCategoryData_1 = async () => {
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
          <Route path="exhibitions/*" element={<Exhibitions />} />
          <Route path="admin/*" element={<Admin />} />
          <Route
            path="admin/product/edit/:product_id"
            element={<AdminProductEdit />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
