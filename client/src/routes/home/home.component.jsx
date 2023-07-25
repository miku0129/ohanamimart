import { useContext } from "react";
import { ArtistsContext } from "../../context/artists.context";

import Directory from "../../compoments/directory/directory.component";

const Home = () => {
  const { artistsMap } = useContext(ArtistsContext);

  return (
    <div>
      {artistsMap["artistData"] && (
        <Directory categories={artistsMap["artistData"]} />
      )}
    </div>
  );
};

export default Home;
