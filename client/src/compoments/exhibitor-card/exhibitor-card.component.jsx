import "./exhibitor-card.styles.scss";

const ExhibitorCard = (exhibitor) => {
  const { title, imageUrl, websiteUrl, headline } = exhibitor["exhibitor"];
  return (
    <a href={websiteUrl} target="_blank" rel="noreferrer">
      <div className="exhibitor">
        <img src={imageUrl} alt="artist" />
        <div className="exhibitor-details">
          <span>{headline}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default ExhibitorCard;
