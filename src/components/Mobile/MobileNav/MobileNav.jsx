"use client"
import React, { useState, useEffect } from 'react'
import style from '@/components/Mobile/MobileNav/MobileNav.module.css'
import Image from 'next/image'
import Logo from '@/components/UI/Logo/Logo';
import MobileMenu from '@/components/Mobile/MobileMenu'
import { RxHamburgerMenu } from "react-icons/rx";


const MobileNav = () => {

  const [mobileMenuHandler, setMobileMenuHandler ] = useState(true)

  const mobileMenuOpen = () => {
    setMobileMenuHandler(false)
  }

  const mobileClose = () => {
    setMobileMenuHandler(true)
  }


  return (
    <navbar className={style.navbar}>
      <div className={style.container}>
        <Logo className={style.logo} />
        <RxHamburgerMenu onClick={mobileMenuOpen} className={style.mobileOpen} />
      </div>
      {!mobileMenuHandler && <MobileMenu mobileClose={mobileClose} />}
    </navbar>
  )
}

export default MobileNav