import { blog } from "@/data/data";
import Image from "next/image";
import React from "react"

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative w-full bg-black text-white flex flex-col justify-start items-center gap-5 p-3 lg:p-10 font-outFit overflow-hidden"
    >
      <div className="flex justify-center items-center rounded-full bg-[#111111] p-4 text-[#FE783E] font-medium">
        Blog
      </div>
      <h1 className="font-bold text-lg md:text-5xl lg:text-7xl p-2">
        Delve Deeper Into Our Written Collection
      </h1>
      <p className="text-sm md:text-lg text-white opacity-50">
        Uncover a wealth of engaging knowledge, topics, inspirations, and
        insights within our thought provoking written collection
      </p>
      <div className="w-[90%] flex gap-5 justify-center">
        {blog.map((post, index) => (
          <div key={index} className="w-fit max-w-[500px] space-y-10">
            <Image src={post.image} alt={post.title} width={500} height={500} className="rounded-3xl"/>
            <h1 className="text-3xl">{post.title}</h1>
            <p className="text-sm md:text-lg text-white opacity-50">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Blog