import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type FeaturedArticleWithListProps =
  SliceComponentProps<Content.FeaturedArticleWithListSlice>;

const FeaturedArticleWithList: FC<FeaturedArticleWithListProps> = ({
  slice,
}) => {
  const featured = slice.primary.featured_article?.[0];
  const articles = slice.primary.article_list || [];

  return (
    <section
      className="py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 px-4 md:px-10 xl:px-16">

        {/*  LEFT SECTION */}
        <div className="relative w-full lg:w-[55%] xl:w-[50%]">
          <PrismicNextImage
            field={featured?.image}
            className="object-cover w-full h-80 sm:h-[360px] lg:h-[380px] rounded-md"
            alt=""
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute 
              bg-[#EEDE96]
              shadow-md
              p-4 sm:p-6 lg:p-8
              w-[calc(100%-2rem)] sm:w-[340px] lg:w-[360px]
              left-1/2 lg:left-6
              -translate-x-1/2 lg:translate-x-0
              bottom-[-65px] sm:bottom-20 lg:bottom-[-100px]
            "
          >
            <div className="flex items-center gap-3 text-sm mb-1">
              <span className="inline-flex items-center px-3 py-1 rounded text-white font-semibold bg-[#F6784F] font-poppin text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {featured?.category || "Nutrition"}
              </span>

              <span className="text-[#445152] text-xs sm:text-sm lg:text-base font-poppin">
                {featured?.date || "May 10, 2024"}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1E3B3D] leading-snug font-sans mt-2 uppercase">
              <PrismicRichText field={featured?.title} />
            </h3>
          </div>
        </div>

        {/*  RIGHT SECTION */}
        <div className="space-y-10 w-full lg:w-[45%] xl:w-[50%] pt-16 lg:pt-0">
          {articles.map((item, index) => (
            <div key={index}>
              {/*  CATEGORY + DATE */}
              <div className="flex items-center gap-3 text-sm mb-2 flex-wrap">
                <span className="px-2 py-1 bg-[#EEDE96] text-[#1E3B3D] font-poppin text-lg sm:text-xl font-semibold">
                  {item.category}
                </span>

                <span className="text-[#445152] text-lg sm:text-xl tracking-wider font-poppin font-semibold">
                  {item.date}
                </span>
              </div>

              {/*  TITLE */}
              <h4 className="text-[#1E3B3D] font-poppin text-lg sm:text-2xl uppercase leading-snug hover:text-[#555] transition-colors">
                <PrismicRichText field={item.description} />
              </h4>

              {/*  HR WITH 20px TOP SPACE (mt-5) */}
              {index !== articles.length - 1 && (
                <hr className="mt-5 border-t border-[#445152]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticleWithList;
