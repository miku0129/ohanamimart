import "./exhibitor-card.styles.scss";

const ExhibitorCard = (exhibitor) => {
  const { title, imageUrl, websiteUrl, headline } = exhibitor["exhibitor"];
  return (
    <a href={websiteUrl} target="_blank" rel="noreferrer">
      <div className="exhibitor">
        <div>
          <img src={imageUrl} alt="artist" />
        </div>
        <div className="exhibitor-details">
          <h3>{title}</h3>
          <span>{headline}</span>
        </div>
      </div>
    </a>
  );
};

export default ExhibitorCard;
