import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type HeroCtaProps = SliceComponentProps<Content.HeroCtaSlice>;

const HeroCta: FC<HeroCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="
        relative flex flex-col items-center justify-center 
        overflow-hidden py-20 text-center min-h-[750px]
      "
    >
      {/*  Background Image */}
      <PrismicNextImage
        field={slice.primary.background_media}
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
        alt=""
      />

      {/*  Overlay */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>

      {/*  Content */}
      <div className="flex flex-col items-center z-10 p-4 ">

        {/*  HEADLINE */}
        <PrismicRichText
          field={slice.primary.headline}
          components={{
            heading1: ({ children }) => (
              <h1
                className="
                  font-inter font-normal 
                  text-4xl tracking-wider
                  text-center uppercase text-white 
                   mb-4 max-w-xl
                   leading-snug
                "
              >
                {children}
              </h1>
            ),
          }}
        />

        {/*  SUBHEADLINE */}
        <PrismicRichText
          field={slice.primary.subheadline}
          components={{
            paragraph: ({ children }) => (
              <p
                className="
                  font-poppins font-normal 
                  text-base leading-6 
                  text-center text-white/90 
                  
                "
              >
                {children}
              </p>
            ),
          }}
        />

        {/* CTA BUTTON */}
        <PrismicNextLink
          field={slice.primary.primary_cta}
          className="
            bg-[#EEDE96] font-poppins font-normal 
            text-base leading-normal 
            text-center text-[#1E3B3D] 
            py-3 px-6 rounded inline-block 
            no-underline shadow-lg 
            hover:brightness-105 transition-all
            mt-10
          "
        >
          Book an appointment
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default HeroCta;
