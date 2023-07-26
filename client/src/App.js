import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
// import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";
import BasicLayout from "./routes/basic-layout/basic-layout.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
