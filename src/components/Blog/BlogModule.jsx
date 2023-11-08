"use client";

import style from "@/components/Blog/BlogItems.module.css";
import { singlePost, singlePostEn, blogSection, blogSectionEn } from "@/data/blog";
import { IBM_Plex_Sans } from "next/font/google";
import { useLocalContent } from "@/app/hooks/languageHandler"; 
import BlogItems from "@/components/Blog/BlogItems";
import { usePathname } from "next/navigation";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const BlogModule = () => {
  const pathname = usePathname();
  const filteredPostsHu = singlePost.filter((item) => item.featured === true);
  const filteredPostsEn = singlePostEn.filter((item) => item.featured === true);

  const language = pathname.includes("/en") ?  filteredPostsEn : filteredPostsHu ;

  const { text } = useLocalContent(
    blogSection, blogSectionEn 
  );


  return (
    <>
      <section className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={imb.className}>{text.h1}</h1>
          <h2>{text.h2}</h2>
        </div>
        <div className={style.contentContainer}>
          <BlogItems filteredItems={ language } />
        </div>
      </section>
    </>
  );
};

export default BlogModule;
