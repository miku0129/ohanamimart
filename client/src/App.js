import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout/basic-layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Exhibitions from "./routes/exhibitions/exhibitions.component";
// import SignIn from "./routes/sign-in/sign-in.component";
import ScrollToTop from "./component-utils/scroll-to-top";
import LoadingResource from "./component-utils/loading-resource";

// import { useEffect } from "react";
// import { initializeCategoryData } from "./utils/firebase/firebase.utils";

const App = () => {
  // useEffect(() => {
  //   const initCategoryData = async () => {
  //     await initializeCategoryData();
  //   };
  //   initCategoryData();
  // }, []);

  return (
    <>
      <LoadingResource />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="/exhibitions/*" element={<Exhibitions />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
