/* eslint-disable @typescript-eslint/no-explicit-any */
export const FetchMovieDetails = async (movieId: any) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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
