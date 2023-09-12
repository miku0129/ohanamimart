import { createContext, useEffect, useState } from "react";

import { get_headlines_array } from "../utils/data/data.utils";

export const HeadlinesContext = createContext({
  headlinesArray: [],
});

export const HeadlinesProvider = ({ children }) => {
  const [headlinesArray, setHeadlinesArray] = useState([]);

  useEffect(() => {
    const getHeadlinesArray = () => {
      const headlinesArray = get_headlines_array();

      setHeadlinesArray(headlinesArray);
    };

    getHeadlinesArray();
  }, []);

  const value = { headlinesArray };
  return (
    <HeadlinesContext.Provider value={value}>
      {children}
    </HeadlinesContext.Provider>
  );
};
