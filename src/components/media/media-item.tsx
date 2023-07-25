"use client";

import { Media } from "@/types";
import Link from "next/link";

interface Props {
  media: Media;
}

const MediaItem = ({ media }: Props) => {
  return (
    <div className="p-6 bg-gray bg-opacity-20 rounded-lg flex items-center space-x-6">
      <div className="p-6 bg-black rounded-xl">
        <i className={`text-3xl text-primary ${media.icon}`}></i>
      </div>
      <div className="flex flex-col space-y-2">
        <h4 className="text-xl capitalize">{media.title}</h4>
        <p className="text-gray">
          {media.count}+ {media.title}
        </p>
        <Link
          className="text-primary hover:text-primaryLight duration-300"
          href={media.title}
          target="_blank"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default MediaItem;
