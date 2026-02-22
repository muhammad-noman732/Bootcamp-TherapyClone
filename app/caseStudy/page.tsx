import { SliceZone } from "@prismicio/react";
import { Header } from "../components/header/Header";
import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default async function Services() {
  const client = createClient();
  const page = await client.getSingle("casestudy");
  return (
    <div>
      <Header color="white" />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

