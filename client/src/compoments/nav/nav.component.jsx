import { Fragment } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Indicator } from "../../assets/chevron-down-svgrepo-com.svg";

import {
  LabelLink,
  LabelWithIndicatorLink,
} from "../../component-utils/component-utils.styles";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="navigation-left">
          <Link className="logo-container" to="/">
            <div className="logo">Hanami</div>
          </Link>
          <div className="menu-container">
            <LabelWithIndicatorLink>
              <Link to="/shop">
                <div className="label-with-indicator-inner">
                  <div className="menu-text">Boutique</div>
                  <Indicator style={{ height: 20, width: 20 }} />
                </div>
              </Link>
            </LabelWithIndicatorLink>
            <LabelLink>
              <Link to="/exhibitions">
                <span>Événements</span>
              </Link>
            </LabelLink>
          </div>
        </div>
        {/* <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
          <div>
            <span>Unis par la créativité</span>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Nav;
