import "./upcomings.styles.scss";

const Upcomings = () => {
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
          <div className="exhibitor">
            <img
              src="https://i.ibb.co/d5Jr1k0/tubakicr-ation2.jpg"
              alt="artist"
            />
            <div className="exhibitor-details">
              <h3>Tsubaki Création</h3>
              <span>Instagram</span>
            </div>
          </div>
          <div className="exhibitor">
            <img
              src="https://i.ibb.co/d5Jr1k0/tubakicr-ation2.jpg"
              alt="artist"
            />
            <div className="exhibitor-details">
              <h3>Tsubaki Création</h3>
              <span>Instagram</span>
            </div>
          </div><div className="exhibitor">
            <img
              src="https://i.ibb.co/d5Jr1k0/tubakicr-ation2.jpg"
              alt="artist"
            />
            <div className="exhibitor-details">
              <h3>Tsubaki Création</h3>
              <span>Instagram</span>
            </div>
          </div><div className="exhibitor">
            <img
              src="https://i.ibb.co/d5Jr1k0/tubakicr-ation2.jpg"
              alt="artist"
            />
            <div className="exhibitor-details">
              <h3>Tsubaki Création</h3>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomings;
