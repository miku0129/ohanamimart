import { Fragment, useContext } from "react";

import { ArtistsContext } from "../../context/artists.context";
import Artist from "../../compoments/artist/artist.component";

const AboutusPreview = () => {
  const { artistsMap } = useContext(ArtistsContext);
  console.log("artistsMap??: ", artistsMap);
  return (
    <Fragment>
      {artistsMap["artistData"] && artistsMap["artistData"].filter((_, idx)=> idx < artistsMap["artistData"].length-1).map((artist) => {
        return (
          <Artist
            key={artist.id}
            title={artist.title}
            imageUrl={artist.imageUrl}
            bio={artist.bio}
          />
        );
      })}
    </Fragment>
  );
};

export default AboutusPreview;
