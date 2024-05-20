import { useEffect, useState } from "react";
import { getPhotos } from "../../utils/data/flickr.util";
import Slick from "../slick/slick.component";
import { ReactComponent as TeamLogo } from "../../assets/hanami-cat-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram-svgrepo-com.svg";
import {
  team_text,
  team_sub_text,
  team_instagram_url,
} from "../../assets/page-assets";
import "./main-visuals.styles.scss";

const MainVisuals = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const triggerFunc = async () => {
      const serverId = process.env.REACT_APP_FLICKR_SERVER_ID;
      const photosetId = process.env.REACT_APP_FLICKR_PHOTOSET_ID;
      const res = await getPhotos(photosetId, serverId);
      console.log("res", res);
      setPhotos(res);
    };
    triggerFunc();
  }, []);

  return (
    <div className="main-visual-container">
      <Slick images={photos} slickUsage="mainVisual" />
      <div className="main-visual-message-container">
        <p className="message">{team_text}</p>
        <p>{team_sub_text}</p>
        <div>
          <TeamLogo
            id="team-logo"
            style={{ width: "150px", height: "100px" }}
          />
          <a href={team_instagram_url} target="_blank" rel="noreferrer">
            <InstagramLogo
              style={{ width: "20px", height: "20px", opacity: "50%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainVisuals;
