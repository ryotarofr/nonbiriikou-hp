"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import { MainNavItem } from "@/types"
import { MobileNav } from "./mobile-nav"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  React.useEffect(() => {
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
    <div className="w-full flex md:justify-between gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <img src="/tito-group-logo.svg" alt="logo" className="w-[80px] h-[30px]" />
        <img src="/tito-group-name.svg" alt="logo" className="w-[140px] h-[64px]" />
      </Link>

      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors  hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              <span className="hover:border-b-2 hover:border-green-700">{item.title}</span>
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className=" sticky flex items-center space-x-2 md:hidden ml-3"
        onClick={toggleMobileMenu}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
      </button>
      {showMobileMenu && items ? (
        <>
          <MobileNav items={items}>{children}</MobileNav>
          <Link className="flex items-center justify-center" href="/">
            <img src="/tito-group-logo.svg" className="w-[80px] h-[30px]" />
            <img src="/tito-group-name.svg" className="w-[140px] h-[80px]" />
          </Link>
        </>
      ) :
        <>
          <Link className="flex items-center justify-center md:hidden" href="/">
            <img src="/tito-group-logo.svg" className="w-[80px] h-[30px]" />
            <img src="/tito-group-name.svg" className="w-[140px] h-[80px]" />
          </Link>
        </>
      }
    </div>
  )
}
