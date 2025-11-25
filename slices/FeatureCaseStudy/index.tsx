import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

export type FeatureCaseStudyProps =
  SliceComponentProps<Content.FeatureCaseStudySlice>;

const FeatureCaseStudy: FC<FeatureCaseStudyProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[linear-gradient(180deg,#1E3B3D_0%,#C3C7C8_50%,#FFFFFF_100%)] py-16 px-4 sm:px-6"
    >
      {/* CONTAINER: max width 1440px, centered */}
      <div className="w-full max-w-[1440px] mx-auto space-y-8">
        {/* ---------- Title ---------- */}
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="font-sans max-w-full sm:max-w-3xl mx-auto font-normal text-4xl sm:text-5xl md:text-6xl leading-snug text-white uppercase text-center">
                {children}
              </h1>
            ),
          }}
        />

        {/* ---------- Subtitle / Description ---------- */}
        <PrismicRichText
          field={slice.primary.subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className="font-poppins text-white text-base sm:text-lg leading-6 max-w-full sm:max-w-2xl mx-auto opacity-90 text-center">
                {children}
              </p>
            ),
          }}
        />

        {/* ---------- Image ---------- */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-full max-w-[1380px]">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full h-auto sm:h-[550px] object-cover rounded-md"
              alt=""
            />
          </div>
        </div>

        {/* ---------- Meta Info Boxes ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-2 sm:px-0 max-w-[1380px] mx-auto">
          {slice.primary.meta_info.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EEDE96] text-center py-6 px-4 rounded-md"
            >
              <p className="font-poppins text-[#1E3B3D] text-xl font-semibold mb-2">
                {item.label}
              </p>
              <p className="font-poppins text-[#1E3B3D] text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCaseStudy;
