import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import BasicLayout from "./routes/basic-layout/basic-layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Exhibitions from "./routes/exhibitions/exhibitions.component";
// import SignIn from "./routes/sign-in/sign-in.component";
import ScrollToTop from "./component-utils/scroll-to-top";
import LoadingResource from "./component-utils/loading-resource";

import { dbtest } from "./utils/firebase/firebase.addinitialdata";

const App = () => {
  const [initialData, setInitialData] = useState([])
  useEffect(() => {
    const test = async () => {
      await dbtest();
    };
    test();
  }, []);

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
