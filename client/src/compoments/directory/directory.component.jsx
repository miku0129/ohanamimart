import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import DirectoryItem from "../directory-item/directory-item.component";
import styles from "./directory.styles.scss";

const Directory = ({ categories }) => {
  const images = [
    {
      original: "https://i.ibb.co/jMct7KD/11256.jpg",
      originalHeight: 450,
    },
    {
      original: "https://i.ibb.co/CHs1ysS/11113.jpg",
      originalHeight: 450,
    },
  ];
  return (
    <>
      <div className="image-gallery-container">
        <ImageGallery
          items={images}
          showNav={true}
          autoPlay={false}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={false}
          showBullets={true}
          originalClass={styles.image}
        />
      </div>
      <div className="categories-container">
        {categories.length !== 0 &&
          categories.map((category) => {
            return <DirectoryItem category={category} key={category.id} />;
          })}
      </div>
    </>
  );
};

export default Directory;
