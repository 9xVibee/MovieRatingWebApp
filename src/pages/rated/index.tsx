/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./index.css";
import { DisplayType } from "../home";
import { useQuery } from "@tanstack/react-query";
import { FetchRatedMovies, FetchRatedTvShows } from "./query";
import { Loader } from "semantic-ui-react";
import ColumnDisplay from "../home/Column-Display";
import { Navigate } from "react-router-dom";

const Rated = () => {
  const [activeTab, setActiveTab] = useState<DisplayType>(DisplayType.Movies);

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: FetchRatedMovies,
  });

  const { data: ratedTvShows, isLoading: isLoadingRatedTvShows } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: FetchRatedTvShows,
  });

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <div className="rated-container">
      <div className="buttons-container">
        <button
          className="button-30 home-btn"
          style={{
            backgroundColor: activeTab === DisplayType.Movies ? "black" : "",
            color: activeTab === DisplayType.Movies ? "#D6D6E7" : "",
          }}
          onClick={() => setActiveTab(DisplayType.Movies)}
        >
          Movies Rated
        </button>
        <button
          className="button-30 home-btn"
          style={{
            backgroundColor: activeTab === DisplayType.TvShows ? "black" : "",
            color: activeTab === DisplayType.TvShows ? "#D6D6E7" : "",
          }}
          onClick={() => setActiveTab(DisplayType.TvShows)}
        >
          TvShows Rated
        </button>
      </div>
      {isLoadingRatedMovies || isLoadingRatedTvShows ? (
        <Loader active />
      ) : (
        <div className="home-container">
          {activeTab === DisplayType.Movies ? (
            <ColumnDisplay
              data={ratedMovies.results}
              displayType={DisplayType.Movies}
              isRated
            />
          ) : (
            <ColumnDisplay
              data={ratedTvShows.results}
              displayType={DisplayType.TvShows}
              isRated
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Rated;
