import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type ContactFormDetailsProps =
  SliceComponentProps<Content.ContactFormDetailsSlice>;

const ContactFormDetails: FC<ContactFormDetailsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="
        py-20 px-4 sm:px-6 lg:px-12 
        bg-[linear-gradient(90deg,rgba(246,120,79,0)_0%,rgba(246,120,79,0.1)_13%,rgba(246,120,79,0.3)_25%,rgba(246,120,79,0.4)_38%,rgba(246,120,79,0.5)_50%,rgba(246,120,79,0.4)_63%,rgba(250,186,165,0.3)_75%,rgba(246,120,79,0.1)_88%,rgba(246,120,79,0)_100%)]
      "
    >
      <div className="w-full">
        
        <div className="flex flex-col space-y-4 mb-16 max-w-7xl mx-auto">
          <p className="text-base font-medium tracking-widest text-[#F6784F] mb-2 font-poppin uppercase">
            {slice.primary.top_heading}
          </p>
          <div className="md:text-6xl text-4xl font-normal leading-tight text-slate-800 uppercase">
            <PrismicRichText field={slice.primary.heading} />
          </div>
        </div>

        {/* Main grid for Form (left) and Details (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 max-w-[85rem] mx-auto">
          {/* LEFT COLUMN: FORM CONTAINER */}
          <div className="relative">

            <div
              className="
                bg-[linear-gradient(180deg,#F6784F_0%,#FFFFFF_100%)]
                p-[20px] md:p-[30px]  shadow-2xl
              "
            >
              {/* INNER WHITE FORM */}
              <div className="bg-white w-full h-auto py-5 px-4">
                <form className="space-y-2">
                  <div className="flex flex-wrap -mx-2">
                    {slice.primary.form_fields.map((item, index) => {
                      const label = item.input_label as string;
                      const type = item.input_type || "text";
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
                              rows={5}
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

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="
                     bg-[#E7D07D] text-gray-900 
                      font-medium py-2 px-4
                      hover:bg-[#d3bd6a] transition
                    "
                  >
                    {slice.primary.submit_label || "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILS & FAQ */}
          <div className="flex flex-col space-y-20 ">
            <div className="p-0">
              {/* HOURS + CONTACT GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 md:gap-x-18 mb-16">
                {/* OPENING HOURS */}
                <div className="space-y-4">
                  <PrismicRichText
                    field={slice.primary.opening_hours_title}
                    components={{
                      heading4: ({ children }) => (
                        <h4 className="font-semibold text-lg text-slate-800 uppercase tracking-wider">
                          {children}
                        </h4>
                      ),
                    }}
                  />
                  <div className="text-sm leading-relaxed tracking-wide text-slate-700 space-y-2 font-poppin">
                    <PrismicRichText
                      field={slice.primary.opening_hours}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="whitespace-pre-line">{children}</p>
                        ),
                      }}
                    />
                  </div>
                </div>

                {/* CONTACT */}
                <div className="space-y-3">
                  <PrismicRichText
                    field={slice.primary.contact_title}
                    components={{
                      heading4: ({ children }) => (
                        <h4 className="font-semibold text-lg text-slate-800 uppercase tracking-wider">
                          {children}
                        </h4>
                      ),
                    }}
                  />
                  <div className="text-sm text-slate-700 space-y-1">
                    <p>
                      <a
                        href={`tel:${slice.primary.phone_number}`}
                        className="underline hover:text-[#F6784F] font-poppin transition-colors"
                      >
                        {slice.primary.phone_number}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${slice.primary.email_address}`}
                        className="underline hover:text-[#F6784F] font-poppin transition-colors"
                      >
                        {slice.primary.email_address}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="space-y-3 mt-12 max-w-2xs">
                <PrismicRichText
                  field={slice.primary.address_title}
                  components={{
                    heading4: ({ children }) => (
                      <h4 className="font-semibold text-lg text-slate-800 uppercase tracking-wider">
                        {children}
                      </h4>
                    ),
                  }}
                />
                <div className="text-xl leading-tight text-slate-700 space-y-4 font-poppin">
                  <PrismicRichText
                    field={slice.primary.address}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="whitespace-pre-line">{children}</p>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* FAQ CALLOUT */}
            {slice.primary.show_faq_callout && (
              <div className="bg-faq-dark mt-2 py-8 text-white">
                <PrismicRichText
                  field={slice.primary.faq_callout_text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-base md:text-lg font-semibold uppercase tracking-wide mb-4 text-center">
                        {children}
                      </p>
                    ),
                  }}
                />
                <div className="text-center">
                  <PrismicNextLink
                    field={slice.primary.faq_callout_link}
                    className="inline-block text-sm font-medium tracking-wide border-b border-white hover:text-[#F6784F] transition-colors"
                  >
                    TAKE A LOOK THROUGH OUR FAQS.
                  </PrismicNextLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormDetails;
