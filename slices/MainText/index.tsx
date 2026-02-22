import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type MainTextProps = SliceComponentProps<Content.MainTextSlice>;


const MainText: FC<MainTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-5 px-[30px]"
    >
      <h1 className="font-sans font-normal text-[63.9px] leading-[78px] tracking-normal align-middle uppercase text-[#1E3B3D]">
        {slice.primary.heading}
      </h1>
    </section>
  );
};

export default MainText;

