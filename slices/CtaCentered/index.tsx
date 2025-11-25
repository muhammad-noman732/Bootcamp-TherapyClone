import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type CtaCenteredProps = SliceComponentProps<Content.CtaCenteredSlice>;

const CtaCentered: FC<CtaCenteredProps> = ({ slice }) => {
  return (
    <section
      className="bg-[#EEDE96] py-20 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/*  Center Content */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="text-3xl md:text-5xl  tracking-wide font-sans font-normal leading-normal uppercase text-center">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="mt-4 text-base font-poppins font-normal text-center">
          <PrismicRichText field={slice.primary.description} />
        </div>

        {/*  BUTTON — Poppins, background + border #F6784F */}
        {slice.primary.primary_button && (
          <PrismicNextLink
            field={slice.primary.primary_button}
            className="
              inline-block
              mt-8
              bg-[#F6784F]
              border border-[#F6784F]
              text-white
              font-poppins font-normal
              text-base leading-[19.2px]
              px-8 py-3
              rounded-md
              transition-all
              hover:bg-[#e06941]
              hover:border-[#e06941]
            "
          />
        )}
      </div>
    </section>
  );
};

export default CtaCentered;
