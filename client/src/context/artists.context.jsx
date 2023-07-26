import { createContext, useEffect, useState } from "react";

import ARTIST_DATA from "../utils/data/artist-data";

export const ArtistsContext = createContext({
  artistsMap: {},
});

export const ArtistsProvider = ({ children }) => {
  const [artistsMap, setartistsMap] = useState({});

  useEffect(() => {
    const getArtistsMap = () => {
      const artistMap = ARTIST_DATA;
      setartistsMap(artistMap); 
    };

    getArtistsMap(); 
  }, []);

  const value = {artistsMap};
  return (
    <ArtistsContext.Provider value={value}>{children}</ArtistsContext.Provider>
  );
};
