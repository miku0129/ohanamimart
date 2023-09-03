import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainVisualImages from "./main-visual-images";
import "./directory.styles.scss";

import ProductCard from "../product-card/product-card.component";
import { BottomLine, ProductsPreview } from "../utility/utility.styles";
// import DirectoryItem from "../directory-item/directory-item.component";

import { get_products_for_main_visual } from "../../utils/data/data.utils";

const Directory = ({ categories }) => {
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

  const products = get_products_for_main_visual();

  return (
    <>
      <div className="main-visual-container">
        <div className="slick-container">
          <Slider {...settings}>
            {MainVisualImages.map((image) => (
              <div>
                <img className="slick-img" src={image.src} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="main-visual-message-container">
          <p className="message">
            Acheter en ligne des articles, directement auprès des fabricants
            japonais
          </p>
          <p>Hanami est la maison de l'artisanat japonais de qualité</p>
        </div>
        <ProductsPreview>
          {products &&
            products.map((product) => <ProductCard product={product} />)}
        </ProductsPreview>
        <BottomLine />
      </div>

      {/* <div className="categories-container">
        {categories.length !== 0 &&
          categories.map((category) => {
            return <DirectoryItem category={category} key={category.id} />;
          })}
      </div> */}
    </>
  );
};

export default Directory;
