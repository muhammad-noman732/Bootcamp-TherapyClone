import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type TwoColumnLayoutProps =
  SliceComponentProps<Content.TwoColumnLayoutSlice>;


const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for two_column_layout (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>

    </section>
  );
};

export default TwoColumnLayout;

