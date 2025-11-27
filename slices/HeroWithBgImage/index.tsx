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
      className="relative w-full h-[600px] md:h-[780px] lg:h-[780px] overflow-hidden"
    >

      <div className="absolute inset-0 w-full h-full z-0">
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          sizes="100vw"
          priority
          quality={100}
          className="object-cover"
          alt=""
        />
      </div>

      <div
        className="absolute z-10 w-full h-1/2 left-1/2 -translate-x-1/2 bottom-0"
        style={{
          background: "linear-gradient(360deg, #1E3B3D 32%, rgba(30, 59, 61, 0) 100%)",
        }}
      ></div>

      <div className="absolute z-20 flex flex-col justify-end items-center text-center inset-x-0 bottom-0 pb-40"> {/* Adjusted for absolute bottom positioning */}
        <div className="max-w-[1440px] w-full px-4">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EEDE96] tracking-widest uppercase mb-1 leading-none px-4 md:px-0">
                  {children}
                </h1>
              ),
            }}
          />

          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-sm md:text-base lg:text-lg max-w-[600px] w-full text-white opacity-80 px-4 md:px-0 mx-auto">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWithBgImage;