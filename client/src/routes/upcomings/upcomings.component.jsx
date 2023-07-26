import { useContext } from "react";
import { ExhibitorsContext } from "../../context/exhibitors.context";

import ExhibitorCard from "../../compoments/exhibitor-card/exhibitor-card.component";

import "./upcomings.styles.scss";

const Upcomings = () => {
  const { exhibitorsMap } = useContext(ExhibitorsContext);
  console.log("?", exhibitorsMap);

  return (
    <div className="contents-container">
      <div className="image-container">
        <img
          src="https://i.ibb.co/S3dBd36/360051126-1297912624141236-3022852886206423713-n.jpg"
          alt="event_image"
        />
      </div>
      <div className="contents-subcontainer">
        <div className="contents-subcontainer-left">
          <h2>Mini Expo Japoneise</h2>
          <span>Dim.16 juillet</span>
          <br />
          <span>Dim.27 aout 2023</span>
          <br />
          <span>10:00-18:00</span>
          <br />
          <span>Yoisho!</span>
          <br />
          <span>11 Avenue de Grammont</span>
        </div>
        <div className="contents-subcontainer-right">
          <h2>Exhibitors</h2>
          {exhibitorsMap["exhibitors"] &&
            exhibitorsMap["exhibitors"].map((exhibitor) => {
              return <ExhibitorCard key={exhibitor.id} exhibitor={exhibitor} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Upcomings;
