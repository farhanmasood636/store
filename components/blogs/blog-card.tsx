import Link from "next/link";

const BlogCard = ({
  title,
  summary,
  imageUrl,
  slug,
}: {
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 py-6">
        <Link href={`/blogs/${slug}`}>
          <div className="bg-[#000] hover:bg-[#FB6D11] text-white font-bold py-2 px-4 rounded-full">
            Read more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
