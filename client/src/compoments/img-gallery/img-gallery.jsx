import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ImgGallery = ({ images }) => {
  const imgs = images
    ? images.map((image) => {
        const obj = {
          original: image.product_image_url,
          thumbnail: image.product_image_url,
          originalHeight: 450,
          thumbnailHeight: 100,
          thumbnailWidth: 100,
        };
        return obj;
      })
    : images;

  return (
    <ImageGallery
      items={imgs}
      showNav={false}
      autoPlay={false}
      showFullscreenButton={false}
      useBrowserFullscreen={false}
      showPlayButton={false}
      showBullets={true}
    />
  );
};

export default ImgGallery;
