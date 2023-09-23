import React from 'react'
import style from '@/components/Mobile/MobileNav/MobileNav.module.css'
import Image from 'next/image'
import logo from "../../../../public/assets/logo/logo.png";
import { meta } from "@/data/data";

const MobileNav = () => {
  return (
    <navbar className={style.navbar}>
      <div className={style.container}>
        <Image priority alt={meta.logoAlt} className={style.logo} src={logo} />
        <div className="flex justify-center items-center gap-10">
        </div>
      </div>
    </navbar>
  )
}

export default MobileNav