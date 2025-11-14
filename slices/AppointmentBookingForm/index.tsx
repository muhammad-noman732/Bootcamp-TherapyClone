
import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content, asText } from "@prismicio/client";

export type AppointmentFormProps =
  SliceComponentProps<Content.AppointmentBookingFormSlice>;

const AppointmentForm: FC<AppointmentFormProps> = ({ slice }) => {
  const titleText = asText(slice.primary.title || []);
  const words = titleText.trim().split(/\s+/).filter(Boolean);
  const lastWord = words.pop() ?? "";
  const firstPart = words.join(" ");

  const groupedFields = [
    slice.primary.form_fields.slice(0, 2),
    slice.primary.form_fields.slice(2, 3),
    slice.primary.form_fields.slice(3, 5),
    slice.primary.form_fields.slice(5, 7),
    slice.primary.form_fields.slice(7, 8),
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-linear-to-b from-[#1E3B3D] via-[#4E6263] to-[#FFFFFF] py-25 px-4 sm:px-8 md:px-16  lg:pr-0"
    >
      {/*Center the whole content for very large screens */}
      <div className="max-w-[1440px] mx-auto">
        {/* ---------- Header ---------- */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl leading-tight uppercase font-sans font-normal text-white">
            {firstPart}{" "}
            <span className="font-hurricane text-7xl leading-wider text-[#EEDE96]">
              {lastWord}
            </span>
          </h1>

          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-white text-base max-w-3xl mx-auto mt-2 font-poppin font-normal">
                  {children}
                </p>
              ),
            }}
          />
        </header>

        {/* ---------- Form ---------- */}
        <div className="bg-white rounded-md max-w-[966px] w-full p-8 md:p-10 mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedFields.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid ${
                  row.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
                } gap-6 md:col-span-2`}
              >
                {row.map((item, idx) => {
                  const isTextarea = item.field_type === "textarea";
                  return isTextarea ? (
                    <textarea
                      key={idx}
                      placeholder={item.field_label || ""}
                      required={item.is_required}
                      className="w-full border border-gray-300 rounded-md p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C2A675] resize-none min-h-[130px]"
                    />
                  ) : (
                    <input
                      key={idx}
                      type={item.field_type || "text"}
                      placeholder={item.field_label || ""}
                      required={item.is_required}
                      className="w-full border border-gray-300 rounded-md p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C2A675]"
                    />
                  );
                })}
              </div>
            ))}

            {/* Submit Button */}
            <div className="md:col-span-2 mt-1">
              <button
                type="submit"
                className="w-full bg-[#E6D39F] text-[#1E3B3D] font-normal py-2 rounded-md hover:bg-[#d9c48b] transition-all"
              >
                {slice.primary.submit_button_label}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
