"use client";

import { useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

function HeaderContent({ settings, color }: any) {
  const [isOpen, setIsOpen] = useState(false);

  // from first code (correct hover brand color)
  const hoverColorClass = "hover:text-[#F6784F]";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div
        className={clsx(`
          max-w-[1440px] mx-auto 
          flex items-center justify-between 
          h-[54px]
          px-4 sm:px-6 lg:px-[70px]      
          transition-all duration-300
        `)}
      >
        {/* LOGO */}
        <div className="flex items-center flex-shrink-0">
          {settings.data.logo && (
            <PrismicNextLink field={settings.data.logolink}>
              <PrismicNextImage
                field={settings.data.logo}
                width={168}
                className={clsx(
                  `
                  object-contain transition-all duration-300
                  lg:w-[168px]
                  md:w-[130px]
                  `,
                  color=== "white" ? "invert-0" : "invert"
                )}
                alt=""
              />
            </PrismicNextLink>
          )}
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav
          className={clsx(`
            hidden md:flex justify-center flex-1
            lg:gap-[200px]
            md:gap-[50px]
          `)}
        >
          <ul
            className={clsx(`
              flex items-center
              lg:space-x-6
              md:space-x-3
              lg:text-[16px]
              md:text-[14px]
            `)}
          >
            {settings.data.navigation.map(({ label, link }: any) => (
              <li key={label}>
                <PrismicNextLink
                  field={link}
                  className={clsx(
                    `
                    font-poppins font-normal transition-colors duration-200
                    leading-[24px]
                    lg:text-[16px]
                    md:text-[14px]
                    `,
                    hoverColorClass,
                    color === "white" ? "text-white" : "text-black"
                  )}
                >
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA BUTTON */}
        <div
          className={clsx(`
            hidden md:flex items-center flex-shrink-0
            lg:w-[244px]
            md:w-[180px]
          `)}
        >
          {settings.data.ctalink && (
            <PrismicNextLink
              field={settings.data.ctalink}
              className={clsx(
                `
                inline-flex items-center 
                rounded-lg 
                transition-colors duration-200
                lg:px-5 lg:py-2 lg:text-[16px]
                md:px-3 md:py-1 md:text-[13px]
                leading-[24px]
                `,
                color === "white"
                  ? "text-white hover:text-gray-300"
                  : "text-black " + hoverColorClass
              )}
            >
              {settings.data.ctaicon && (
                <PrismicNextImage
                  field={settings.data.ctaicon}
                  width={20}
                  className={clsx(
                    `
                    mr-2 object-contain
                    `,
                    color === "white"
                      ? "brightness-0 invert"
                      : "brightness-0 invert-0"
                  )}
                  alt=""
                />
              )}
              {settings.data.ctatext}
            </PrismicNextLink>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <Menu
            className={clsx(
              "w-7 h-7",
              // first code logic
              color === "white" ? "text-white" : "text-black"
            )}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
          <div className="absolute top-0 right-0 w-3/4 max-w-sm bg-white h-[500px] p-6 shadow-xl flex flex-col">
            <div className="flex justify-between items-center mb-8">
              {settings.data.logo && (
                <PrismicNextImage
                  field={settings.data.logo}
                  width={140}
                  alt=""
                  className="object-contain"
                />
              )}
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col space-y-4">
                {settings.data.navigation.map(({ label, link }: any) => (
                  <li key={label}>
                    <PrismicNextLink
                      field={link}
                      className="block text-lg font-medium text-gray-800 hover:text-[#F6784F] transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </nav>

            {settings.data.ctalink && (
              <div className="mt-auto pt-6 border-t border-gray-200">
                <PrismicNextLink
                  field={settings.data.ctalink}
                  className="inline-flex items-center px-4 py-2 text-gray-800 hover:text-[#F6784F] font-medium transition"
                  onClick={() => setIsOpen(false)}
                >
                  {settings.data.ctaicon && (
                    <PrismicNextImage
                      field={settings.data.ctaicon}
                      width={20}
                      className="mr-2 object-contain brightness-0 invert-0"
                      alt=""
                    />
                  )}
                  {settings.data.ctatext}
                </PrismicNextLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderContent;
