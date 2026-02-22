import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

export type ExpertiseOverviewProps =
  SliceComponentProps<Content.ExpertiseOverviewSlice>;

const ExpertiseOverview: FC<ExpertiseOverviewProps> = ({ slice }) => {
  return (
    <section
      className="py-12 px-[30px] w-full bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <div className="max-w-[1440px] mx-auto w-full">

        <div className="text-center py-16">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-[#1E3B3D] font-sans uppercase tracking-wide">
                  {children}
                </h2>
              ),
            }}
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-stretch px-6 lg:px-10">

          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            {slice.primary.services_left?.map((item, i) => (
              <div
                key={`left-${i}`}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4"
              >
                <PrismicNextImage
                  field={item.icon}
                  className="w-8 h-8 mb-2"
                  sizes="32px"
                  loading="lazy"
                  alt=""
                />
                <p className="text-lg font-normal text-[#1E3B3D] font-sans">
                  {item.title}
                </p>
                <hr className="w-full mt-4 border-t border-gray-200" />
              </div>
            ))}
          </div>


          <div className="md:col-span-4 lg:col-span-3 flex items-center justify-center order-first md:order-none h-full">
            <PrismicNextImage
              field={slice.primary.center_image}
              alt=""
              sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 33vw"
              loading="lazy"
              className="w-full h-full object-cover rounded-md shadow-sm max-w-[280px] sm:max-w-[400px] md:max-w-full"
            />
          </div>


          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full space-y-8">

            {slice.primary.services_right?.map((item, i) => (
              <div
                key={`right-${i}`}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4"
              >
                <PrismicNextImage
                  field={item.icon}
                  className="w-8 h-8 mb-2"
                  sizes="32px"
                  loading="lazy"
                  alt=""
                />
                <p className="text-xl font-sans font-normal text-[#1E3B3D]">
                  {item.title}
                </p>
                <hr className="w-full border-t mt-6 border-gray-200" />
              </div>
            ))}


            <div className="text-base text-[#445152] font-poppins leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>


            <div>
              <PrismicNextLink
                field={slice.primary.primary_cta}
                className="inline-block px-8 py-3 text-sm font-medium text-white bg-[#F6784F] rounded-md hover:bg-[#e0643d] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseOverview;

