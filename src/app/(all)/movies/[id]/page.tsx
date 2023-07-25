import apiClient, { AxiosError } from "@/api/api-client";
import MovieDetails from "@/components/movie/movie-details";

const get = async (id: number) => {
  try {
    const { data } = await apiClient.get(`/movie/${id}`);
    return data;
  } catch (error) {
    return (error as AxiosError).message;
  }
};

const page = async ({ params }: { params: { id: number } }) => {
  const movie = await get(params.id);

  return (
    <section className="mb-8">
      <MovieDetails movie={movie} />
    </section>
  );
};

export default page;
