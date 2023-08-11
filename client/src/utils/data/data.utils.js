import EXHIBITIONS_DATA from "./exhibitions-data";
import SHOPS_DATA from "./shops-data";

export const get_exhibitions_map = () => {
  const { exhibitions } = EXHIBITIONS_DATA;
  const exhibition = exhibitions[0];
  const { shops } = SHOPS_DATA;

  const exhibitors = exhibition.exhibitors.map((exhibitor) =>
    shops.filter((shop) => shop.shop_name === exhibitor)[0]
  );
  return {...exhibition, exhibitors: exhibitors}
};
