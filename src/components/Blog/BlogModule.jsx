"use client";

import React, { useEffect, useState } from "react";
import style from "@/components/Blog/BlogItems.module.css";
import { singlePost } from "@/data/blog";
import { singlePostEn } from "@/data/blog";

import { IBM_Plex_Sans } from "next/font/google";
import BlogItems from "@/components/Blog/BlogItems";
import { usePathname } from "next/navigation";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const BlogModule = () => {
  const pathname = usePathname();
  const filteredPostsHu = singlePost.filter((item) => item.featured === true);
  const filteredPostsEn = singlePostEn.filter((item) => item.featured === true);

  const language = pathname.includes("/en") ?  filteredPostsEn : filteredPostsHu ;

 // const [filteredPosts, SetFilteredPosts] = useState(filteredPostsHu);
//
//
 // useEffect(() => {
 //   if (pathname.includes("/en")) {
 //     SetFilteredPosts(filteredPostsEn);
 //   } else {
 //     SetFilteredPosts(filteredPostsHu);
 //   }
 // }, []);

  return (
    <>
      <section className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={imb.className}>Hírek & Blogok</h1>
          <h2>Legfrisseb híreink és blogbejegyzések</h2>
        </div>
        <div className={style.contentContainer}>
          <BlogItems filteredItems={ language } />
        </div>
      </section>
    </>
  );
};

export default BlogModule;
