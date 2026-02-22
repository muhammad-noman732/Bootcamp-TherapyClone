import { SliceZone } from "@prismicio/react";
import { Header } from "../components/header/Header";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import TwinglyPosts from "../components/twinglyposts/TwinglyPosts";


interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const client = createClient();
  const page = await client.getSingle("blog");


  const resolvedSearchParams = await searchParams;

  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);

  const apiKey = process.env.TWINGLY_BLOG_API;
  if (!apiKey) throw new Error("TWINGLY_BLOG_API is missing!");

  return (
    <section>
      <Header color="black" />
      <SliceZone slices={page.data.slices} components={components} />


      <TwinglyPosts apiKey={apiKey} POST_PER_PAGE={6} page={currentPage} />
    </section>
  );
}

