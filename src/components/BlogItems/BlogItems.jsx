import React from "react";
import style from "@/components/BlogItems/BlogItems.module.css";
import Link from "next/link";
import Image from "next/image";
import photo from "../../../public/assets/blog/2.jpg";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const BlogItems = () => {
  return (
    <>
      <section className={style.container}>
        {/*Container with Width */}
        <div className={style.titleContainer}>
          <h1 className={imb.className}>Hírek & Blogok</h1>
          <h2>blog</h2>
        </div>
        <div className={style.contentContainer}>
          {/*Title */}
          {/*Title End */}
          {/*Blog Item Start*/}
          <div className={style.blogItem}>
            <div className={style.photoContainer}>
              <Image
                className={style.image}
                alt="blog photo"
                src={photo}
              ></Image>
            </div>

            <div className={style.blogItemTextContainer}>
              <p className={style.blogItemTitle}>
                Hogyan Takaríthat Meg Pénzt és Időt
              </p>
              <p className={style.blogItemText}>
                Ismerje meg az adóbevallás trükkjeit és tippeket, amelyek
                segítenek.{" "}
              </p>
              <Link className={style.blogLink} href="">
                Olvass tovább
              </Link>
            </div>
          </div>
          {/*Blog Item END */}

  {/*Blog Item Start*/}
  <div className={style.blogItem}>
            <div className={style.photoContainer}>
              <Image
                className={style.image}
                alt="blog photo"
                src={photo}
              ></Image>
            </div>

            <div className={style.blogItemTextContainer}>
              <p className={style.blogItemTitle}>
                Hogyan Takaríthat Meg Pénzt és Időt
              </p>
              <p className={style.blogItemText}>
              Ismerje meg az adóbevallás trükkjeit és tippeket, amelyek
                segítenek Önnek.{" "}
              </p>
              <Link className={style.blogLink} href="">
                Olvass tovább
              </Link>
            </div>
          </div>
          {/*Blog Item END */}

            {/*Blog Item Start*/}
            <div className={style.blogItem}>
            <div className={style.photoContainer}>
              <Image
                className={style.image}
                alt="blog photo"
                src={photo}
              ></Image>
            </div>

            <div className={style.blogItemTextContainer}>
              <p className={style.blogItemTitle}>
                Hogyan Takaríthat Meg Pénzt és Időt
              </p>
              <p className={style.blogItemText}>
                Ismerje meg az adóbevallás trükkjeit és tippeket, amelyek
                segítenek Önnek. {" "}
              </p>
              <Link className={style.blogLink} href="">
                Olvass tovább
              </Link>
            </div>
          </div>
          {/*Blog Item END */}

        </div>
      </section>
    </>
  );
};

export default BlogItems;
