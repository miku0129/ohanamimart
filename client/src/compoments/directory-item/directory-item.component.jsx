import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, image_url, url_title_lowercase_no_spaces } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div className="body">
        <Link to={`/shop/${url_title_lowercase_no_spaces}`}>
          <h2>{title}</h2>
          <p>Look in</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
