import { Fragment } from "react";

import ExhibitionCard from "../exhibition-card/exhibition-card.component";

import { PreviewThreeItemsInALine } from "../utility/utility.styles";

import "./exhibition-preview.styles.scss";

const ExhibitionPreview = ({ exhibitions }) => {
  console.log(exhibitions);
  return (
    <Fragment>
      <div className="exhibitions-container">
        <PreviewThreeItemsInALine>
          {exhibitions &&
            exhibitions.map((exhibition) => {
              return <ExhibitionCard exhibition={exhibition} />;
            })}
        </PreviewThreeItemsInALine>
      </div>
    </Fragment>
  );
};

export default ExhibitionPreview;
