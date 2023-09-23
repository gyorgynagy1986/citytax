"use client";

import React, { useState, useEffect } from "react";
import style from "@/components/NavTop/NavTop.module.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { PiClockBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { socialIcons } from "@/data/data";
import { contactData } from "@/data/data";
import Link from "next/link";


const NavTop = () => {
  const pathname = usePathname();
  const [dropdown, setdropdown] = useState(true);

  useEffect(() => {
    if (pathname.includes("/en")) {
      setdropdown(false);
    }
  }, []);

  const router = useRouter();

  const languageHandler = (e) => {
    if (e.target.value === "1") {
      router.push("/");
    } else {
      router.push("/en");
      setdropdown(false);
    }
  };

  const mailTo = `mailto:${contactData.email}`;

  return (
    <section className={style.navTop}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.emailContainer}>
            <RiMailLine />{" "}
            <span className="font-semibold color text-[#4b4b4b]">
              {" "}
              Email cím :
            </span>{" "}
            <a href={mailTo}>{contactData.email}</a>
          </div>
          <div className={style.emailContainer}>
            <PiClockBold />{" "}
            <span className="font-semibold text-[#4b4b4b]">
              Hétfő - Péntek:
            </span>{" "}
            08:00 - 14:00
          </div>
        </div>

        <div className="flex text-2xl	 justify-center gap-10">
          <ul className="flex justify-center items-center text-[#74787c] gap-4">
            <li>
              <Link href={socialIcons.facebook} className={style.socialIcon}>
                <RiFacebookCircleFill />
              </Link>
            </li>
            <li>
              <Link className={style.socialIcon} href={socialIcons.instagram}>
                <RiTwitterFill />
              </Link>
            </li>
          </ul>
          <div className="lang-dropdown">
            <select className="text-2xl" onChange={languageHandler}>
              {!dropdown && (
                <>
                  <option value={2}>English</option>
                  <option value={1}>Magyar</option>
                </>
              )}
              {dropdown && (
                <>
                  <option value={1}>Magyar</option>
                  <option value={2}>English</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavTop;
