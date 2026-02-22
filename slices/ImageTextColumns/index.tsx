import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

export type ImageTextColumnsProps =
  SliceComponentProps<Content.ImageTextColumnsSlice>;

const ImageTextColumns: FC<ImageTextColumnsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full flex justify-center py-10 sm:py-16 md:py-24 lg:py-28"
    >

      <div className="relative w-full max-w-[1440px]">

        <div className="relative">
          <PrismicNextImage
            field={slice.primary.main_image}
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-[#1E3B3D] opacity-50"></div>
        </div>


        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center">

          <div className="py-3 sm:py-4">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-inter font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[44px] max-w-[90%] md:max-w-[625px] text-white uppercase leading-snug md:leading-[55px] py-2">
                    {children}
                  </h2>
                ),
              }}
            />
          </div>


          <div className="max-w-[90%] md:max-w-[868px] py-2">
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-poppins font-normal text-xs sm:text-sm md:text-base lg:text-[16px] text-[#C3C7C8] leading-5 sm:leading-6 md:leading-[24px]">
                    {children}
                  </p>
                ),
              }}
            />
          </div>


          <div className="py-4 sm:py-6">
            <PrismicNextLink
              field={slice.primary.button_link}
              className="inline-block font-poppins font-medium text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 md:leading-[19px] text-white bg-[#F6784F] hover:bg-[#f36c42] px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextColumns;

