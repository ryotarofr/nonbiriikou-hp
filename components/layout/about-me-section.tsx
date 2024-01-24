"use client"

import { Card, CardContent } from "../ui/card"
import Link from "next/link";

export const AboutMeSection = () => {
  return (
    <div className="space-y-12 px-4 md:px-6">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">私たちについて</h2>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl grid-cols-1 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <Link href="/company">
          <Card
            className={`relative overflow-hidden h-[200px]`}>
            <img
              src="/image/landing/IMG_1688.JPG"
              alt="logo"
              className="absolute object-cover w-full hover:opacity-70"
            />
            <CardContent
              className="p-6 relative">
              <div className="bg-white/60 pt-2 rounded-lg">
                <h2 className="text-xl text-center font-bold mb-2">会社概要</h2>
                <p className="text-gray-600 text-center">company</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/business">
          <Card
            className={`relative overflow-hidden h-[200px]`}>
            <img
              src="/image/landing/IMG_1848.JPG"
              alt="logo"
              className="absolute object-cover w-full hover:opacity-70"
            />
            <CardContent className="p-6 relative">
              <div className="bg-white/60 pt-2 rounded-lg">
                <h2 className="text-xl text-center font-bold mb-2">事業内容</h2>
                <p className="text-gray-600 text-center">services</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="#activity">
          <Card className={`relative overflow-hidden h-[200px]`}>
            <img
              src="/image/landing/IMG_1167.JPG"
              alt="logo"
              className="absolute object-cover w-full hover:opacity-70"
            />
            <CardContent className="p-6 relative">
              <div className="bg-white/60 pt-2 rounded-lg">
                <h2 className="text-xl text-center font-bold mb-2">活動内容</h2>
                <p className="text-gray-600 text-center">activities</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}