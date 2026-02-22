import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


export type MediaEmbed2Props = SliceComponentProps<Content.MediaEmbed2Slice>;


const MediaEmbed2: FC<MediaEmbed2Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] py-12 md:py-16 text-black"
    >

      <div className="mb-8">
        <PrismicRichText
          field={slice.primary.top_heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-2xl md:text-[28px] font-sans font-normal uppercase leading-tight md:leading-normal">
                {children}
              </h1>
            ),
          }}
        />
      </div>


      {slice.primary.paragraph && (
        <p className="text-base leading-relaxed font-normal font-poppin mb-6">
          {slice.primary.paragraph}
        </p>
      )}


      <ul className="list-disc ml-6 mb-10 space-y-3">
        {slice.primary.items?.map((item, i) => (
          <li
            key={i}
            className="opacity-90 font-poppin text-base leading-relaxed"
          >
            {item.item}
          </li>
        ))}
      </ul>


      {slice.primary.paragraph2 && (
        <p className="text-base leading-relaxed font-normal font-poppin mb-8">
          {slice.primary.paragraph2}
        </p>
      )}


      {slice.primary.meidaimage && (
        <div className="w-full flex justify-center mb-12">
          <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
            <PrismicNextImage
              field={slice.primary.meidaimage}
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
        </div>
      )}


      <div className="px-0 md:px-10 lg:px-20 py-4 mb-10">
        <PrismicRichText
          field={slice.primary.heading2}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-2xl md:text-[28px] font-sans font-normal uppercase leading-tight md:leading-normal mb-4">
                {children}
              </h2>
            ),
          }}
        />
        {slice.primary.content && (
          <p className="leading-relaxed text-base font-normal font-poppin text-[#445152]">
            {slice.primary.content}
          </p>
        )}
      </div>


      <div className="bg-[#445152] rounded-2xl overflow-hidden shadow-inner">
        {slice.primary.bgcontent && (
          <div className="p-6 sm:p-10 md:p-[52px]">
            <p className="font-poppin font-normal text-sm md:text-base lg:text-[18px] leading-relaxed text-white text-center italic">
              {slice.primary.bgcontent}
            </p>
          </div>
        )}
      </div>


      <div className="px-0 md:px-10 lg:px-20 py-10">
        {slice.primary.endcontent && (
          <p className="text-base font-poppin font-normal leading-relaxed text-[#445152]">
            {slice.primary.endcontent}
          </p>
        )}
      </div>
    </section>
  );
};

export default MediaEmbed2;

