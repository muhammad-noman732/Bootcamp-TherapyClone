import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `TestimonialCarousel`.
 */
export type TestimonialCarouselProps =
  SliceComponentProps<Content.TestimonialCarouselSlice>;

/**
 * Component for "TestimonialCarousel" Slices.
 */
const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto text-center"
    >
      <div className="space-y-12">
        {slice.primary.testimonials.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* AVATAR IMAGE */}
            <PrismicNextImage
              field={item.avatar}
              width={64}
              height={64}
              alt=""
              className="rounded-full h-16 w-16 object-cover mb-4"
            />
            <p className="text-base uppercase tracking-widest text-[#445152] font-poppin mb-5">
              {item.author_name}
            </p>
            <div className="font-inria-serif text-3xl  font-normal text-[#1E3B3D] capitalize max-w-xl mx-auto">
              <PrismicRichText field={item.testimonial_text} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
