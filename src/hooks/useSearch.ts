"use client";

import apiClient from "@/api/api-client";
import { Movie } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    if (searchQuery) {
      apiClient
        .get<{ results: Movie[] }>("/search/movie", {
          params: {
            query: searchQuery,
          },
        })
        .then(({ data }) => {
          setMovies(data.results);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  return { movies, error, isLoading };
};

export default useSearch;
