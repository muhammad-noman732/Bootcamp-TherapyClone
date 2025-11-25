import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `InformationalFeatures`.
 */
export type InformationalFeaturesProps =
  SliceComponentProps<Content.InformationalFeaturesSlice>;

/**
 * Component for "InformationalFeatures" Slices.
 */
const InformationalFeatures: FC<InformationalFeaturesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 sm:py-12 md:py-16 px-4 md:px-9 lg:px-0"
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* ---------- Main Heading ---------- */}
        <PrismicRichText
          field={slice.primary.section_heading}
          components={{
            heading2: ({ children }) => (
              <h2
                className="
                text-3xl sm:text-4xl md:text-5xl
                lg:text-6xl
                font-normal uppercase text-[#1E3B3D]
                mb-8 sm:mb-10 md:mb-12
                tracking-wide leading-wider font-sans
                text-center md:text-left
              "
              >
                {children}
              </h2>
            ),
          }}
        />

        {/* ---------- Two-Column Layout ---------- */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          {/* ----- Left Column: Image ----- */}
          <div className="lg:w-1/2">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="
                w-full h-[280px] sm:h-[340px] md:h-[420px]
                lg:h-[420px] object-cover rounded-lg
              "
              alt=""
            />
          </div>

          {/* ----- Right Column: Subheading + Features ----- */}
          <div className="lg:w-1/2">
            {/* Sub-heading */}
            <PrismicRichText
              field={slice.primary.section_subheading}
              components={{
                heading3: ({ children }) => (
                  <h3
                    className="
                    text-xl sm:text-2xl
                    font-normal text-[#1E3B3D] uppercase tracking-wide
                    mb-8 sm:mb-12 md:mb-16
                    font-sans text-center md:text-left
                  "
                  >
                    {children}
                  </h3>
                ),
              }}
            />

            {/* Features Grid */}
            <div
              className="
              grid grid-cols-1
              sm:grid-cols-2
              gap-x-6 md:gap-x-10
              gap-y-6 md:gap-y-10
              mt-6 sm:mt-8 md:mt-30 
            "
            >
              {slice.primary.features.map((item, index) => (
                <div key={index}>
                  {/* Feature Title */}
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#F6784F] mt-1 mr-3 shrink-0"></div>
                    <p
                      className="
                      text-lg sm:text-xl
                      leading-none font-normal font-sans uppercase text-[#1E3B3D]
                    "
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* Feature Description */}
                  <PrismicRichText
                    field={item.description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-[#445152] text-sm sm:text-base ml-4">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationalFeatures;
