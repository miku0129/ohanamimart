import { createContext, useEffect, useState } from "react";

import EXHIBITIONS_DATA from "../utils/data/exhibitions-data";

export const ExhibitionsContext = createContext({
  exhibitionsMap: {},
});

export const ExhibitionsProvider = ({ children }) => {
  const [exhibitionsMap, setExhibitionsMap] = useState({});

  useEffect(() => {
    const getExhibitorsMap = () => {
      const exhibitionsMap = EXHIBITIONS_DATA;
      setExhibitionsMap(exhibitionsMap);
    };

    getExhibitorsMap();
  }, []);

  const value = { exhibitionsMap };
  
  return (
    <ExhibitionsContext.Provider value={value}>
      {children}
    </ExhibitionsContext.Provider>
  );
};
