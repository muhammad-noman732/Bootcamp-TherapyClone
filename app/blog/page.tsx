import { SliceZone } from "@prismicio/react";
import { Header } from "../components/header/Header";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import TwinglyPosts from "../components/twinglyposts/TwinglyPosts";

//  as managing the pagination throught the server components and do not have any api setup (not provided) so get the page from the url
interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const client = createClient();
  const page = await client.getSingle("blog");

  // resolve params
  const resolvedSearchParams = await searchParams;
  // get the current page from searchparams
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);

  const apiKey = process.env.TWINGLY_BLOG_API;
  if (!apiKey) throw new Error("TWINGLY_BLOG_API is missing!");

  return (
    <section>
      <Header color="black" />
      <SliceZone slices={page.data.slices} components={components} />

      {/* get the blog posts  */}
      <TwinglyPosts apiKey={apiKey} POST_PER_PAGE={6} page={currentPage} />
    </section>
  );
}
