import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

interface SlideProps<T> {
  data: T;
  renderCard: (data: T) => JSX.Element;
}

interface Props<T> {
  slides: T[];
  renderSlide: (props: SlideProps<T>) => JSX.Element;
}

const Slider = <T extends {}>({ slides, renderSlide }: Props<T>) => {
  if (!slides || (slides.length === 0))
    return (
      <p className="text-primary text-center mt-4 before:content-[open-quote] after:content-[close-quote]">
        No items to show.
      </p>
    );

  const renderedSlides = slides.map((slide, index) => {
    return (
      <SwiperSlide key={index}>
        {renderSlide({ data: slide, renderCard: (data) => <>{data}</> })}
      </SwiperSlide>
    );
  });

  return (
    <section className="py-4">
      <Swiper
        grabCursor
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
      >
        {renderedSlides}
      </Swiper>
    </section>
  );
};

export default Slider;
