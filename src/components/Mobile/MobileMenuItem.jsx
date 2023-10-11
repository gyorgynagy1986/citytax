import React, { useState, useEffect } from 'react'
import style from './MobileMenu.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const items = [
  {
    id: 1,
    name: "Főoldal",
    url: "/",
  },
  {
    id: 3,
    name: "Szolgáltatások",
    url: "/szolgaltatasok",
  },
  {
    id: 2,
    name: "Árak",
    url: "/arak",
  },
  {
    id: 6,
    name: "Rólunk",
    url: "/rolunk",
  },

  {
    id: 4,
    name: "Hírek & Blog",
    url: "/blog",
  },
];

const itemsEng = [
  {
    id: 1,
    name: "Home",
    url: "/en",
  },
  {
    id: 2,
    name: "Services",
    url: "/en/services",
  },
  {
    id: 3,
    name: "Prices",
    url: "/en/Prices",
  },
  {
    id: 4,
    name: "About",
    url: "/en/about",
  },

  {
    id: 5,
    name: "News & Blogs",
    url: "/en/news-blogs",
  },
];
  

const MobileMenuItem = ({mobileClose}) => {
const pathname = usePathname();
const [langHandler, setLangHandler] = useState(false);

useEffect(() => {
  if (pathname.includes('/en')) {
    setLangHandler(true);
  } else {
    setLangHandler(false)
  }
}, [pathname]);
 
return (
    <>
      {!langHandler ? items.map((linkItem)=> (
       <Link onClick={mobileClose}
             className={style.mobileMenuLink }
             href={linkItem.url}
             key={linkItem.id}
             >
            
         <li className={pathname === linkItem.url ? style.active : ''}>
         {linkItem.name}
         </li>
        </Link>))
        :
        itemsEng.map((linkItem)=> (
       <Link onClick={mobileClose}
             className={style.mobileMenuLink }
             href={linkItem.url}
             key={linkItem.id}
             >
         <li className={pathname === linkItem.url ? style.active : ''}>
         {linkItem.name}
         </li>
        </Link>))} 

    </>
  )
}

export default MobileMenuItem