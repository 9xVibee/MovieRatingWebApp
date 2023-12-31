export const FetchMovie = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI3ZDRhOTlmZjgzNjc2MjkyNDc0ODYzMWVjN2I1NyIsInN1YiI6IjY1ODFjMmU5Y2VkYWM0MDg2MTdkOGEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_QH1gjVxuTdtaedCW1DqzKMXM2Z1E_276I8lAuKPpM",
      },
    }
  );
  const data = await res.json();
  return data;
};

export const FetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI3ZDRhOTlmZjgzNjc2MjkyNDc0ODYzMWVjN2I1NyIsInN1YiI6IjY1ODFjMmU5Y2VkYWM0MDg2MTdkOGEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_QH1gjVxuTdtaedCW1DqzKMXM2Z1E_276I8lAuKPpM",
      },
    }
  );
  const data = await res.json();
  return data;
};
