import "./exhibitor-card.styles.scss";

const ExhibitorCard = (exhibitor) => {
  const { store_name, store_image_url, store_website_url, store_headline } = exhibitor["exhibitor"];
  return (
    <a href={store_website_url} target="_blank" rel="noreferrer">
      <div className="exhibitor">
        <div>
          <img src={store_image_url} alt="artist" />
        </div>
        <div className="exhibitor-details">
          <h3>{store_name}</h3>
          <span>{store_headline}</span>
        </div>
      </div>
    </a>
  );
};

export default ExhibitorCard;
