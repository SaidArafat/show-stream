import axios, { CanceledError, AxiosError } from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2E2NjBiNGI5M2YzMGNhMmU5MGQwYTJkMTU4N2QzMiIsInN1YiI6IjY0YjY1ZWJhMGU0ZmM4NTE5ZGQyYzUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dPYWh--OpJ9gyTmmrWL2BkMqMUZcYGmVbBRaHNUdb_Q";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export { CanceledError, AxiosError };

// https://api.themoviedb.org/3/trending/all/week?api_key=47a660b4b93f30ca2e90d0a2d1587d32
