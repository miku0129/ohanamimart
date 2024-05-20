import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SlickImage,
  SlickContainer,
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
      <Slider {...settings} slickUsage={slickUsage}>
        {images.map((image) => {
          console.log("image", image);
          return (
            <div>
              <SlickImage src={image} alt={image} slickUsage={slickUsage} />
            </div>
          );
        })}
      </Slider>
    </SlickContainer>
  );
};

export default Slick;
