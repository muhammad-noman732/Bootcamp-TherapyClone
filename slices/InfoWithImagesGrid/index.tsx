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
      className="px-[120px]"
    >
      <div className="max-w-6xl mx-auto space-y-6 p-3">
        {/* ---------- Intro Paragraph ---------- */}
        <p className="font-poppins text-base leading-7 text-gray-700 max-w-5xl">
          {slice.primary.introtext}
        </p>

        {/* ---------- Section Content ---------- */}
        <div className="space-y-16">
          {slice.primary.sections.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <PrismicRichText
                field={item.section_title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-[#1E3B3D] font-sans text-2xl md:text-3xl font-semibold tracking-wide uppercase">
                      {children}
                    </h2>
                  ),
                }}
              />

              <PrismicRichText
                field={item.section_content}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-[#445152] font-poppins ml-5 text-base md:text-lg leading-relaxed">
                      {children}
                    </p>
                  ),
                  list: ({ children }) => (
                    <ul className="list-disc ml-6 space-y-2 text-[#445152] font-poppins text-base md:text-lg">
                      {children}
                    </ul>
                  ),
                  listItem: ({ children }) => <ol>{children}</ol>,
                }}
              />
            </div>
          ))}
        </div>

        {/* ---------- Image Grid ---------- */}
        <div className="flex flex-col lg:flex-row gap-10 mt-12 items-start">
          {/* Left column: single tall image */}
          <div className="basis-2/5 flex-shrink-0">
            {slice.primary.images?.slice(0, 1).map((item, idx) => (
              <div
                key={idx}
                className="h-[420px] sm:h-[480px] md:h-[520px] w-full max-w-[600px] overflow-hidden shadow-lg mx-auto"
              >
                <PrismicNextImage
                  field={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right column: responsive stacked grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 flex-1">
            {slice.primary.images?.slice(1).map((item, idx) => (
              <div
                key={idx}
                className="h-40 sm:h-48 md:h-56 lg:h-60 w-full overflow-hidden shadow-lg"
              >
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationWithImageGrid;
