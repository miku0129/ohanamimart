import { Link } from "react-router-dom";
import "./exhibition-card.styles.scss";

const ExhibitionCard = ({ exhibition }) => {
  const {id, exhibition_title, start_date, end_date, start_time, end_time, address, main_image_url } = exhibition;

  const src = main_image_url
    ? main_image_url
    : "https://i.ibb.co/cwDwg3X/IMG-9828-3.jpg";

  return (
    <div>
      <Link to={`/exhibitions/${id}`}>
      <div className="blog-card">
        <div className="blog-contents-container">
          <p className="blog-title">{exhibition_title}</p>
          <img src={src} alt={exhibition_title} />
          <p className="blog-description">
            {start_date} ~ {end_date} | {start_time} ~ {end_time}
          </p>
          <p className="blog-description">{address}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ExhibitionCard;
