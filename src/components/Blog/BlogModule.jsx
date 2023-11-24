"use client";

import style from "@/components/Blog/BlogItems.module.css";
import {
  blogSection,
  blogSectionEn,
  blogSectionDe,
  singlePost,
  singlePostEn,
  singlePostDe
} from "@/data/blog";
import { IBM_Plex_Sans } from "next/font/google";
import { useLocalContent } from "@/app/hooks/languageHandler";
import BlogItems from "@/components/Blog/BlogItems";
import { usePathname } from "next/navigation";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const BlogModule = () => {
  const pathname = usePathname();
  const filteredPostsHu = singlePost.filter((item) => item.featured === true);
  const filteredPostsEn = singlePostEn.filter((item) => item.featured === true);
  const filteredPostsDe = singlePostDe.filter((item) => item.featured === true);

  let language;
  if (pathname.includes("/en")) {
    language = filteredPostsEn;
  } else if (pathname.includes("/de")) {
    language = filteredPostsDe;
  } else {
    language = filteredPostsHu;
  }

  console.log(language)


  const { text } = useLocalContent(
    blogSection,
    blogSectionEn,
    blogSectionDe,
  );

  return (
    <>
      <section className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={imb.className}>{text.h1}</h1>
          <h2>{text.h2}</h2>
        </div>
        <div className={style.contentContainer}>
          <BlogItems filteredItems={language} />
        </div>
      </section>
    </>
  );
};

export default BlogModule;
