import { Exhibitor, ExhibitorDetails } from "./exhibitor-card.styles";

const ExhibitorCard = (exhibitor) => {
  const { shop_name, shop_icon_url, shop_website_url, shop_headline } = exhibitor["exhibitor"];
  return (
    <a href={shop_website_url} target="_blank" rel="noreferrer">
      <Exhibitor imageurl={shop_icon_url}>
        <div className="image_circle"></div>
        <ExhibitorDetails>
          <h3>{shop_name}</h3>
          <span>{shop_headline}</span>
        </ExhibitorDetails>
      </Exhibitor>
    </a>
  );
};

export default ExhibitorCard;
