import { Link } from "react-router-dom";

import { ReactComponent as Foward } from "../../assets/chevrons-right-arrows-svgrepo-com.svg";

import { BottomLine } from "../utility/utility.styles";
import "./exhibition-card.styles.scss";

const ExhibitionCard = ({ exhibition }) => {
  const {
    id,
    exhibition_title,
    start_date,
    end_date,
    address,
    main_image_url,
    about_exhibition,
    exhibition_url,
  } = exhibition;

  const date =
    start_date !== end_date ? `${start_date} ~ ${end_date}` : start_date;

  const src = main_image_url
    ? main_image_url
    : "https://i.ibb.co/cwDwg3X/IMG-9828-3.jpg";

  const url = exhibition_url ? (
    <a href={exhibition_url}>
      <p className="blog-description url">{exhibition_url}</p>
    </a>
  ) : (
    ""
  );

  return (
    <div>
      <div className="blog-card">
        <div className="blog-contents-container">
          <Link to={`/exhibitions/${id}`}>
            <div className="blog-title-container">
              <div className="blog-title-subcontainer">
                <p className="blog-title">{exhibition_title}</p>
              </div>
              <div className="blog-title-subcontainer">
                <Foward style={{ height: 30, width: 30 }} />
              </div>
            </div>
          </Link>
          <p className="blog-description date">{date}</p>
          <div className="blog-contents-container">
            <img src={src} alt={exhibition_title} />
            <div className="blog-contents-subcontainer">
              <p className="blog-description about">{about_exhibition}</p>
              <p className="blog-description">{address}</p>
              {url}
            </div>
          </div>
        </div>
      </div>
      <BottomLine />
    </div>
  );
};

export default ExhibitionCard;
