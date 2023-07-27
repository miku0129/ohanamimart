import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Nav from "../../compoments/nav/nav.component";
import Footer from "../../compoments/footer/footer.component";

const BasicLayout = () => {
  return (
    <Fragment>
      <Nav />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default BasicLayout;
