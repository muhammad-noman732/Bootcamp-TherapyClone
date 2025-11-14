import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `InfoGrid`.
 */
export type InfoGridProps = SliceComponentProps<Content.InfoGridSlice>;

/**
 * Component for "InfoGrid" Slices.
 */
const InfoGrid: FC<InfoGridProps> = ({ slice }) => {
  const items = slice.primary.items ?? [];
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3, 5);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-10 px-6 md:px-16  bg-[linear-gradient(90deg,rgba(246,120,79,0)_0%,rgba(246,120,79,0.08)_12%,rgba(246,120,79,0.28)_25%,rgba(246,120,79,0.42)_38%,rgba(246,120,79,0.5)_50%,rgba(246,120,79,0.42)_63%,rgba(250,186,165,0.28)_75%,rgba(246,120,79,0.08)_88%,rgba(246,120,79,0)_100%)]"
    
    >
      {/* Heading */}
      <div className="text-center mb-3">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2
                className="md:text-9xl leading-tight uppercase font-sans font-normal bg-linear-to-b from-[#F6784F99] to-transparent bg-clip-text text-transparent"
              >
                {children}
              </h2>
            ),
          }}
        />
      </div>

      {/* Subheading */}
      <div className="text-center mb-8">
        <PrismicRichText
          field={slice.primary.subheading}
          components={{
            heading3: ({ children }) => (
              <h3 className="font-sans font-normal text-[#1E3B3D] md:text-5xl text-4xl leading-tight uppercase tracking-[0.2em]">
                {children}
              </h3>
            ),
          }}
        />
      </div>

      {/* Info Grid */}
      <div className="mx-auto flex flex-col items-center gap-3">
        {/* Top row */}
        {firstRow.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-10 max-w-[1400px] mx-auto">
            {firstRow.map((item, index) => (
              <div
                key={`top-${index}`}
                className={[
                  "w-[340px] bg-white px-6 text-center shadow-[0_25px_45px_rgba(13,30,38,0.12)] md:px-7",
                  index === 1 ? "md:mt-10" : "",
                  index === 1 ? "py-6 min-h-[184px]" : "py-8 min-h-[204px]",
                ].join(" ")}
              >
                {item.item_title && (
                  <h3 className="font-sans text-[#1E3B3D] text-xl font-semibold uppercase tracking-wider whitespace-nowrap">
                    {item.item_title}
                  </h3>
                )}
                {item.item_description && (
                  <div className="mt-3 font-poppin text-base font-normal leading-relaxed text-[#445152]">
                    <PrismicRichText field={item.item_description} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom row */}
        {secondRow.length > 0 && (
          <div className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-center md:gap-4">
            {secondRow.map((item, index) => (
              <div
                key={`bottom-${index}`}
                className={[
                  "w-[340px] bg-white px-7 text-center shadow-[0_25px_45px_rgba(13,30,38,0.12)]",
                  index === 1 ? "md:ml-6" : "",
                  index === 0 ? "py-5 min-h-[170px]" : "py-10 min-h-[228px]",
                ].join(" ")}
              >
                {item.item_title && (
                  <h3 className="font-sans text-[#1E3B3D] text-xl font-semibold uppercase tracking-wider whitespace-nowrap">
                    {item.item_title}
                  </h3>
                )}
                {item.item_description && (
                  <div className="mt-4 font-poppin text-base font-normal leading-relaxed text-[#445152]">
                    <PrismicRichText field={item.item_description} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoGrid;
