import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Nav from "../../compoments/nav/nav.component";
import Footer from "../../compoments/footer/footer.component";

import { NavAndFooterLayout } from "./basic-layout.styles";

const BasicLayout = () => {
  return (
    <Fragment>
      <NavAndFooterLayout>
        <Nav />
        <Outlet />
        <Footer />
      </NavAndFooterLayout>
    </Fragment>
  );
};

export default BasicLayout;
