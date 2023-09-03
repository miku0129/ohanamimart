import { createContext, useEffect, useState } from "react";

import { get_exhibitions_array } from "../utils/data/data.utils";

export const ExhibitionsContext = createContext({
  exhibitions: [],
});

export const ExhibitionsProvider = ({ children }) => {
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    const getExhibitions = () => {
      const exhibitions = get_exhibitions_array();
      setExhibitions(exhibitions);
    };

    getExhibitions();
  }, []);

  const value = { exhibitions };

  return (
    <ExhibitionsContext.Provider value={value}>
      {children}
    </ExhibitionsContext.Provider>
  );
};
