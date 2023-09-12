import { Link } from "react-router-dom";

import { ReactComponent as Foward } from "../../assets/chevrons-right-arrows-svgrepo-com.svg";

import {
  BottomLine,
  LabelWithIndicatorLink,
  DefaultPicture,
  ParagraphLink,
} from "../../component-utils/component-utils.styles";
import "./exhibition-card.styles.scss";

const ExhibitionCard = ({ exhibition }) => {
  const {
    id,
    exhibition_title,
    start_date,
    end_date,
    address,
    exhibition_image_url,
    about_exhibition,
    exhibition_url,
  } = exhibition;

  const date =
    start_date !== end_date ? `${start_date} ~ ${end_date}` : start_date;

  const image = exhibition_image_url ? (
    <img src={exhibition_image_url} alt={exhibition_title} />
  ) : (
    <DefaultPicture />
  );

  const url = exhibition_url ? (
    <a href={exhibition_url}>
      <ParagraphLink className="blog-description">
        {exhibition_url}
      </ParagraphLink>
    </a>
  ) : (
    ""
  );

  return (
    <div>
      <div className="blog-card">
        <div className="blog-contents-container">
          <LabelWithIndicatorLink>
            <Link to={`/exhibitions/${id}`}>
              <div className="label-with-indicator-link-inner">
                <p className="blog-title">{exhibition_title}</p>
                <Foward style={{ height: 30, width: 30 }} />
              </div>
            </Link>
          </LabelWithIndicatorLink>

          <p className="blog-description date">{date}</p>
          <div className="blog-contents-container">
            {image}
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
