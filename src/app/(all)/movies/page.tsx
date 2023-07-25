import apiClient, { AxiosError } from "@/api/api-client";
import MovieList from "@/components/movie/movie-list";

const getAll = async () => {
  try {
    const { data } = await apiClient.get("/trending/all/week");
    return data.results;
  } catch (error) {
    return (error as AxiosError).message;
  }
};

const page = async () => {
  const movies = await getAll();
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default page;
