import { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import ExhibitorCard from "../exhibitor-card/exhibitor-card.component";
import {
  ContentsContainer,
  MainImageContainer,
  ImageContainer,
  Overlay, 
  ContentsSubContainer
} from "./exhibition-preview.styles";

const ExhibitionPreview = ({ exhibitionsMap }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  if (exhibitionsMap) {
    const {
      date,
      time,
      location,
      address,
      main_image_url,
      image_url,
      exhibition_title,
      exhibitors,
    } = exhibitionsMap;

    const images = image_url
      ? image_url.map((url) => {
          const obj = {
            original: url,
            thumbnail: url,
            originalHeight: 450,
            thumbnailHeight:100,
            thumbnailWidth:100
          };
          return obj;
        })
      : image_url;
    return (
      exhibition_title && (
        <div>
          <ContentsContainer>
            <MainImageContainer onClick={handleShowModal}>
              <img src={main_image_url} alt={exhibition_title} />
            </MainImageContainer>
            <ImageContainer>
              <ImageGallery
                items={images}
                showNav={false}
                autoPlay={false}
                showFullscreenButton={false}
                useBrowserFullscreen={false}
                showPlayButton={false}
                showBullets={true}
              />
            </ImageContainer>
            <ContentsSubContainer>
              <div className="contents-subcontainer-left">
                <h2>{exhibition_title}</h2>
                <span>{date}</span>
                <br />
                <span>{time}</span>
                <hr />
                <span>{location}</span>
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
            </ContentsSubContainer>
          </ContentsContainer>
          {showModal && (
            <Overlay onClick={handleShowModal}>
              <div className="modal-image-container">
                <div className="modal-image-subcontainer">
                  <button onClick={handleShowModal}>&times;</button>
                </div>
                <img src={main_image_url} alt={exhibition_title} />
              </div>
            </Overlay>
          )}
        </div>
      )
    );
  }
};

export default ExhibitionPreview;
