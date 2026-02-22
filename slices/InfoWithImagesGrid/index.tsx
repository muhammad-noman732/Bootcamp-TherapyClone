import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

export type InfoWithImageSlice =
  SliceComponentProps<Content.InfoWithImagesGridSlice>;

const InformationWithImageGrid: FC<InfoWithImageSlice> = (props) => {
  const { slice } = props;
  const { primary } = slice;
  const images = primary.images || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 md:px-[120px] py-16"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {primary.introtext && (
          <p className="font-poppins text-base md:text-lg leading-relaxed text-[#445152] max-w-5xl">
            {primary.introtext}
          </p>
        )}

        <div className="space-y-12">
          {primary.sections.map((item, idx) => (
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

              <div className="pl-0 md:pl-6">
                <PrismicRichText
                  field={item.section_content}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-[#445152] font-poppins text-base md:text-lg leading-relaxed mb-4 last:mb-0">
                        {children}
                      </p>
                    ),
                    list: ({ children }) => (
                      <ul className="list-disc pl-5 space-y-2 text-[#445152] font-poppins text-base md:text-lg mb-4">
                        {children}
                      </ul>
                    ),
                    oList: ({ children }) => (
                      <ol className="list-decimal pl-5 space-y-2 text-[#445152] font-poppins text-base md:text-lg mb-4">
                        {children}
                      </ol>
                    ),
                    listItem: ({ children }) => <li>{children}</li>,
                    oListItem: ({ children }) => <li>{children}</li>,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12 items-stretch">
          {images.length > 0 && images[0] && (
            <div className="lg:w-2/5 w-full shrink-0">
              <div className="h-[400px] sm:h-[500px] lg:h-full w-full overflow-hidden shadow-xl rounded-lg">
                <PrismicNextImage
                  field={images[0].image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-6 flex-1">
              {images.slice(1).map((item, idx) => (
                <div
                  key={idx}
                  className="h-48 sm:h-64 lg:h-full min-h-[180px] w-full overflow-hidden shadow-lg rounded-lg"
                >
                  <PrismicNextImage
                    field={item.image}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InformationWithImageGrid;

