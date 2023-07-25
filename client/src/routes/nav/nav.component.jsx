import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";

import { ReactComponent as Shoplogo } from "../../assets/origami-crane-svgrepo-com.svg";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shoplogo className="Shoplogo" style={{ height: 80, width: 80 }} />
        </Link>
        <div className="nav-links-container">
          {/* <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link> */}
          <Link className="nav-link" to="/shop">
            <div className="shopTitle">Les artisans</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
