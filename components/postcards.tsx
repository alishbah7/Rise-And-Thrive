'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  postTitle: string;
  postSubTitle: string;
  postDate: string;
  postImage: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="postsBg pt-[20px] pb-[20px] mt-[20px]">
      <h1 className="flex justify-center items-center md:justify-start md:items-start font-bold text-[#8f6922] text-[35px] tracking-wide md:px-[20px] xl:px-[90px] mb-[15px]">Top Posts</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[15px] xl:px-[90px] ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={post.postImage}
              alt={post.postTitle}
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#8f6922]">{post.postTitle}</h2>
              <p className="text-gray-400 text-sm">{post.postSubTitle}</p>
              <p className="text-gray-500 text-xs mt-2">{post.postDate}</p>
              <button className="mt-4 text-[#8f6922] font-medium">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
