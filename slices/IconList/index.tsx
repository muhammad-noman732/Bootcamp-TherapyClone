import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `IconList`.
 */
export type IconListProps = SliceComponentProps<Content.IconListSlice>;

/**
 * Component for "IconList" Slices.
 */
const IconList: FC<IconListProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 md:px-20 lg:px-30 py-12"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="font-sans font-normal text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl leading-tight text-[#1E3B3D] uppercase">
                {children}
              </h2>
            ),
          }}
        />
      </div>

      {/* Icon List */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-8">
        {slice.primary.items?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center space-y-3 px-4 sm:px-0 ${
              (index + 1) % 2 !== 0 ? "sm:border-r sm:border-[#1E3B3D]/20" : ""
            } ${
              (index + 1) % 3 !== 0 && index < slice.primary.items.length - 1
                ? "lg:border-r lg:border-[#1E3B3D]/20"
                : ""
            }`}
          >
            {item.icon && (
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <PrismicNextImage
                  field={item.icon}
                  className="max-w-full max-h-full object-contain"
                  alt=""
                />
              </div>
            )}
            {item.label && (
              <p className="font-poppins text-[#445152] text-base md:text-lg">
                {item.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconList;
