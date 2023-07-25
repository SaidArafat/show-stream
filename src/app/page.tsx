import apiClient, { AxiosError } from "@/api/api-client";
import FeedbackSection from "@/components/feedback/feedback-section";
import HeroSection from "@/components/hero/hero-section";
import MediaSection from "@/components/media/media-section";
import MovieTrending from "@/components/movie/movie-trending";
import { Genre, Movie } from "@/types";

interface TrendingData {
  trending: Movie[];
  genres: Genre[];
}

const getAll = async (): Promise<TrendingData> => {
  try {
    const trendingResponse = apiClient.get("/trending/all/week");
    const genresResponse = apiClient.get("/genre/movie/list");

    const [trendingData, genresData] = await Promise.all([
      trendingResponse,
      genresResponse,
    ]);

    return {
      trending: trendingData.data.results,
      genres: genresData.data.genres,
    };
  } catch (error) {
    throw (error as AxiosError).message;
  }
};

const Home = async () => {
  const { trending, genres } = await getAll();

  return (
    <div>
      <HeroSection />
      <MediaSection />
      <MovieTrending movies={trending} genres={genres} />
      <FeedbackSection />
    </div>
  );
};

export default Home;
