import { useState } from "react";
import "./index.css";
import ColumnDisplay from "./Column-Display";
import { useQuery } from "@tanstack/react-query";
import { FetchMovie, FetchTvShows } from "./query";
import { Loader } from "semantic-ui-react";
import { Navigate } from "react-router-dom";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: FetchMovie,
  });
  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: FetchTvShows,
  });

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to={"/auth"} />;
  }
  return (
    <div className="home">
      <div className="buttons-container">
        <button
          className="button-30 home-btn"
          style={{
            backgroundColor: displayType === DisplayType.Movies ? "black" : "",
            color: displayType === DisplayType.Movies ? "#D6D6E7" : "",
          }}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </button>
        <button
          className="button-30 home-btn"
          style={{
            backgroundColor: displayType === DisplayType.TvShows ? "black" : "",
            color: displayType === DisplayType.TvShows ? "#D6D6E7" : "",
          }}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          Tv Shows
        </button>
      </div>
      {isLoadingMovies || isLoadingTvShows ? (
        <Loader active />
      ) : (
        <div className="home-container">
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay
              data={movieData.results}
              displayType={DisplayType.Movies}
            />
          ) : (
            <ColumnDisplay
              data={tvShowData.results}
              displayType={DisplayType.TvShows}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
