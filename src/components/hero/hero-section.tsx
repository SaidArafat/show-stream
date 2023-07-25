"use client";

import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section className="hero py-8 flex flex-col items-center justify-center h-[90vh] text-center space-y-6">
      <header>
        <h1 className="font-bold text-4xl md:text-5xl capitalize">
          Let&apos;s make your own stream
        </h1>
      </header>
      <div>
        <p>
          You can still enjoy the latest movies and other medias online and at
          lower time.
        </p>
      </div>
      <div className="flex flex-row space-x-4">
        <Button primary outline link="/movies">
          Movies
        </Button>
        <Button primary link="/tv">
          show tv
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
