"use client";
import { HiChevronDown } from "react-icons/hi";
import { Genre } from "@/types";

interface Props {
  genres: Genre[];
  onSelectCategory: (genre: number | null) => void;
}

const MovieFilter = ({ genres, onSelectCategory }: Props) => {
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-black border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary"
        onChange={(event) => onSelectCategory(parseInt(event.target.value))}
      >
        <option
          className="checked:bg-primary hover:bg-primary focus:bg-primary"
          value=""
        >
          All Categories
        </option>
        {genres.map((genre) => (
          <option
            className="checked:bg-primary hover:bg-primary focus:bg-primary"
            key={genre.id}
            value={genre.id}
          >
            {genre.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-2xl">
        <HiChevronDown />
      </div>
    </div>
  );
};

export default MovieFilter;

// <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-8">
// {genres.map((genre) => (
//   <Button
//     rounded
//     primary
//     key={genre.id}
//     onClick={() => onSelectCategory(genre)}
//   >
//     {genre.name}
//   </Button>
// ))}
// <Button link="/movies" rounded secondary>
//   See More
// </Button>
// </div>
