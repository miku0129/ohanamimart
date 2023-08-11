import EXHIBITIONS_DATA from "./exhibitions-data";
import STORES_DATA from "./stores-data";

export const get_exhibitions_map = () => {
  const { exhibitions } = EXHIBITIONS_DATA;
  const exhibition = exhibitions[0];
  const { stores } = STORES_DATA;

  const exhibitors = exhibition.exhibitors.map((exhibitor) =>
    stores.filter((store) => store.store_name === exhibitor)[0]
  );
  return {...exhibition, exhibitors: exhibitors}
};
