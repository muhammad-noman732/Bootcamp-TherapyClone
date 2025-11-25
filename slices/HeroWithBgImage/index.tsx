import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `HeroWithBgImage`.
 */
export type HeroWithBgImageProps =
  SliceComponentProps<Content.HeroWithBgImageSlice>;

/**
 * Component for "HeroWithBgImage" Slices.
 */
const HeroWithBgImage: FC<HeroWithBgImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[600px] md:h-[780px] lg:h-[900px] overflow-hidden"
    >
      {/* Background Image */}
      <PrismicNextImage
        field={slice.primary.background_image}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt=""
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(360deg, #1E3B3D 32%, rgba(30, 59, 61, 0) 100%)",
        }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col justify-end items-center text-center max-w-[1440px] mx-auto w-full h-[170px] top-[400px] md:top-[520px] px-4">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EEDE96] tracking-widest uppercase mb-2.5 leading-none px-4 md:px-0">
                {children}
              </h1>
            ),
          }}
        />

        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-sm md:text-base lg:text-lg max-w-[600px] w-full text-white opacity-80 px-4 md:px-0">
                {children}
              </p>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default HeroWithBgImage;
