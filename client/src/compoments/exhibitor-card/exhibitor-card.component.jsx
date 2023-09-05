import { Exhibitor, ExhibitorDetails } from "./exhibitor-card.styles";
import {
  CustomUserIcon,
  StyledHomeLogo,
  IconwithLogoAtTheLeftBottom,
} from "../../component-utils/component-utils.styles";

const ExhibitorCard = (exhibitor) => {
  const { shop_name, shop_icon_url, shop_website_url, shop_headline } =
    exhibitor["exhibitor"];
  return (
    <Exhibitor>
      <IconwithLogoAtTheLeftBottom>
        <CustomUserIcon imageurl={shop_icon_url} />
        <div className="innerContainer">
          <a href={shop_website_url} target="_blank" rel="noreferrer">
            <StyledHomeLogo />
          </a>
        </div>
      </IconwithLogoAtTheLeftBottom>
      <ExhibitorDetails>
        <h3>{shop_name} </h3>
        <span>{shop_headline}</span>
      </ExhibitorDetails>
      {/* </a> */}
    </Exhibitor>
  );
};

export default ExhibitorCard;
