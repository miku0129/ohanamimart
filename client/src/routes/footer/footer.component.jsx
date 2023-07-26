import { Fragment } from "react";
// import { Outlet} from "react-router-dom";
import "./footer.styles.scss";


const Footer = () => {
    const footerText = 'Hanami'; 
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-container">
            <span>&copy;{footerText}</span>
        </div>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  );
};

export default Footer;
