export const FetchRatedMovies = async () => {
  console.log();
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=0db7d4a99ff836762924748631ec7b57`
  );
  const data = await res.json();
  return data;
};

export const FetchRatedTvShows = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=0db7d4a99ff836762924748631ec7b57`
  );
  const data = await res.json();
  return data;
};
