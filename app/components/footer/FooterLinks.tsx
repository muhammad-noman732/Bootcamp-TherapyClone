"use client";

import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import { asLink, LinkField } from "@prismicio/client";

type FooterLinksProps = {
    links: {
        link: LinkField;
        lable: string | null;
    }[];
};

export default function FooterLinks({ links }: FooterLinksProps) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-2">
            {links.map((item, index) => {
                const url = asLink(item.link);
                const isActive = pathname === url;

                return (
                    <PrismicNextLink
                        key={index}
                        field={item.link}
                        className={`
              text-[16px]
              transition-colors
              ${isActive ? "text-[#F6784F]" : "text-[#1E3B3D] hover:text-[#F6784F]"}
            `}
                    >
                        {item.lable}
                    </PrismicNextLink>
                );
            })}
        </div>
    );
}

