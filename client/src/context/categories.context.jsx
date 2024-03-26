import { createContext, useEffect, useState } from "react";
import { getAllDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getAllDocuments();
      setCategories(categories);
    };

    getCategories();
  }, []);
  const value = categories;

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
