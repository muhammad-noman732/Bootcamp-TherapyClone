"use client"
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { usePathname } from "next/navigation";

export type LogoBarProps = SliceComponentProps<Content.LogoBarSlice>;

const LogoBar: FC<LogoBarProps> = ({ slice }) => {

  const logos = [...slice.primary.logos, ...slice.primary.logos];

  const pathname = usePathname() ?? "";

  const isServices = pathname === "/services" || pathname === "/services/" || pathname.startsWith("/services/");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-6 relative overflow-hidden bg-transparent"
    >
      <div className={`w-full h-[102px] relative ${isServices ? "bg-[#1E3B3D]" : ""}`}>

        {slice.primary.headline && (
          <PrismicRichText
            field={slice.primary.headline}
            components={{
              heading2: ({ children }) => (
                <h2
                  className="absolute inset-0 flex items-center justify-center font-sans font-normal
                    text-[56px] leading-[62px] sm:text-[92px] sm:leading-[100px]
                    lg:text-[128px] lg:leading-[136px]
                    text-center uppercase text-gray-300 pointer-events-none z-0"
                >
                  {children}
                </h2>
              ),
            }}
          />
        )}


        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-[1200px] px-4">
            <div
              className={`track flex items-center justify-center gap-6 w-full `}
            >
              {logos.map((item, index) => {
                const key = `${item.logo_image.id ?? index}-${index}`;

                return (
                  <div
                    key={key}
                    className={`logo-wrapper flex items-center justify-center shrink-0 mx-2 h-full ${isServices ? "filter invert brightness-200 contrast-75" : ""}`}

                  >
                    <PrismicNextImage
                      field={item.logo_image}
                      className={`w-auto object-contain h-10 ${isServices ? "brightness-0":""}`}
                      alt=""
                    />


                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;

