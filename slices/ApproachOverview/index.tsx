import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type ApproachOverviewProps =
  SliceComponentProps<Content.ApproachOverviewSlice>;

const ApproachOverview: FC<ApproachOverviewProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="
        w-full py-[80px] sm:py-[100px]
        px-[30px]
        bg-[linear-gradient(360deg,#EEDE96_50%,#FFFFFF_100%)]
      "
    >
      <div className="w-full max-w-7xl mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className="order-2 lg:order-1 flex flex-col justify-start text-center lg:text-left">

            <div className="md:max-w-3xl mb-10 mx-auto lg:mx-0">
              <PrismicRichText
                field={slice.primary.intro_title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1E3B3D] uppercase font-sans tracking-wider">
                      {children}
                    </h2>
                  ),
                }}
              />

              <PrismicRichText
                field={slice.primary.intro_description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-[#445152] font-normal font-poppin text-sm sm:text-base leading-snug mt-4">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>


            <div className="bg-white p-5 rounded-md mt-7 h-auto">
              <PrismicRichText
                field={slice.primary.subheading}
                components={{
                  heading4: ({ children }) => (
                    <h4 className="text-xl sm:text-2xl mb-8 font-normal text-[#1E3B3D] leading-wider uppercase font-sans pb-2 text-center lg:text-left">
                      {children}
                    </h4>
                  ),
                }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {slice.primary.expectation_items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row pt-4 border-t border-[#C3C7C8] space-x-2 justify-center lg:justify-start"
                  >

                    <p className="text-xl font-bold text-[#445152]">
                      {item.item_number}
                    </p>


                    <PrismicRichText
                      field={item.item_text}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-sm sm:text-base text-[#445152] font-normal font-poppin">
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


          <div className="order-1 lg:order-2 flex items-center justify-center">
            <PrismicNextImage
              field={slice.primary.side_image}
              alt=""
              className="w-[280px] sm:w-[350px] md:w-[400px] h-auto md:h-[530px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachOverview;

