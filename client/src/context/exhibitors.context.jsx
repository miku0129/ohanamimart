import { createContext, useEffect, useState } from "react";

import EXHIBITORS_DATA from "../utils/data/exhibitors-data";

export const ExhibitorsContext = createContext({
  exhibitorsMap: {},
});

export const ExhibitorsProvider = ({ children }) => {
  const [exhibitorsMap, setExhibitorsMap] = useState({});

  useEffect(() => {
    const getExhibitorsMap = () => {
      const exhibitorsMap = EXHIBITORS_DATA;
      setExhibitorsMap(exhibitorsMap);
    };

    getExhibitorsMap();
  }, []);

  const value = { exhibitorsMap };
  
  return (
    <ExhibitorsContext.Provider value={value}>
      {children}
    </ExhibitorsContext.Provider>
  );
};
