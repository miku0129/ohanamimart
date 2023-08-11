import "./exhibitor-card.styles.scss";

const ExhibitorCard = (exhibitor) => {
  const { shop_name, shop_image_url, shop_website_url, shop_headline } = exhibitor["exhibitor"];
  return (
    <a href={shop_website_url} target="_blank" rel="noreferrer">
      <div className="exhibitor">
        <div>
          <img src={shop_image_url} alt="artist" />
        </div>
        <div className="exhibitor-details">
          <h3>{shop_name}</h3>
          <span>{shop_headline}</span>
        </div>
      </div>
    </a>
  );
};

export default ExhibitorCard;
