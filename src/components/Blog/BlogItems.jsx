"use client";

import style from "@/components/Blog/BlogItems.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsFillCalendarFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { path } from "@/data/data";

const BlogItems = ({ filteredItems }) => {
  const pathname = usePathname();


  return (
    <>
      {filteredItems?.map((item) => (
        <div className={style.blogItem} key={item.id}>
          <div className={style.photoContainer}>
            <Image
              width={500}
              height={500}
              className={style.image}
              alt="blog photo"
              src={item.photo}
            />
          </div>
          <div className={style.infoContainer}>
            <div className={style.dateContainer}>
              {" "}
              <BsFillCalendarFill /> <p>{item.date}</p>
            </div>
            <span className={item.blog ? style.activeB : style.activeN}>
              {item.type}
            </span>
          </div>
          <div className={style.blogItemTextContainer}>
            <p className={style.blogItemTitle}>{item.title}</p>
            <p className={style.blogItemText}>{item.smallText}</p>
            <Link className={style.blogLink} href={pathname.includes('/blog') ? `${path.path}${pathname}/${item.id}` : `${path.path}${pathname}/blog/${item.id}`}>
              {item.readmore}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItems;
