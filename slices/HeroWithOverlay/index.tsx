import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeroWithOverlayProps =
  SliceComponentProps<Content.HeroWithOverlaySlice>;

const HeroWithOverlay: FC<HeroWithOverlayProps> = ({ slice }) => {
  const { media, subtitle, title, follow_label, description } = slice.primary;
  if (!media.url) return null;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full min-h-[750px] md:min-h-screen"
    >

      <PrismicNextImage
        field={media}
        fill={true}
        className="object-cover"
        priority={true}
        alt=""
      />


      <div className="absolute inset-0 z-10 bg-linear-to-t from-[#1E3B3D] from-33% to-[#1E3B3D]/0 to-100%" />


      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 text-white text-center gap-8 md:px-8 max-w-[1440px] mx-auto">

        <div className="flex flex-col items-center justify-center gap-4 md:items-center md:text-center">
          <PrismicRichText
            field={subtitle}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-[28px] leading-snug md:text-6xl font-light text-white">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-[42px] leading-tight md:text-8xl mt-1 font-normal uppercase tracking-wide text-[#EEDE96] font-italiana">
                  {children}
                </h1>
              ),
            }}
          />
        </div>


        <div className="flex flex-col gap-6 px-4 mx-auto w-full md:flex-row md:items-start md:justify-between">
          {follow_label && (
            <div className="md:flex-1 md:text-left md:pt-6 mb-5 md:mb-0">
              <p className="text-lg md:text-xl font-light text-white md:max-w-[220px]">
                {follow_label}
              </p>
            </div>
          )}
          {description && (
            <div className="md:flex-1 md:text-right mb-5 md:mb-0">
              <PrismicRichText
                field={description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-base md:text-xl font-light text-white md:ml-auto md:max-w-md">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          )}
        </div>
      </div>


      <div className="block md:hidden h-20" />
    </section>
  );
};

export default HeroWithOverlay;

