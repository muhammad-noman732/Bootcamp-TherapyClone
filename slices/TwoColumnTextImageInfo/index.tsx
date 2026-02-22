import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type TwoColumnTextImageInfoProps =
  SliceComponentProps<Content.TwoColumnTextImageInfoSlice>;


const TwoColumnTextImageInfo: FC<TwoColumnTextImageInfoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for two_column_text_image_info (variation:{" "}
      {slice.variation}) slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>

    </section>
  );
};

export default TwoColumnTextImageInfo;

