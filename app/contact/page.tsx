import { SliceZone } from "@prismicio/react"
import { Header } from "../components/header/Header"
import { components } from "@/slices"
import { createClient } from "@/prismicio";

export default async function Blog() {
      const client = createClient();
      const page = await client.getSingle("contact")
  return (
    <div>
        <Header color="black"/>
                <SliceZone slices={page.data.slices} components={components} />
     
    </div>
  )
}


