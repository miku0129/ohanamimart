import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = () => {
      const categoryMap = SHOP_DATA;
      setcategoriesMap(categoryMap); 
    };

    getCategoriesMap(); 
  }, []);

  const value = {categoriesMap};
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
