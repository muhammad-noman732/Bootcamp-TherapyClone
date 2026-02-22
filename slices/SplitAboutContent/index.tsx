import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type SplitAboutContentProps =
  SliceComponentProps<Content.SplitAboutContentSlice>;

const SplitAboutContent: FC<SplitAboutContentProps> = ({ slice }) => {
  const icon = slice.primary.icon;
  const heading = slice.primary.heading;
  const textBlocks = slice.primary.textblocks || [];
  const storyBullets = slice.primary.story_bullet_points || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#1E3B3D] w-full text-white font-sans pb-10"
    >

      <div className="max-w-[1440px] mx-auto w-full px-[30px] min-h-screen flex flex-col space-y-5">

        <div className="flex flex-wrap justify-between items-center gap-y-10 lg:gap-x-10 pt-8 lg:pt-16">

          <div className="flex-shrink-0 w-full sm:w-[30%] md:w-[25%] lg:w-[300px] h-auto">
            <PrismicNextImage
              field={slice.primary.image_top_left}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>


          <div className="flex flex-col items-center text-center flex-1 mx-auto lg:mx-8 min-w-[220px]">
            <PrismicNextImage
              field={icon}
              width={100}
              height={105}
              className="w-[100px] h-[105px] mb-4"
              alt=""
            />
            <PrismicRichText
              field={heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-sans font-normal text-3xl leading-tight uppercase tracking-wider whitespace-pre-line">
                    {children}
                  </h2>
                ),
              }}
            />
          </div>


          <div className="flex-shrink-0 w-full sm:w-[30%] md:w-[25%] lg:w-[300px] h-auto mt-6 lg:mt-0">
            <PrismicNextImage
              field={slice.primary.imagetopright}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
        </div>


        <div className="flex flex-wrap justify-between items-start gap-y-10 lg:gap-x-10 mt-16">

          <div className="flex-shrink-0 w-full sm:w-[28%] md:w-[25%] lg:w-[280px] h-auto">
            <PrismicNextImage
              field={slice.primary.imagebottomleft}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>


          {textBlocks.map((item, index) => {
            const isStory = index === 0;
            return (
              <div
                key={index}
                className="flex-1 min-w-[220px] max-w-[300px] mx-auto"
              >
                <h2 className="font-inter font-normal text-[20px] leading-[30px] uppercase">
                  {item.title}
                </h2>
                <p className="font-poppins font-normal text-sm leading-6 mt-3">
                  {item.description}
                </p>
                {isStory && storyBullets.length > 0 && (
                  <ul className="list-disc list-outside pl-5 mt-4 space-y-1 marker:text-[#F6784F]">
                    {storyBullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="font-poppins font-normal text-base leading-6 uppercase text-white"
                      >
                        {bullet.bullet_item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}


          <div className="flex-shrink-0 w-full sm:w-[28%] md:w-[25%] lg:w-[280px] h-auto mt-6 lg:mt-14">
            <PrismicNextImage
              field={slice.primary.imagebottomright}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitAboutContent;

