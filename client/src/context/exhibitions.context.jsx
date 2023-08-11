import { createContext, useEffect, useState } from "react";

import { get_exhibitions_map } from "../utils/data/data.utils";

export const ExhibitionsContext = createContext({
  exhibitionsMap: {},
});

export const ExhibitionsProvider = ({ children }) => {
  const [exhibitionsMap, setExhibitionsMap] = useState({});

  useEffect(() => {
    const getExhibitorsMap = () => {
      const exhibitionsMap = get_exhibitions_map();
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
