// import { useEffect } from "react";
// import { initializeCategoryData_2 } from "./utils/firebase/firebase.utils";
// import { initializeCategoryData } from "./utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout/basic-layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
// import Exhibitions from "./routes/exhibitions/exhibitions.component";

import ScrollToTop from "./component-utils/scroll-to-top";
// import LoadingResource from "./component-utils/loading-resource";

import AdminSignin from "./compoments/admin-signin/admin-signin.component";
import AdminDashboad from "./compoments/admin-dashboad/admin-dashboad.component";


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
      {/* <LoadingResource /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BasicLayout />}>

          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          {/* <Route path="/exhibitions/*" element={<Exhibitions />} /> */}

          <Route path="admin/*" element={<AdminSignin />} />
          <Route path="admin/dashboad" element={<AdminDashboad />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
