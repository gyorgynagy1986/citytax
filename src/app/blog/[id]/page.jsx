import React from "react";
import { singlePost } from "@/data/blog";
import { notFound } from "next/navigation";

const singleBlog = ({ params }) => {
  const postId = Number(params.id);
  const post = singlePost.find((post) => post.id === postId);

  if (post === undefined) {
    return notFound();
  }

  return (
    <>
      <p>{post.title}</p>
      <p>{post.smallText}</p>
      <p>{post.text}</p>
    </>
  );
};

export default singleBlog;
