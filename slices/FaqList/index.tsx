"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

export type FaqListProps = SliceComponentProps<Content.FaqListSlice>;

const FaqList: FC<FaqListProps> = ({ slice }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-6 sm:px-10 lg:px-20 xl:px-[150px] bg-white"
    >

      <div className="bg-gradient-to-t from-[#EEDE96] to-white py-10 px-6 sm:px-10 rounded-lg shadow-md max-w-[1100px] mx-auto">

        <header className="text-center mb-10">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2
                  className="
                font-sans font-normal uppercase
                text-[#1E3B3D]
                text-4xl sm:text-5xl md:text-5xl
                leading-tight tracking-wide
              "
                >
                  {children}
                </h2>
              ),
            }}
          />
        </header>


        <div className="max-w-[900px] mx-auto space-y-5">
          {slice.primary.faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className="border border-[#DADADA] rounded-md bg-white shadow-sm transition-all duration-300"
              >

                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-4 px-6 text-left cursor-pointer"
                >
                  <span
                    className="
                  font-sans font-normal uppercase
                  text-sm sm:text-base md:text-xl text-[#344E4F]
                "
                  >
                    {item.question}
                  </span>


                  <span
                    className={clsx(
                      "text-[#344E4F] text-base md:text-2xl font-normal transition-transform duration-200",
                      isOpen ? "rotate-45" : "rotate-0"
                    )}
                  >
                    +
                  </span>
                </button>


                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 border-t border-[#E0E0E0] bg-[#FCFCFC]",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 py-4">
                    <PrismicRichText
                      field={item.answer}
                      components={{
                        paragraph: ({ children }) => (
                          <p
                            className="
                          font-sans font-light
                          text-sm sm:text-base md:text-lg
                          text-[#344E4F]
                          leading-relaxed
                          normal-case
                        "
                          >
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqList;

