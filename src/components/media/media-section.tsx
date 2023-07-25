"use client";

import MediaList from "./media-list";
import medias from "../../../data/medias";

const MediaSection = () => {
  return (
    <section className="py-8">
      <header className="flex flex-col items-center justify-center space-y-5 text-center">
        <h2 className="font-semibold text-3xl md:text-4xl capitalize">
          Choose the type of media you liked
        </h2>
        <p className="text-gray">
          We present many media from various main categories, let's choose and
          search media you liked.
        </p>
      </header>
      <section className="mt-8">
        <MediaList medias={medias} />
      </section>
    </section>
  );
};

export default MediaSection;
