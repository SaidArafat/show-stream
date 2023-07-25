import { Genre } from "@/types";

interface Props {
  genres: Genre[];
}

const MovieGenre = ({ genres }: Props) => {
  if (!genres) return null;
  return (
    <ul className="flex my-2 space-x-4">
      {genres.map((genre) => (
        <li key={genre.id} className="bg-primary px-3 rounded-sm">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default MovieGenre;
