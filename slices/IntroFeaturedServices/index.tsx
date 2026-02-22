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
      className="bg-[#1E3B3D] text-white relative overflow-hidden"
    >

      {slice.primary.bgimage && (
        <div className="absolute bottom-0 left-0  h-[400px] opacity-20 pointer-events-none z-0">
          <PrismicNextImage
            field={slice.primary.bgimage}


            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 md:items-stretch items-center mb-24">

          <div className="overflow-hidden md:h-full">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>


          <div className="space-y-6 md:pl-16 pt-10 md:pt-0 md:h-full flex flex-col">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className="font-sans font-normal text-white uppercase text-[45.3px] leading-[55.2px] tracking-normal">
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


            <div className="pt-8 mt-auto">
              <PrismicNextLink
                field={slice.primary.primary_cta}
                className="inline-block bg-[#EEDE96] text-[#1E3B3D] font-semibold py-3 px-8 rounded-none hover:bg-[#d6c79a] transition text-sm uppercase tracking-wider"
              />
            </div>
          </div>
        </div>


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


        <section className="flex justify-center items-center w-full py-6 mb-[130px]">
          <div className="max-w-4xl w-full px-6">
            <div className="grid md:grid-cols-2 gap-19 text-center justify-items-center">
              {slice.primary.services.map((item, i) => {
                const isLastItem = i === slice.primary.services.length - 1;
                const isOddTotal = slice.primary.services.length % 2 !== 0;
                const shouldCenter = isLastItem && isOddTotal;

                return (
                  <div
                    key={i}
                    className={`flex flex-col items-start text-left max-w-md w-full ${shouldCenter ? "md:col-span-2 md:mx-auto" : ""
                      }`}
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
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default IntroFeaturedServices;

