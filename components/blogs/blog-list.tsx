"use client";

import { blogs } from "@/app/blogs/blogs";
import BlogCard from "./blog-card";

const BlogList = () => {
  return (
    <div className="max-w-7xl my-10 mx-auto max-2xl:mx-5">
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            imageUrl={blog.imageUrl}
            slug={blog.slug}
            summary={blog.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
