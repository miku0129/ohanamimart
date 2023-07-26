import { createContext, useEffect, useState } from "react";

import PRODUCTS_DATA from "../utils/data/products-data";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = () => {
      const categoryMap = PRODUCTS_DATA;
      setcategoriesMap(categoryMap); 
    };

    getCategoriesMap(); 
  }, []);

  const value = {categoriesMap};
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
