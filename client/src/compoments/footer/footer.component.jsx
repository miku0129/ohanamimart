import { Fragment } from "react";
import { ReactComponent as TeamLogo } from "../../assets/hanami-cat-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram-svgrepo-com.svg";

import { footerText, team_instagram_url } from "../../assets/page-assets";

import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <FooterContainer>
          <div className="footer-subcontainer">
            <TeamLogo style={{ width: "100px", height: "100px", margin: "auto" }} />
            <div className="footer-text">
              <span>
                &copy;{footerText} |{" "}
                <a href={team_instagram_url} target="_blank" rel="noreferrer">
                <InstagramLogo style={{ width: "20px", height: "15px", opacity: "50%" }} /></a>
              </span>
            </div>
          </div>
        </FooterContainer>
      </div>
    </Fragment>
  );
};

export default Footer;
