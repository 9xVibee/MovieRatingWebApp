import { Link } from "react-router-dom";
import { DisplayType } from "../../pages/home";
import { DisplayData } from "../../pages/home/Column-Display";
import "./Card.css";

interface cardType {
  DisplayData: DisplayData;
  displayType: DisplayType;
}

const Card = (cardType: cardType) => {
  const { DisplayData, displayType } = cardType;
  return (
    <Link
      to={`${displayType === DisplayType.Movies ? "/movie" : "tvshow"}/${
        DisplayData.id
      }`}
    >
      <div className="card">
        <div className="card-img-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${DisplayData.poster_path}`}
            alt=""
          />
        </div>
        <div className="card-info-section">
          <h1>{DisplayData.title}</h1>
          <p>{`Release Date : ${DisplayData.release_date}`}</p>
          <p>{DisplayData.overview.slice(0, 300) + "..."}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
