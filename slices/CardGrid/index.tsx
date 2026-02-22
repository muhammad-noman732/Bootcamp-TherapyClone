import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type CardGridProps = SliceComponentProps<Content.CardGridSlice>;

const CardGrid: FC<CardGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full px-4 md:px-8 py-12"
    >

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {slice.primary.cards.map((item, idx) => (
          <article key={idx} className="flex flex-col w-full">

            <div className="w-full h-56 overflow-hidden rounded-md">
              <PrismicNextImage
                field={item.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>


            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                {item.tag}
              </span>

              <span className="text-sm text-gray-500">{item.date}</span>
            </div>


            <div className="mt-2">
              <PrismicRichText
                field={item.title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      {children}
                    </h3>
                  ),
                  paragraph: ({ children }) => (
                    <p className="text-lg font-semibold text-gray-900 leading-snug">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </article>
        ))}
      </div>


      <div className="flex flex-col items-center gap-4 mt-12">
        <p className="text-gray-600 text-sm">
          {slice.primary.current_page} / {slice.primary.total_pages}
        </p>

        <PrismicNextLink
          field={slice.primary.next_page_link}
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md shadow hover:bg-yellow-500 transition"
        >
          Next →
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default CardGrid;

