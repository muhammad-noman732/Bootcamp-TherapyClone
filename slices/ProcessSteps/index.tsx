import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type ProcessStepsProps = SliceComponentProps<Content.ProcessStepsSlice>;

const ProcessSteps: FC<ProcessStepsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 md:mt-10 mt-25 px-[30px] bg-[linear-gradient(90deg,#EEDE96_0%,rgba(238,222,150,0.5)_25%,rgba(238,222,150,0)_50%,rgba(238,222,150,0.5)_75%,#EEDE96_100%)]"
    >
      <div className="max-w-[1440px] mx-auto text-center">

        <PrismicRichText
          field={slice.primary.section_title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-[#1E3B3D] text-3xl md:text-4xl font-sans font-normal uppercase mb-10">
                {children}
              </h2>
            ),
          }}
        />


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {slice.primary.steps.map((item, index) => {
            const isMiddleCard = index === 1;
            return (
              <div
                key={index}
                className={`w-full max-w-[360px] aspect-[16/9] rounded-md p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${
                  isMiddleCard ? "bg-[#EEDE96]" : "bg-white"
                }`}
              >

                <p className="text-[#F6784F] font-poppins text-sm uppercase mb-3">
                  {item.step_number}
                </p>


                <h3 className="text-[#1E3B3D] font-sans text-lg sm:text-xl md:text-2xl font-medium uppercase mb-3">
                  {item.step_title}
                </h3>


                <PrismicRichText
                  field={item.step_description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-[#1E3B3D]/80 font-poppins text-sm sm:text-base leading-relaxed">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

