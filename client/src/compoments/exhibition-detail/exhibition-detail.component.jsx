import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ExhibitionsContext } from "../../context/exhibitions.context";

import ExhibitorCard from "../exhibitor-card/exhibitor-card.component";
import {
  ContentsContainer,
  MainImageContainer,
  Overlay,
  ContentsSubContainer,
} from "./exhibition-detail.styles";
import { ParagraphLink } from "../../component-utils/component-utils.styles";

import { DefaultPicture } from "../../component-utils/component-utils.styles";

const ExhibitionDetail = () => {
  const { id } = useParams();
  const { exhibitions } = useContext(ExhibitionsContext);

  const [exhibitionMap, setExhibitionMap] = useState(null);

  useEffect(() => {
    if (exhibitions.length > 0) {
      const exhibition = exhibitions.filter((exhibition) => {
        console.log(exhibition);
        return exhibition.id === Number(id);
      });
      setExhibitionMap(exhibition[0]);
    }
  }, [exhibitions, id]);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  if (exhibitionMap) {
    const {
      start_date,
      end_date,
      start_time,
      end_time,
      location,
      address,
      exhibition_image_url,
      exhibition_title,
      exhibitors,
      exhibition_url,
    } = exhibitionMap;

    const date =
      start_date !== end_date ? `${start_date} ~ ${end_date}` : start_date;

    const url = exhibition_url ? (
      <a href={exhibition_url}>
        <ParagraphLink>{exhibition_url}</ParagraphLink>
      </a>
    ) : (
      ""
    );

    const image = exhibition_image_url ? (
      <img src={exhibition_image_url} alt={exhibition_title} />
    ) : (
      <DefaultPicture />
    );

    return (
      exhibition_title && (
        <div>
          <ContentsContainer>
            <MainImageContainer onClick={handleShowModal}>
              {image}
            </MainImageContainer>
            <ContentsSubContainer>
              <div className="contents-subcontainer-left">
                <h2>{exhibition_title}</h2>
                <span>{date}</span>
                <br />
                <span>
                  {start_time} ~ {end_time}
                </span>
                <hr />
                <span>{location}</span>
                <br />
                <span>{address}</span>
                <hr />
                <span>{url}</span>
              </div>
              <div className="contents-subcontainer-right">
                <h2>Exposants</h2>
                {exhibitors &&
                  exhibitors.map((exhibitor) => {
                    console.log(exhibitor);
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
                {image}
              </div>
            </Overlay>
          )}
        </div>
      )
    );
  }
};

export default ExhibitionDetail;
