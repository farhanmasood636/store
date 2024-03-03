"use client";
import { useParams } from "next/navigation";
import { blogs } from "../blogs";
import { useEffect, useState } from "react";
const Blog = () => {
  const router = useParams();
  const { slug } = router;
  const [blog, setBlog] = useState<{
    title: string;
    summary: string;
    imageUrl: string;
    slug: string;
    description: string;
  }>();
  if (!slug) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    setBlog(blogs.find((b) => b.slug === slug));
  }, [slug]);

  return (
    <div className="max-w-7xl my-10 mx-auto max-2xl:mx-5">
      <h1 className="max-sm:text-lg max-md:text-2xl max-lg:text-4xl text-5xl font-bold text-center mb-10">
        <span className="text-[#FB6D11]">{blog?.title}</span>
      </h1>{" "}
      {blog?.description && (
        <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
      )}
    </div>
  );
};

export default Blog;
