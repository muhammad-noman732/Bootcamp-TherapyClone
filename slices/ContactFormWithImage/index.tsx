import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type ContactFormWithImageProps =
  SliceComponentProps<Content.ContactFormWithImageSlice>;


const ContactFormWithImage: FC<ContactFormWithImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_form_with_image (variation:{" "}
      {slice.variation}) slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>

    </section>
  );
};

export default ContactFormWithImage;

