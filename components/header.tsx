"use client"

import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"


import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import { MainNavItem } from "@/types"
import { MobileNav } from "./mobile-nav"
import { useEffect, useState } from "react"
import useScroll from "@/hooks/use-scroll"

interface MainNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export const Header = ({ items, children }: MainNavProps) => {
  // const scrolled = useScroll(50);
  // const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

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
          <Image src="/logo.svg" alt="logo" width="150" height="40" />
          <span className="sr-only">のんびりいこう</span>
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
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            お問い合わせ
          </Link> */}
        </nav>
      </div>
      {/* <div className="flex justify-between my-auto pt-2">
        {showMobileMenu && items ? (
          <>
            <Link href="/" className="md:hidden">
              <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="logo" width="200" height="40" />
                <span className="sr-only">のんびりいこう</span>
              </div>
            </Link>
          </>
        ) :
          <>
          
            <MobileNav items={items}>{children}</MobileNav>
            <Link href="/" className="md:hidden">
              <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="logo" width="200" height="60" />
                <span className="sr-only">のんびりいこう</span>
              </div>
            </Link>
          </>
        }
        <button
          className=" flex items-center space-x-2 md:hidden ml-3"
          onClick={toggleMobileMenu}
        >
          {showMobileMenu ? <Icons.menu /> : <Icons.close />}
          
        </button>
      </div> */}
    </header>

  )
}