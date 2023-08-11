import { createContext, useEffect, useState } from "react";

// import EXHIBITIONS_DATA from "../utils/data/exhibitions-data";
import { get_exhibitions_map } from "../utils/data/data.utils";
// get_exhibitions_map();

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
  console.log(value['exhibitionsMap'])

  return (
    <ExhibitionsContext.Provider value={value}>
      {children}
    </ExhibitionsContext.Provider>
  );
};
