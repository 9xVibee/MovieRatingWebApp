/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import "./Movie.css";
import { useQuery } from "@tanstack/react-query";
import { FetchMovieDetails } from "./query";
import { Loader } from "semantic-ui-react";

const Movie = () => {
  const { id } = useParams<string>();
  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => FetchMovieDetails(id),
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
            Title : <span className="title">{data.title}</span>
          </h1>
          <h1>
            Is movie for Adult : <span> {data.adult ? "Yes" : "No"}</span>
          </h1>
          <h1>
            Budget : <span>{data.budget}</span>
          </h1>
          <h1>Geners : </h1>
          <div className="list-items-movie">
            {data.genres.map((genre: any) => (
              <span className="list-item" key={genre.id}>
                {genre.name},
              </span>
            ))}
          </div>

          <h1 className="mt">
            IMDB ID : <span>{data.imdb_id}</span>
          </h1>

          <h1>
            Popularity : <span>{data.popularity}</span>
          </h1>

          <h1 className="production-company">Production Companies : </h1>
          <div className="list-items-movie production-company">
            {data.production_companies.map((company: any) => (
              <span className="list-item">{company.name},</span>
            ))}
          </div>

          <h1 className="mt">
            Release Date : <span>{data.release_date}</span>
          </h1>

          <h1>
            Revenue : <span>{data.revenue}</span>
          </h1>

          <h1>
            Runtime : <span>{data.runtime}</span>
          </h1>

          <h1>
            Vote Average : <span>{data.vote_average}</span>
          </h1>
          <h1>
            Language : <span>{data.original_language}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Movie;
