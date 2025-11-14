import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type IntroFeaturedServicesProps =
  SliceComponentProps<Content.IntroFeaturedServicesSlice>;

const IntroFeaturedServices: FC<IntroFeaturedServicesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#1E3B3D] text-white relative"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* --- Top Section: Image and Content --- */}
        <div className="grid md:grid-cols-2 md:items-stretch items-center mb-24">
          {/* Left Image */}
          <div className="overflow-hidden md:h-full">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 md:pl-16 pt-10 md:pt-0 md:h-full flex flex-col">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-3xl lg:text-5xl font-normal text-white tracking-tighter uppercase">
                    {children}
                  </h1>
                ),
              }}
            />

            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-[#C3C7C8] leading-relaxed text-base pt-4">
                    {children}
                  </p>
                ),
              }}
            />

            {/* Features List */}
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm text-[#f7e8c3] font-normal pt-4">
              {slice.primary.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#F6784F] text-lg transform translate-y-px">
                    &bull;
                  </span>
                  <span className="text-white uppercase tracking-wider text-sm">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="pt-8 mt-auto">
              <PrismicNextLink
                field={slice.primary.primary_cta}
                className="inline-block bg-[#EEDE96] text-[#1E3B3D] font-semibold py-3 px-8 rounded-none hover:bg-[#d6c79a] transition text-sm uppercase tracking-wider"
              />
            </div>
          </div>
        </div>

        {/* --- Section Headline: Therapy Solutions --- */}
        <div className="text-center mb-16">
          <PrismicRichText
            field={slice.primary.section_headline}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-4xl md:text-5xl font-normal text-white tracking-normal font-sans uppercase">
                  {children}
                </h2>
              ),
            }}
          />
        </div>

        {/* --- Services Grid --- */}
        <section className="flex justify-center items-center w-full py-6">
          <div className="max-w-4xl w-full px-6">
            <div className="grid md:grid-cols-2 gap-19 text-center justify-items-center">
              {slice.primary.services.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start text-left max-w-md w-full"
                >
                  <hr className="w-full border-t border-white/30 mb-6" />
                  <div className="flex items-start">
                    <div className="shrink-0 mr-5 pt-1">
                      <PrismicNextImage
                        field={item.icon}
                        alt=""
                        className="w-10 h-10 text-[#f7e8c3]"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-medium mb-1 text-[#f7e8c3]">
                        {item.title}
                      </p>
                      <p className="text-gray-300 text-base leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <hr className="w-full border-t border-white/30 mt-7" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default IntroFeaturedServices;
