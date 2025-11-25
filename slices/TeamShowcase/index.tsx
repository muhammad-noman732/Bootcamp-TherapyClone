import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type TeamShowcaseProps = SliceComponentProps<Content.TeamShowcaseSlice>;

const TeamShowcase: FC<TeamShowcaseProps> = ({ slice }) => {
  return (
    <section
      className="py-30 my-20 px-6 md:px-20 min-h-screen text-center bg-[linear-gradient(180deg,#1E3B3D_0%,#C3C7C8_50%,#FFFFFF_100%)]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Overline */}
        {slice.primary.overline && (
          <p className="text-[#EEDE96] uppercase tracking-widest text-xl font-poppin font-normal mb-3">
            {slice.primary.overline}
          </p>
        )}

        {/* Title */}
        <div className="text-3xl md:text-6xl py-6 font-sans text-white mb-5 uppercase tracking-wider font-normal">
          <PrismicRichText field={slice.primary.title} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-14">
          {slice.primary.members.map((item, index) => (
            <div key={index} className="group">
              {/* IMAGE WITH HOVER EFFECT */}
              <div className="overflow-hidden rounded-md">
                <PrismicNextImage
                  field={item.photo}
                  alt=""
                  className="w-full h-[340px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Optional name + role (if exists in Prismic) */}
              {/* {item.name && (
                <p className="mt-4 text-lg font-semibold text-[#1E3B3D]">
                  {item.name}
                </p>
              )}
              {item.role && (
                <p className="text-[#445152] text-sm">
                  {item.role}
                </p>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
