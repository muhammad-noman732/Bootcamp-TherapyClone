"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `MediaEmbed2`.
 */
export type MediaEmbed2Props = SliceComponentProps<Content.MediaEmbed2Slice>;

/**
 * Component for "MediaEmbed2" Slices.
 */
const MediaEmbed2: FC<MediaEmbed2Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="
        w-full
        max-w-[1440px]
        mx-auto
        px-[120px]
        py-16
        text-black
        lg:px-[120px]
        md:px-16
        sm:px-6
      "
    >
      {/* Top Heading */}
      <div className="mb-6">
        <PrismicRichText
          field={slice.primary.top_heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-[28px] font-sans font-normal uppercase leading-normal">
                {children}
              </h1>
            ),
           }}
        />
      </div>

      {/* Paragraph */}
      {slice.primary.paragraph && (
        <p className="text-base  leading-normal font-normal font-poppin mb-6">
          {slice.primary.paragraph}
        </p>
      )}

      {/* List Items */}
      <ul className="list-disc ml-6 mb-10 space-y-2">
        {slice.primary.items?.map((item, i) => (
          <li key={i} className="opacity-80 font-poppin text-base leading-normal">
            {item.item}
          </li>
        ))}
      </ul>

     {/* Paragraph */}
      {slice.primary.paragraph2 && (
        <p className="text-base  leading-normal font-normal font-poppin mb-6">
          {slice.primary.paragraph}
        </p>
      )}

      {/* Main Media Image */}
      {slice.primary.meidaimage && (
        <div className="w-full flex justify-center px-[30px] mb-12">
          <PrismicNextImage
            field={slice.primary.meidaimage}
            className=" w-full"
            alt=""
          />
        </div>
      )}

        <div className="px-20 py-2">
           <PrismicRichText
          field={slice.primary.heading2}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-[28px] font-sans  font-normal uppercase leading-normal">
                {children}
              </h2>
            ),
           }}
        />
           {slice.primary.content && (
          <p className="leading-7 text-base font-normal font-poppin  text-[#445152]">{slice.primary.content}</p>
        )}

        </div>
       
      {/* Extra Content Blocks */}
        <div className="space-y-6 px-[30px] bg-[#445152]">
       
        {slice.primary.bgcontent && (
          <p className="p-[52px] font-poppin font-normal text-[18px] leading-normal  text-white">{slice.primary.bgcontent}</p>
        )}
      </div>

      
      <div className="px-20 py-7">
         {slice.primary.bgcontent && (
          <p className=" text-base  font-poppin font-normal text-[18px] leading-normal  text-[#445152]">{slice.primary.endcontent}</p>
        )}
      </div>
         
      
    </section>
  );
};

export default MediaEmbed2;
