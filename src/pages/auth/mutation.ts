export const mutationLogin = async () => {
  // this api end point create new guest id
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI3ZDRhOTlmZjgzNjc2MjkyNDc0ODYzMWVjN2I1NyIsInN1YiI6IjY1ODFjMmU5Y2VkYWM0MDg2MTdkOGEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_QH1gjVxuTdtaedCW1DqzKMXM2Z1E_276I8lAuKPpM",
      },
    }
  );
  const data = await res.json();
  localStorage.setItem("guest_session_id", data.guest_session_id);
  return data;
};
