import React from "react";
import { singlePostEn } from "@/data/blog";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import Image from "next/image";

const singleBlog = ({ params }) => {
  const postId = params.id;
  const post = singlePostEn.find((post) => post.id === postId);

  if (post === undefined) {
    return notFound();
  }

  const createMarkup = (htmlContent) => {
    return {__html: htmlContent};
  };

  return (
    <>
      <section className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <p>{post.title}</p>
            <h2>{post.smallText}</h2>
          </div>
          <div className={style.imageContainer}>
            <Image
              width={600}
              height={600}
              className={`${style.img1} ${style.images}`}
              alt="Blog post image"
              src={post.photo}
            />
          </div>
          <div className={style.textContainer}>
            {/* Render HTML content */}
            <div className={style.textContainerContent} dangerouslySetInnerHTML={createMarkup(post.text)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default singleBlog;
