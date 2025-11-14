import { SliceZone } from "@prismicio/react"
import { Header } from "../components/header/Header"
import { components } from "@/slices"
import { createClient } from "@/prismicio";
import TwinglyPosts from "../components/twinglyposts/TwinglyPosts";


interface BlogPageProps {
    searchParams: Promise<{page?:string}>
}
export default async function Blogs({searchParams}: BlogPageProps) {
      const client = createClient();
      const page = await client.getSingle("blogs")

      // resolve params 
  const resolvedSearchParams = await searchParams
  // get the current page from searchparams
  const currentPage = parseInt(resolvedSearchParams.page || "1" , 10)

      const apiKey = process.env.TWINGLY_BLOG_API

      if(!apiKey){
        throw new Error('no api key found')
      }
  return (
    <div>
        <Header color="black"/>
                <SliceZone slices={page.data.slices} components={components} />
     
     <TwinglyPosts 
      apiKey={apiKey}
      POST_PER_PAGE={6} 
      page={currentPage}
     />
    </div>
  )
}


