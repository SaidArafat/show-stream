import apiClient, { AxiosError } from "@/api/api-client";
import TvList from "@/components/tv/tv-list";

const getAll = async () => {
  try {
    const { data } = await apiClient.get("/discover/tv");
    return data.results;
  } catch (error) {
    return (error as AxiosError).message;
  }
};

const TVPage = async () => {
  const tv = await getAll();
  return (
    <div>
      <TvList tvShows={tv} />
    </div>
  );
};

export default TVPage;
