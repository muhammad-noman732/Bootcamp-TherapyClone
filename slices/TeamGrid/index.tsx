import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

const TeamGrid: FC<TeamGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 px-6 bg-[linear-gradient(90deg,rgba(246,120,79,0)_0%,rgba(246,120,79,0.1)_13%,rgba(246,120,79,0.3)_25%,rgba(246,120,79,0.4)_38%,rgba(246,120,79,0.5)_50%,rgba(246,120,79,0.4)_63%,rgba(250,186,165,0.3)_75%,rgba(246,120,79,0.1)_88%,rgba(246,120,79,0)_100%)]"
    >

      <div className="max-w-[1440px] mx-auto w-full">

        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:px-10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E3B3D]">
            <PrismicRichText field={slice.primary.title} />
          </div>

          <PrismicNextLink
            field={slice.primary.view_all_link}
            className="bg-[#F6784F] text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-orange-600 transition font-poppin"
          />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {slice.primary.people.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full flex justify-center">
                <PrismicNextImage
                  field={item.photo}
                  className=" h-[212px] object-cover w-[217px]"
                  alt=""
                />
              </div>


              <div className="bg-white shadow-lg pt-8 pb-6 px-6 text-center -mt-10 relative w-full">

                <div className="absolute top-0 left-[0%] -translate-y-10 h-10 w-10 bg-white" />


                <div className="absolute top-0 right-[0%] -translate-y-10 h-10 w-10 bg-white" />


                <p className="font-semibold font-sans text-[#1E3B3D] uppercase tracking-wider text-xl">
                  {item.name}
                </p>


                <p className="text-base text-[#445152] mt-1 mb-3 font-poppin font-normal">
                  {item.role}
                </p>


                <div className="flex justify-center gap-6 flex-wrap">
                  {item.social_links.map((link, i) => (
                    <PrismicNextLink
                      key={i}
                      field={link}
                      className={
                        link.variant +
                        " text-base font-medium font-poppin text-[#F6784F] hover:text-[#F6784F]/80"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;

