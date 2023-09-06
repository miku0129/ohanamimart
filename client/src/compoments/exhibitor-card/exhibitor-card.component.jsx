import { Link } from "react-router-dom";

import { Exhibitor, ExhibitorDetails } from "./exhibitor-card.styles";
import {
  CustomUserIcon,
  IconwithLogoAtTheLeftBottom,
  ParagraphLink,
} from "../../component-utils/component-utils.styles";

const ExhibitorCard = (exhibitor) => {
  const {
    shop_name,
    shop_icon_url,
    shop_name_lowercase_no_spaces_for_url,
    shop_headline,
  } = exhibitor["exhibitor"];
  return (
    <Exhibitor>
      <IconwithLogoAtTheLeftBottom>
        <CustomUserIcon imageurl={shop_icon_url} />
      </IconwithLogoAtTheLeftBottom>
      <ExhibitorDetails>
        <h3>
          <Link to={`/shop/${shop_name_lowercase_no_spaces_for_url}`}>
            <ParagraphLink>{shop_name}</ParagraphLink>
          </Link>
        </h3>
        <span>{shop_headline}</span>
      </ExhibitorDetails>
    </Exhibitor>
  );
};

export default ExhibitorCard;
