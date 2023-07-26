import { createContext, useEffect, useState } from "react";

import HEADLINES_DATA from "../utils/data/headlines-data";

export const HeadlinesContext = createContext({
  headlinesMap: {},
});

export const HeadlinesProvider = ({ children }) => {
  const [headlinesMap, setHeadlinesMap] = useState({});

  useEffect(() => {
    const getHeadlinesMap = () => {
      console.log("?", HEADLINES_DATA)
      const headlinesMap = HEADLINES_DATA;
      setHeadlinesMap(headlinesMap); 
    };

    getHeadlinesMap(); 
  }, []);

  const value = {headlinesMap};
  return (
    <HeadlinesContext.Provider value={value}>{children}</HeadlinesContext.Provider>
  );
};
