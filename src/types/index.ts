export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  adult: boolean;
  media_type: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  genre_ids: number[];
  genres: Genre[];
}

export interface Person {
  id: number;
  name: string;
  gender: number;
  adult: boolean;
  media_type: string;
  popularity: number;
  profile_path: string;
  known_for_department: string;
}

export interface TvShow {
  id: number;
  title: string;
  overview: string;
  adult: boolean;
  media_type: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
}

export interface Media {
  id: number;
  title: string;
  count: number;
  icon: string;
}

export interface Feedback {
  id: number;
  message: string;
  title: string;
  job: string;
  image: string;
}
