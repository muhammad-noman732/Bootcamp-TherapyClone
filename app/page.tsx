import { Header } from "./components/header/Header";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default  async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <div>
      <Header color="white"/>
      
        <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </div>
  );
}
