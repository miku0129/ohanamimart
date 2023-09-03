import "./exhibition-card.styles.scss";

const ExhibitionCard = ({ exhibition }) => {
  const { exhibition_title, date, time, address, main_image_url } = exhibition;

  const src = main_image_url
    ? main_image_url
    : "https://i.ibb.co/cwDwg3X/IMG-9828-3.jpg";

  return (
    <div>
      <div className="blog-card">
        <div className="blog-contents-container">
          <p className="blog-title">{exhibition_title}</p>
          <img src={src} alt={exhibition_title} />
          <p className="blog-description">
            {date} | {time}
          </p>
          <p className="blog-description">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
