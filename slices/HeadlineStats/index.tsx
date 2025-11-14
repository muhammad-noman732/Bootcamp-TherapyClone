import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeadlineStatsProps = SliceComponentProps<Content.HeadlineStatsSlice>;

const HeadlineStats: FC<HeadlineStatsProps> = ({ slice }) => {
  const headlineText = slice.primary.headline?.[0]?.text || "";
  const words = headlineText.split(" ");
  const lastWord = words.pop();
  const secondLastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section
      className="w-full pt-30 px-[30px] bg-gradient-to-b from-[#EEDE96] to-white text-[#1E3B3D]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* ---------- Main Container ---------- */}
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Headline */}
        <div className="text-center md:text-left mb-10">
          <h1 className="font-sans font-semibold uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
            {firstPart}
          </h1>
          <h1 className="font-sans font-semibold uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
            {secondLastWord}{" "}
            <span className="text-[#F6784F] font-hurricane text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              {lastWord}
            </span>
          </h1>
        </div>

        {/* Supporting text */}
        <div className="flex justify-end mb-6 md:mb-8">
          <div className="tracking-normal max-w-md text-sm sm:text-base font-poppin text-left leading-relaxed">
            <PrismicRichText field={slice.primary.supporting_text} />
          </div>
        </div>

        {/* Subtext */}
        <div className="max-w-xl text-sm sm:text-base text-[#1E3B3D] uppercase font-sans mb-10">
          <PrismicRichText field={slice.primary.subtext} />
        </div>

        {/* Image + Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Image */}
          <div className="w-full">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-10 sm:gap-12">
            {slice.primary.stats.map((item, index) => {
              const isRight = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isRight ? "items-end text-right" : "items-start text-left"
                  }`}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3B3D] leading-none">
                    {item.stat_value}
                  </h2>
                  <p className="text-sm sm:text-base mt-2 text-[#445152] font-poppin leading-tight">
                    {item.stat_label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadlineStats;
