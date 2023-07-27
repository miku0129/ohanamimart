import { useState } from "react";

import ExhibitorCard from "../exhibitor-card/exhibitor-card.component";
import "./exhibition-preview.styles.scss";

const ExhibitionPreview = ({ exhibitionMap }) => {
  const { date, time, place, address, imageUrl, exhibitionTitle, exhibitors } =
    exhibitionMap;
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    exhibitionMap && (
      <div>
        <div className="contents-container">
          <div className="image-container" onClick={handleShowModal}>
            <img src={imageUrl} alt={exhibitionTitle} />
          </div>
          <div className="contents-subcontainer">
            <div className="contents-subcontainer-left">
              <h2>{exhibitionTitle}</h2>
              <span>{date}</span>
              <br />
              <span>{time}</span>
              <hr />
              <span>{place}</span>
              <br />
              <span>{address}</span>
              <hr />
            </div>
            <div className="contents-subcontainer-right">
              <h2>Exhibitors</h2>
              {exhibitors &&
                exhibitors.map((exhibitor) => {
                  return (
                    <ExhibitorCard key={exhibitor.id} exhibitor={exhibitor} />
                  );
                })}
            </div>
          </div>
        </div>
        {showModal && (
          <div id="overlay" onClick={handleShowModal}>
            <div className="modal-image-container">
              <div className="modal-image-subcontainer">
                <button onClick={handleShowModal}>&times;</button>
              </div>
              <img src={imageUrl} alt={exhibitionTitle} />
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ExhibitionPreview;
