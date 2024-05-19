import { useEffect, useState } from "react";
import { getPhotos } from "../../utils/data/flickr.util";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SlickImage,
  SlickContainer,
} from "../../component-utils/component-utils.styles";

const Slick = ({ slickUsage }) => {
  const [photos, setPhotos] = useState([]);
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

  useEffect(() => {
    const triggerFunc = async () => {
      const res = await getPhotos();
      console.log("res", res);
      setPhotos(res);
    };
    triggerFunc();
  }, []);

  return (
    <SlickContainer slickUsage={slickUsage}>
      <Slider {...settings} slickUsage={slickUsage}>
        {photos.map((photo) => {
          return (
            <div>
              <SlickImage src={photo} alt={photo} slickUsage={slickUsage} />
            </div>
          );
        })}
      </Slider>
    </SlickContainer>
  );
};

export default Slick;
