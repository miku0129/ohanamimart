import { createContext, useEffect, useState } from "react";

import EXHIBITION_DATA from "../utils/data/exhibition-data";

export const ExhibitionContext = createContext({
  exhibitionMap: {},
});

export const ExhibitionProvider = ({ children }) => {
  const [exhibitionMap, setExhibitionMap] = useState({});

  useEffect(() => {
    const getExhibitorsMap = () => {
      const exhibitionMap = EXHIBITION_DATA;
      setExhibitionMap(exhibitionMap);
    };

    getExhibitorsMap();
  }, []);

  const value = { exhibitionMap };
  
  return (
    <ExhibitionContext.Provider value={value}>
      {children}
    </ExhibitionContext.Provider>
  );
};
