import { Fragment } from "react";
import { ReactComponent as TeamLogo } from "../../assets/cherry-blossom-9-svgrepo-com.svg";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  const footerText = "Hanami";
  return (
    <Fragment>
      <div className="footer">
        <FooterContainer>
          <div className="footer-subcontainer">
            <TeamLogo style={{ width: "30px", height: "30px" }} />
            <div className="footer-text">
              <span>&copy;{footerText}</span>
            </div>
          </div>
        </FooterContainer>
      </div>
    </Fragment>
  );
};

export default Footer;
