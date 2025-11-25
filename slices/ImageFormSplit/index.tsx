import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type ImageFormSplitProps =
  SliceComponentProps<Content.ImageFormSplitSlice>;

const ImageFormSplit: FC<ImageFormSplitProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="
        relative flex 
        bg-[linear-gradient(90deg,rgba(246,120,79,0)_0%,rgba(246,120,79,0.1)_13%,rgba(246,120,79,0.3)_25%,rgba(246,120,79,0.4)_38%,rgba(246,120,79,0.5)_50%,rgba(246,120,79,0.4)_63%,rgba(250,186,165,0.3)_75%,rgba(246,120,79,0.1)_88%,rgba(246,120,79,0)_100%)]
        px-[30px] md:py-40
      "
    >
      {/* ---------- Main Wrapper ---------- */}
      <div
        className="
          relative flex flex-col lg:flex-row 
          w-full max-w-[1440px] mx-auto
        "
      >
        {/* ---------- Left Side Image ---------- */}
        <div
          className="
            relative w-full lg:w-[40%] 
            flex justify-center lg:justify-start 
          "
        >
          <div className="relative w-full max-w-[700px] h-[765px]">
            <PrismicNextImage
              field={slice.primary.side_image}
              className="w-full h-full object-cover "
              alt=""
            />
          </div>
        </div>

        {/* ---------- Right Side Floating Form ---------- */}

        <div
          className="
    w-full lg:w-auto 
    flex justify-center 
    mt-10 lg:mt-0 z-10
    lg:absolute lg:left-[38%] lg:top-1/2 lg:-translate-y-1/2
  "
        >
          {/* OUTER BORDER WITH GRADIENT */}
          <div
            className="
      bg-[linear-gradient(180deg,#F6784F_0%,#FFFFFF_100%)]
      p-[25px] sm:p-[30px]
      max-w-[780px] w-full
      shadow-lg rounded-sm
      lg:h-[668px]      /* height only on large screens */
    "
          >
            {/* INNER WHITE FORM */}
            <div className="bg-white w-full h-full py-6 px-6 lg:h-full">
              <form className="space-y-3 h-full flex flex-col justify-between">
                <div className="flex flex-wrap -mx-2">
                  {slice.primary.form_fields.map((item: any, index: number) => {
                    const label = item.field_label as string;
                    const type = item.field_type || "text";
                    const isRequired = item.is_required;

                    const halfWidthLabels = [
                      "First Name",
                      "Last Name",
                      "Phone Number",
                      "Service Of Interest",
                    ];
                    const isHalfWidth = halfWidthLabels.includes(label);

                    return (
                      <div
                        key={index}
                        className={`px-2 mb-4 ${
                          isHalfWidth ? "w-full sm:w-1/2" : "w-full"
                        }`}
                      >
                        {type === "textarea" ? (
                          <textarea
                            placeholder={label}
                            rows={4}
                            required={isRequired}
                            className="w-full py-3 px-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6784F] placeholder:text-gray-500"
                          />
                        ) : (
                          <input
                            type={type}
                            placeholder={label}
                            required={isRequired}
                            className="w-full py-3 px-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6784F] placeholder:text-gray-500"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* ---------- Submit Button ---------- */}
                <button
                  type="submit"
                  className="
            w-full bg-[#E7D07D] text-gray-900 
            font-medium py-3 
            hover:bg-[#d3bd6a] transition
          "
                >
                  {slice.primary.submit_button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageFormSplit;
