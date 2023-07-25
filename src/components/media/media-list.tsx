"use client";

import { Media } from "@/types";
import MediaItem from "./media-item";

interface Props {
  medias: Media[];
}

const MediaList = ({ medias }: Props) => {
  if (!medias || medias.length === 0)
    return (
      <p className="text-primary text-center py-8 before:content-[open-quote] after:content-[close-quote]">
        No items to show.
      </p>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
      {medias.map((media) => (
        <MediaItem key={media.id} media={media} />
      ))}
    </div>
  );
};

export default MediaList;
