import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

export type HalfMediaContentInfoProps =
  SliceComponentProps<Content.HalfMediaContentInfoSlice>;

const HalfMediaContentInfo: FC<HalfMediaContentInfoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white flex justify-center"
    >
      <div className="w-full max-w-[1440px] px-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* ---------- Left Image ---------- */}
          <div className="flex">
            <PrismicNextImage
              field={slice.primary.media}
              className="w-[645px] h-[645px] object-cover"
              alt=""
            />
          </div>

          {/* ---------- Right Content ---------- */}
          <div className="flex flex-col justify-between h-[645px] space-y-6">
            <div className="space-y-6">
              {/* Pretitle */}
              <PrismicRichText
                field={slice.primary.pretitle}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-base uppercase font-poppin tracking-wide text-[#F6784F] font-normal">
                      {children}
                    </p>
                  ),
                }}
              />

              {/* Title + Subtitle */}
              <div className="text-[#1E3B3D] max-w-md">
                <h1 className="font-sans text-5xl tracking-widest font-normal uppercase">
                  <PrismicRichText
                    field={slice.primary.title}
                    components={{
                      heading1: ({ children }) => <>{children}</>,
                    }}
                  />

                  <span className="text-[#F6784F] font-hurricane text-5xl">
                    <PrismicRichText
                      field={slice.primary.subtitle}
                      components={{
                        paragraph: ({ children }) => <>{children}</>,
                      }}
                    />
                  </span>
                </h1>
              </div>
            </div>

            {/* ---------- Info Blocks ---------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-30 gap-10">
              {slice.primary.info_blocks?.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <PrismicRichText
                    field={item.block_title}
                    components={{
                      heading4: ({ children }) => (
                        <h4 className="text-[#1E3B3D] font-normal text-xl uppercase">
                          {children}
                        </h4>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={item.block_content}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-gray-700 font-poppins text-base leading-relaxed">
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

export default HalfMediaContentInfo;
