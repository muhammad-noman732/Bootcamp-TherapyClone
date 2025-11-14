import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PageHeader`.
 */
export type PageHeaderProps = SliceComponentProps<Content.PageHeaderSlice>;

/**
 * Component for "PageHeader" Slices.
 */
const PageHeader: FC<PageHeaderProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-30 px-6 text-center bg-linear-to-b from-[#EEDE96] to-transparent"
    >
      <div className="max-w-4xl py-10 mx-auto">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-4xl md:text-6xl font-normal  leading-wider uppercase text-[#1E3B3D]">
                {children}
              </h1>
            ), 
          }}
        />
      </div>
    </section>
  );
};

export default PageHeader;
