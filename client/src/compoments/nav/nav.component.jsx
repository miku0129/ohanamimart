import { Fragment } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Shoplogo } from "../../assets/cherry-blossom-9-svgrepo-com.svg";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="navigation-left">
          <Link className="logo-container" to="/">
            <Shoplogo className="Shoplogo" style={{ height: 60, width: 60 }} />
          </Link>
          <div className="catchcopy">
            <div>
              <span>Unis par la créativité</span>
            </div>
          </div>
        </div>
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
    </Fragment>
  );
};

export default Nav;
