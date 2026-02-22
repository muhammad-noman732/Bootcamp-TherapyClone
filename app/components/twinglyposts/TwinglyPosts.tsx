import Image from "next/image";
import Link from "next/link";

interface TwinglyPost {
  id: string;
  author: string;
  url: string;
  title: string;
  text: string;
  language_code: string;
  location_code: string;
  links: string[];
  tags: string[];
  images: string[];
  indexed_at: string;
  published_at: string;
  reindexed_at: string;
  inlinks_count: number;
  blog_id: string;
  blog_name: string;
  blog_url: string;
  blog_rank: number;
  authority: number;
}

interface TwinglyResponse {
  ts: string;
  from: string;
  number_of_posts: number;
  max_number_of_posts: number;
  first_post: string;
  last_post: string;
  next_timestamp: string;
  documents: TwinglyPost[];
}

interface Props {
  apiKey: string;
  POST_PER_PAGE: number;
  page?: number;
}

export default async function TwinglyPosts({
  apiKey,
  POST_PER_PAGE,
  page = 1,
}: Props) {
  const sevenDaysAgo = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const res = await fetch(
    `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=${apiKey}&timestamp=${sevenDaysAgo}&maxPosts=100&format=json`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch Twingly data");
    return (
      <div className="text-center text-red-600 mt-10">Failed to load posts</div>
    );
  }

  const data: TwinglyResponse = await res.json();

  const filteredPosts = data.documents.filter(
    (p) => p.language_code === "en" || /^[\u0000-\u007F]*$/.test(p.title)
  );

  const startIndex = (page - 1) * POST_PER_PAGE;
  const endIndex = startIndex + POST_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / POST_PER_PAGE);

  if (paginatedPosts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No blog posts found for this page.
      </div>
    );
  }

  return (
    <section className="px-[30px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {paginatedPosts.map((post) => (
          <Link key={post.id} href="/blogs" className="block">
            <article className="flex flex-col overflow-hidden cursor-pointer hover:opacity-90 transition">
              <div className="relative w-full aspect-6/3">
                <Image
                  src={post.images.length > 0 ? post.images[0] : "/blog.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal bg-[#F6784F] text-white px-2 py-0.5 font-poppin">
                    {post.tags[0]?.split(" ")[0] || "General"}
                  </span>
                  <span className="text-base font-normal text-[#445152] line-clamp-2 font-poppin">
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mt-2 leading-snug text-[#1E3B3D]">
                  {post.title || "Untitled Post"}
                </h3>
              </div>
            </article>
          </Link>
        ))}
      </div>


      <div className="flex justify-center lg:justify-between items-center mt-12 w-full relative gap-4 lg:gap-0">

        <div className="w-auto lg:w-[426.66px] h-[40px] lg:h-[51.18px] flex items-center">
          {page > 1 ? (
            <Link
              href={`?page=${page - 1}`}
              className="bg-[#EEDE96] text-[#1E3B3D] text-sm lg:text-base font-medium transition
        px-4 lg:px-0 w-auto lg:w-full h-full flex items-center justify-center whitespace-nowrap"
            >
              Previous
            </Link>
          ) : (
            <div className="hidden lg:block lg:w-full h-full"></div>
          )}
        </div>

        <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <span className="text-[#445152] text-sm lg:text-base font-poppin whitespace-nowrap">
            {page} / {totalPages || 1}
          </span>
        </div>

        <div className="w-auto lg:w-[426.66px] h-[40px] lg:h-[51.18px] flex items-center justify-end">
          {page < totalPages ? (
            <Link
              href={`?page=${page + 1}`}
              className="bg-[#EEDE96] text-[#1E3B3D] text-sm lg:text-base font-medium transition
        px-4 lg:px-0 w-auto lg:w-full h-full flex items-center justify-center whitespace-nowrap"
            >
              Next →
            </Link>
          ) : (
            <div className="hidden lg:block lg:w-full h-full"></div>
          )}
        </div>

      </div>

    </section>
  );
}

