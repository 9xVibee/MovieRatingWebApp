/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import "./TvShow.css";
import { useQuery } from "@tanstack/react-query";
import { FetchTvShowDetails } from "./query";
import { Loader } from "semantic-ui-react";

const Movie = () => {
  const { id } = useParams<string>();
  const { data, isLoading } = useQuery({
    queryKey: ["tvshow"],
    queryFn: () => FetchTvShowDetails(id),
  });

  if (isLoading) return <Loader active />;
  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-img-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-info">
          <h1 className="title">
            Title : <span className="title">{data.name}</span>
          </h1>
          <h1>Created By :</h1>
          <div className="list-items-movie">
            {data.created_by.map((creator: any) => (
              <span className="list-item" key={creator.id}>
                {creator.name},
              </span>
            ))}
          </div>

          <h1 className="mt">
            Episode Run Time : <span>{data.episode_run_time}</span>
          </h1>

          <h1>
            First Air Date : <span>{data.first_air_date}</span>
          </h1>

          <h1>Networks : </h1>
          <div className="list-items-movie">
            {data.networks.map((network: any) => (
              <span className="list-item">{network.name},</span>
            ))}
          </div>

          <h1 className="mt">
            Popularity : <span>{data.popularity}</span>
          </h1>

          <h1>Production Companies : </h1>
          <div className="list-items-movie">
            {data.production_companies.map((company: any) => (
              <span className="list-item">{company.name},</span>
            ))}
          </div>

          <h1 className="mt">
            Number of Episodes : <span>{data.number_of_episodes}</span>
          </h1>

          

          <h1>
            Vote Average : <span>{data.vote_average}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Movie;
