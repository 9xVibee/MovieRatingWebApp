export const rateMovies = async (movieId: number, rating: number) => {
  console.log(localStorage.getItem("guest_session_id"));

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=0db7d4a99ff836762924748631ec7b57`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{"value" : ${rating}}`,
    }
  );

  const data = await res.json();
  return data;
};

export const rateTvShows = async (tvShowId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=0db7d4a99ff836762924748631ec7b57`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{"value" : ${rating}}`,
    }
  );

  const data = await res.json();
  return data;
};
