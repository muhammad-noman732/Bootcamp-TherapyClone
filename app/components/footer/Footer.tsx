import { createClient } from "@/prismicio";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import FooterLinks from "./FooterLinks";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const data = footer.data;

  return (
    <footer className="w-full bg-white">
      {/* WRAPPER – max width 1440px */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          pt-[92px]
          pb-16
          sm:px-10
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            flex flex-col lg:flex-row
            justify-between
            items-start
            gap-12
          "
        >
          {/* LOGO + SOCIAL ICONS */}
          <div className="flex flex-col items-start gap-6 px-[121px]">
            <PrismicNextLink field={data.logolink}>
              <PrismicNextImage
                field={data.logoimage}
                alt=""
                className="
                  w-[220px] 
                  sm:w-[260px] 
                  lg:w-[300px] 
                  object-contain 
                  brightness-0
                "
              />
            </PrismicNextLink>

            <div className="flex items-center gap-4 mt-2">
              {data.sociaicon.map((item, index) => (
                <PrismicNextLink
                  key={index}
                  field={item.iconlink}
                  className="inline-flex h-8 w-8 items-center justify-center hover:opacity-70"
                >
                  <PrismicNextImage
                    field={item.icon}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </PrismicNextLink>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="mx-auto text-center lg:mx-0 lg:text-left lg:mr-[285px]">
            <h4 className="text-[16px] font-semibold text-[#1E3B3D] mb-3">
              Quick Links
            </h4>

            <FooterLinks links={data.quicklinks} />
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10 border-[#CFCFCF]" />

        {/* CONTACT SECTION */}
        <div
          className="
            flex flex-col md:flex-row
            justify-between
            items-start md:items-center
            gap-8
            text-[16px]
            text-[#1E3B3D]
          "
        >
          {/* ADDRESS */}
          <div className="flex items-start gap-2 md:w-1/3">
            <span className="font-semibold text-[#F6784F]">A:</span>
            <div className="leading-relaxed">
              <PrismicRichText field={data.address} />
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-2 md:justify-center md:w-1/3">
            <span className="font-semibold text-[#F6784F]">P:</span>
            <div className="leading-relaxed">
              <PrismicRichText field={data.phone_number} />
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-2 md:justify-end md:w-1/3">
            <span className="font-semibold text-[#F6784F]">M:</span>
            <div className="leading-relaxed">
              <PrismicRichText field={data.email_address} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
