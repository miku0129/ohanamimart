import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, titleLowercase } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body">
        <Link to={`/shop/${titleLowercase}`}>
          <h2>{title}</h2>
          <p>Look in</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
