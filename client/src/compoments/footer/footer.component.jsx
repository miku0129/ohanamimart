import { Fragment } from "react";
import "./footer.styles.scss";

const Footer = () => {
  const footerText = "Hanami";
  return (
    <Fragment>
      <div className="footer">
        <hr />
        <div className="footer-container">
          <div className="footer-subcontainer">
            <span>&copy;{footerText}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
