import { createClient } from "@/prismicio";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const data = footer.data;

  return (
    <footer className="w-full py-12 px-6 sm:px-10 lg:px-16 xl:px-24 bg-white">
      {/* LOGO + LINKS SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* LOGO + SOCIAL ICONS */}
        <div className="flex flex-col items-start gap-6">
          <PrismicNextLink field={data.logolink}>
            <PrismicNextImage
              field={data.logoimage}
              className="w-[220px] sm:w-[280px] lg:w-[320px] h-auto object-contain brightness-0"
              alt=""
            />
          </PrismicNextLink>

          <div className="flex items-center gap-4 flex-wrap">
            {data.sociaicon.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.iconlink}
                className="inline-flex h-9 w-9 items-center justify-center hover:opacity-80 transition"
              >
                <PrismicNextImage
                  field={item.icon}
                  className="h-7 w-7 object-contain"
                  alt=""
                />
              </PrismicNextLink>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-[#1E3B3D] mb-3 font-poppin">
            Quick Links
          </h4>

          <div className="flex flex-col gap-2">
            {data.quicklinks.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.link}
                className="text-base text-[#1E3B3D] hover:text-[#F6784F] transition-colors font-poppin"
              >
                {item.lable}
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="my-10 border-[#D0D0D0]" />

      {/* CONTACT INFO SECTION */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-base text-[#1E3B3D] font-poppin">
        {/* ADDRESS */}
        <div className="flex items-start gap-2 md:w-1/3">
          <span className="font-semibold text-[#F6784F] shrink-0">A:</span>
          <div className="leading-relaxed max-w-[500px]">
            <PrismicRichText field={data.address} />
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-start gap-2 md:justify-center md:w-1/3">
          <span className="font-semibold text-[#F6784F] shrink-0">P:</span>
          <div className="leading-relaxed">
            <PrismicRichText field={data.phone_number} />
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex items-start gap-2 md:justify-end md:w-1/3">
          <span className="font-semibold text-[#F6784F] shrink-0">M:</span>
          <div className="leading-relaxed">
            <PrismicRichText field={data.email_address} />
          </div>
        </div>
      </div>
    </footer>
  );
}
