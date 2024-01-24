"use client"

import Link from "next/link"
import { useEffect, useState } from "react"



export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener("click", closeMobileMenuOnClickOutside)

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside)
    }
  }, [showMobileMenu])
  return (

    <header
      className="px-4 lg:px-6 h-16"
    >
      <div className="flex md:flex px-4 lg:px-6 h-16 justify-between items-center">
        <Link className="flex items-center justify-center" href="/">
          <img src="/logo.svg" alt="logo" className="w-[150px]" />
          <span className="sr-only">のんびりいこう</span>
          <img src="/tito-group-logo.svg" alt="logo" className="w-[80px] h-[30px]" />
          <img src="/tito-group-name.svg" alt="logo" className="w-[140px] h-[80px]" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/company">
            会社概要
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/business">
            事業内容
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#activity">
            活動内容
          </Link>
        </nav>
      </div>
    </header>

  )
}