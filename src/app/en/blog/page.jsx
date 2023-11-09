"use client";

import React, { useState } from "react";
import BlogItems from "@/components/Blog/BlogItems";
import CallBack from "@/components/Callback/CallBack";
import style from "./page.module.css";
import { singlePost, singlePostEn } from "@/data/blog";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Blog = () => {
  const [filteredPosts, SetFilteredPosts] = useState(singlePost);
  const [active, setActive] = useState("3");

  const filterBlog = singlePost.filter((item) => item.blog === true);
  const filterNews = singlePost.filter((item) => item.blog === false);

  const handleFilterBlog = () => {
    SetFilteredPosts(filterBlog);
    setActive("1");
  };

  const handleFilterNews = () => {
    SetFilteredPosts(filterNews);
    setActive("2");
  };

  const handleFilterAll = () => {
    SetFilteredPosts(singlePost);
    setActive("3");
  };

  return (
    <>
      <section className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={imb.className}>News & Blog</h1>
          <h2>Our latest news and blog entries</h2>
        </div>
        <div className={style.buttonContainer}>
          <button
            className={`${style.button} ${active === "3" && style.active}`}
            onClick={handleFilterAll}
          >
            all
          </button>{" "}
          <button
            className={`${style.button} ${active === "1" && style.active}`}
            onClick={handleFilterBlog}
          >
            blogs
          </button>
          <button
            className={`${style.button} ${active === "2" && style.active}`}
            onClick={handleFilterNews}
          >
            news
          </button>{" "}
        </div>

        <div className={style.contentContainer}>
          <BlogItems filteredItems={filteredPosts} />
        </div>
      </section>
    </>
  );
};

export default Blog;
