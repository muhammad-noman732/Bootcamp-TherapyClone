"use client";

import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

export type InformationWithImageGridProps =
  SliceComponentProps<Content.InformationWithImageGridSlice>;

const InformationWithImageGrid: FC<InformationWithImageGridProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#1E3B3D] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ---------- Intro Paragraph ---------- */}
        {slice.primary.introtext && (
          <p className="font-poppins text-base leading-7 text-gray-200 max-w-4xl mx-auto text-center">
            {slice.primary.introtext}
          </p>
        )}

        {/* ---------- Section Content ---------- */}
        <div className="space-y-14">
          {slice.primary.sections?.map((item, idx) => (
            <div key={idx} className="space-y-6">
              <PrismicRichText
                field={item.section_title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-[#EEDE96] font-poppins text-xl md:text-2xl font-semibold tracking-wide uppercase">
                      {children}
                    </h2>
                  ),
                }}
              />

              <PrismicRichText
                field={item.section_content}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-300 font-poppins leading-relaxed max-w-5xl">
                      {children}
                    </p>
                  ),
                  listItem: ({ children }) => (
                    <ol className="ml-6 list-disc text-gray-300">{children}</ol>
                  ),
                }}
              />
            </div>
          ))}
        </div>

        {/* ---------- Image Grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Left column: single image */}
          <div className="space-y-6">
            {slice.primary.images?.slice(0, 1).map((item, idx) => (
              <PrismicNextImage
                key={idx}
                field={item.image}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            ))}
          </div>

          {/* Right column: remaining images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {slice.primary.images?.slice(1).map((item, idx) => (
              <PrismicNextImage
                key={idx}
                field={item.image}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationWithImageGrid;
