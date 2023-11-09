import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "@/components/NavTop/NavTop.module.css";
import hu from '../../../public/assets/icons/hu.png'
import de from '../../../public/assets/icons/de.png'
import en from '../../../public/assets/icons/en.png'

const LangugaModule = ({langHandlerEn , langHandlerDe, langHandlerHu }) => {
  return (
    <><li>
    <Link href={langHandlerEn} className={style.socialIcon}>
    <Image className={style.imgIcon} alt='flag english' src={en} /></Link>
  </li>
  <li>
    <Link href={langHandlerDe} className={style.socialIcon}>
      <Image className={style.imgIcon} alt='flag german' src={de} />
    </Link>
  </li>
  <li>
    <Link href={langHandlerHu} className={style.socialIcon}>
    <Image className={style.imgIcon} alt='flag hungarian' src={hu} />
    </Link>
  </li></>
  )
}

export default LangugaModule