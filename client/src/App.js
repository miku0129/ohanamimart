import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout/basic-layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Evenements from "./routes/evenements/evenements.component";
// import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="/evenements" element={<Evenements />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
