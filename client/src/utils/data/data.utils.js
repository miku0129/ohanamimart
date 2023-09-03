import EXHIBITIONS_DATA from "./exhibitions-data";
import SHOPS_DATA from "./shops-data";
import HEADLINES_DATA from "./headlines-data";
import EVENEMENTS from "./headlines-evenements-data";

export const get_exhibitions_array = () => {
  // const { exhibitions } = EXHIBITIONS_DATA;
  // const exhibition = exhibitions[0];
  // const { shops } = SHOPS_DATA;

  // const exhibitors = exhibition.exhibitors.map(
  //   (exhibitor) => shops.filter((shop) => shop.shop_name === exhibitor)[0]
  // );
  // return { ...exhibition, exhibitors: exhibitors };
  const { exhibitions } = EXHIBITIONS_DATA;
  const { shops } = SHOPS_DATA;

  return exhibitions
    .filter((exhibition) => {
      const dateOfExhibition = new Date(exhibition.date);
      const today = new Date();
      console.log(dateOfExhibition);
      console.log(today);

      return dateOfExhibition >= today;
    })
    .map((exhibition) => {
      const exhibitors = exhibition.exhibitors.map(
        (exhibitor) => shops.filter((shop) => shop.shop_name === exhibitor)[0]
      );
      return { ...exhibition, exhibitors: exhibitors };
    });
};

export const get_headlines_array = () => {
  const { headline_titles } = HEADLINES_DATA;
  const headline_titles_array = headline_titles;
  const { shops } = SHOPS_DATA;

  const array_of_headline = headline_titles_array.map(
    (headline) => shops.filter((shop) => shop.shop_name === headline)[0]
  );
  const headlines = array_of_headline.map((headline, idx) => {
    return {
      id: idx,
      title: headline.shop_name,
      url_title_lowercase_no_spaces:
        headline.shop_name_lowercase_no_spaces_for_url,
      image_url: headline.shop_image_url,
    };
  });
  const evenements = EVENEMENTS;

  return [...headlines, evenements];
};

export const get_products_for_main_visual = () => {
  const { shops } = SHOPS_DATA;
  return shops
    .filter((_, idx) => idx < 4)
    .map((shop) => {
      return shop.products[0];
    });
};
