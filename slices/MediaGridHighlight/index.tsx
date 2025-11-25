import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `MediaGridHighlight`.
 */
export type MediaGridHighlightProps =
  SliceComponentProps<Content.MediaGridHighlightSlice>;

/**
 * Component for "MediaGridHighlight" Slices.
 */
const MediaGridHighlight: FC<MediaGridHighlightProps> = ({ slice }) => {
  const mediaItems = slice.primary.media_items || [];
  const [image1, image2, image3, image4] = mediaItems;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#E7E8EB] py-24 px-[30px]"
    >
      <div className="max-w-7xl mx-auto space-y-4">
        {/* TOP ROW - Fixed widths */}
        <div className="grid gap-6 items-start sm:grid-cols-2 lg:grid-cols-12">
          {/* Image 1 */}
          <div className="w-full h-[250px] lg:h-full overflow-hidden sm:col-span-1 lg:col-span-4">
            {image1 && (
              <PrismicNextImage
                field={image1.media}
                className="w-full h-full object-cover"
                alt=""
              />
            )}
          </div>

          {/* Image 2 */}
          <div className="w-full h-[250px] lg:h-full overflow-hidden sm:col-span-1 lg:col-span-4 shadow-md">
            {image2 && (
              <PrismicNextImage
                field={image2.media}
                className="w-full h-full object-cover"
                alt=""
              />
            )}
          </div>

          {/* Title/Heading - Takes remaining space */}
          <div className="flex items-start justify-start pt-6 lg:pt-0 sm:col-span-2 lg:col-span-4">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-3xl md:text-5xl md:px-7 font-normal font-sans text-[#1E3B3D] tracking-normal leading-tight text-left uppercase ">
                    {children}
                  </h1>
                ),
              }}
            />
          </div>
        </div>

        {/* BOTTOM ROW - Fixed widths */}
        <div className="grid gap-4 items-center sm:grid-cols-2 lg:grid-cols-12">
          {/* CTA */}
          <div className="w-full flex items-center justify-start sm:col-span-2 lg:col-span-5">
            {slice.primary.ctalinkimage && (
              <PrismicNextLink
                field={slice.primary.cta_link}
                className="inline-block hover:opacity-80 transition"
              >
                <PrismicNextImage field={slice.primary.ctalinkimage} alt="" />
              </PrismicNextLink>
            )}
          </div>

          {/* Image 3 */}
          <div className="w-full h-[220px] lg:h-[240px] overflow-hidden sm:col-span-1 lg:col-span-3">
            {image3 && (
              <PrismicNextImage
                field={image3.media}
                className="w-full h-full object-cover"
                alt=""
              />
            )}
          </div>

          {/* Image 4 */}
          <div className="w-full h-[220px] lg:h-[240px] overflow-hidden sm:col-span-1 lg:col-span-4 shadow-md">
            {image4 && (
              <PrismicNextImage
                field={image4.media}
                className="w-full h-full object-cover"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGridHighlight;
