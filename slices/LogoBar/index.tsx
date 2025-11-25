import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type LogoBarProps = SliceComponentProps<Content.LogoBarSlice>;

const LogoBar: FC<LogoBarProps> = ({ slice }) => {
  const logos = [...slice.primary.logos, ...slice.primary.logos];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-6 px-6 sm:px-10 relative overflow-hidden bg-transparent"
    >
      <div className="w-full mx-auto relative">
        {/* Background heading */}
        {slice.primary.headline && (
          <PrismicRichText
            field={slice.primary.headline}
            components={{
              heading2: ({ children }) => (
                <h2
                  className="absolute inset-0 flex items-center justify-center font-sans font-normal 
                text-[56px] leading-[62px] sm:text-[92px] sm:leading-[100px] 
                lg:text-[128px] lg:leading-[136px] 
                text-center uppercase text-gray-300 pointer-events-none z-0"
                >
                  {children}
                </h2>
              ),
            }}
          />
        )}

        {/* Auto-scrolling marquee */}
        <div className="marquee relative z-10 py-8">
          <div className="track">
            {logos.map((item, index) => (
              <div
                key={`${item.logo_image.id}-${index}`}
                className="logo-item shrink-0 flex items-center justify-center"
              >
                <PrismicNextImage
                  field={item.logo_image}
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
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

export default LogoBar;
