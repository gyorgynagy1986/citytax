import React from "react";
import { singlePostEn } from "@/data/blog";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import Image from "next/image";

const singleBlog = ({ params }) => {
  const postId = Number(params.id);
  const post = singlePostEn.find((post) => post.id === postId);

  if (post === undefined) {
    return notFound();
  }

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
              alt="1"
              src={post.photo}
            />
          </div>
          <div className={style.textContainer}>
            <p>{post.text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default singleBlog;
