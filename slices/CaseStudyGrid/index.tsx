import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for CaseStudyGrid.
 */
export type CaseStudyGridProps = SliceComponentProps<Content.CaseStudyGridSlice>;

/**
 * Component for "CaseStudyGrid" Slices.
 */
const CaseStudyGrid: FC<CaseStudyGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full px-[30px] py-12"
    >
      {/* ✅ Added mx-auto to center on ultra-wide screens */}
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Heading */}
        {slice.primary.heading && (
          <div className="mb-10">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-4xl md:text-5xl font-normal text-[#1E3B3D] font-sans leading-wider tracking-widest uppercase">
                    {children}
                  </h2>
                ),
              }}
            />
          </div>
        )}

        {/* Grid of case studies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.primary.case_studies?.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <PrismicNextImage
                field={item.thumbnail}
                className="w-[413px] h-[350px] object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
