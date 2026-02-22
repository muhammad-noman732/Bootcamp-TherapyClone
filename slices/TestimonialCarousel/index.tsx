"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";


export type TestimonialCarouselProps =
  SliceComponentProps<Content.TestimonialCarouselSlice>;


const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ slice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = slice.primary.testimonials;

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };


  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentItem = testimonials[currentIndex];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto text-center"
    >
      <div className="flex flex-col items-center">

        <PrismicNextImage
          field={currentItem.avatar}
          width={64}
          height={64}
          sizes="64px"
          loading="lazy"
          alt=""
          className="rounded-full h-16 w-16 object-cover mb-4"
        />
        <p className="text-base uppercase tracking-widest text-[#445152] font-poppin mb-5">
          {currentItem.author_name}
        </p>
        <div className="font-inria-serif text-3xl font-normal text-[#1E3B3D] capitalize max-w-xl mx-auto min-h-[120px] flex items-center justify-center">
          <PrismicRichText field={currentItem.testimonial_text} />
        </div>


        <div className="flex items-center justify-center gap-15 mt-10 w-full">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              focus:outline-none transition-opacity duration-200
              ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:opacity-70 cursor-pointer"}
            `}
            aria-label="Previous testimonial"
          >
            <PrismicNextImage
              field={slice.primary.lefta}
              width={40}
              height={40}
              sizes="40px"
              loading="lazy"
              className="object-contain"
              alt=""
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
            className={`
              focus:outline-none transition-opacity duration-200
              ${currentIndex === testimonials.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:opacity-70 cursor-pointer"}
            `}
            aria-label="Next testimonial"
          >
            <PrismicNextImage
              field={slice.primary.rightarrow}
              width={30}
              height={30}
              sizes="30px"
              loading="lazy"
              className="object-contain"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

