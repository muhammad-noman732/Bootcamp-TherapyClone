import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type FeatureListImageProps =
  SliceComponentProps<Content.FeatureListImageSlice>;

const FeatureListImage: FC<FeatureListImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#1E3B3D] text-white w-full"
    >
      {/* Content container */}
      <div className="max-w-[1440px] mx-auto px-[30px] py-16">
        {/* DESCRIPTION ABOVE EVERYTHING */}
        <div className="mb-10">
          <PrismicRichText
            field={slice.primary.section_description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-base sm:text-lg md:text-xl uppercase font-normal font-poppin leading-snug md:w-[725px]">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        {/* MAIN CONTENT ROW (Heading + Bullets vs Image) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between h-full">
            {/* Heading */}
            <PrismicRichText
              field={slice.primary.section_heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal font-poppin text-[#EEDE96] uppercase tracking-wide leading-snug mb-8">
                    {children}
                  </h2>
                ),
              }}
            />

            {/* Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 mt-5 md:mt-12 lg:mt-23 gap-x-12">
              {slice.primary.items?.map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  <div className="w-2 h-2 rounded-full bg-[#F6784F] mt-2 mr-3 shrink-0"></div>
                  <p className="text-sm sm:text-base font-normal uppercase tracking-wider font-poppin">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end items-start">
            <PrismicNextImage
              field={slice.primary.side_image}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureListImage;
