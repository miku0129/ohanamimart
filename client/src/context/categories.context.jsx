// import { createContext, useEffect, useState } from "react";

// import STORES_DATA from "../utils/data/stores-data";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setcategoriesMap] = useState({});

//   useEffect(() => {
//     const getCategoriesMap = () => {
//       const categoryMap = STORES_DATA;
//       setcategoriesMap(categoryMap); 
//     };

//     getCategoriesMap(); 
//   }, []);

//   const value = {categoriesMap};
//   return (
//     <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
//   );
// };
