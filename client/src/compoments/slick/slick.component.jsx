import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SlickImage,
  SlickContainer,
  CustomSlider,
} from "../../component-utils/component-utils.styles";

const Slick = ({ images, slickUsage }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: "70px",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SlickContainer slickUsage={slickUsage}>
      <CustomSlider {...settings} slickUsage={slickUsage}>
        {images.map((image) => {
          const image_source = image.src ? image.src : image.product_image_url;
          return (
            <div>
              <SlickImage
                src={image_source}
                alt={image.alt}
                slickUsage={slickUsage}
              />
            </div>
          );
        })}
      </CustomSlider>
    </SlickContainer>
  );
};

export default Slick;
