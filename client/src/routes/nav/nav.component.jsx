import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";

import { ReactComponent as Shoplogo } from "../../assets/cherry-blossom-9-svgrepo-com.svg";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shoplogo className="Shoplogo" style={{ height: 60, width: 60 }} />
        </Link>
        <div className="nav-links-container">
          {/* <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link> */}
          <Link className="nav-link" to="/shop">
            <div className="shopTitle">Hanami</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
