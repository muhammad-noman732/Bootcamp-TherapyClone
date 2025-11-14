import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type FeaturedArticleProps =
  SliceComponentProps<Content.FeaturedArticleSlice>;

const FeaturedArticle: FC<FeaturedArticleProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[linear-gradient(180deg,#EEDE96_0%,rgba(238,222,150,0)_100%)] py-35 pb-32" 

    >
      <div className="relative max-w-[1440px] mx-auto">

        {/* Main Image */}
        <PrismicNextImage
          field={slice.primary.main_image}
          className="w-full h-[380px] md:h-[430px] lg:h-[450px] object-cover px-[30px]"
          alt=""
        />

        {/* Floating White Card */}
        <div
          className="
            absolute left-1/2 -bottom-45 -translate-x-1/2 
            w-[88%] md:w-[85%] lg:w-[70%] xl:w-[60%]
            bg-white p-8
            flex flex-col items-center text-center
          "
        >
          {/* Date + Category */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <p className="font-poppin text-[#F6784F] text-sm md:text-base">
              {slice.primary.publish_date}
            </p>

            <div className="w-px h-5 bg-[#C7C7C7]" />

            <p className="font-poppin text-[#F6784F] text-sm md:text-base">
              {slice.primary.category}
            </p>
          </div>

          {/* Title */}
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1
                  className="
                    font-sans text-[#1E3B3D]
                    text-2xl sm:text-3xl md:text-4xl lg:text-[43px]
                    max-w-[800px]   // prevents title from becoming too wide
                    mx-auto
                    leading-snug mb-4
                  "
                >
                  {children}
                </h1>
              ),
            }}
          />

          {/* Summary */}
          <PrismicRichText
            field={slice.primary.summary}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="
                    text-[#445152] font-poppin text-sm md:text-base leading-relaxed 
                    max-w-[750px] mx-auto  // centered & narrower than title
                  "
                >
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

export default FeaturedArticle;
