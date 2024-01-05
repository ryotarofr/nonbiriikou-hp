"use client"

import Image from "next/image"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import HeroSection from "@/components/layout/hero-section"
import MemberSection from "@/components/layout/member-section"
import { useEffect, useState } from "react"
import { useInView } from 'react-intersection-observer';
import "./style.css"
import { ActivitySection } from "@/components/layout/activity-section"
import { AboutMeSection } from "@/components/layout/about-me-section"

export default function IndexPage() {
  const [ref, inView] = useInView({
    triggerOnce: true, // 一度だけトリガーする
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      // 要素が画面に表示されたらアニメーションを開始
      setIsVisible(true);
    }
  }, [inView]);


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section>
          <HeroSection />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <AboutMeSection />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="w-full">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  就労継続支援B型事業
                </h1>
                <p className="mx-auto my-6 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  作業や活動を通して、様々な発見や成長を感じていただき、それぞれの夢(小さくても)や目標を一緒に設定していくことで「昨日より今日、
                  今日より明日」のさらなる成長や希望を楽しみながら焦らずに自分のペースで「<span className="text-green-600 font-bold">のんびり</span>」と進んでいくことを支援させていただきます。
                  どのような働き方でも「働くことを通じて幸せになる！」を一緒に追求していきましょう！
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  もっと見る
                </Link>
              </div>
              <div>
                <Image src="/image/image1.jpg" alt="1" width="1000" height="800" className=" rounded-lg" />
                {/* <img
                  alt="Hero"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="500"
                  src="/placeholder.svg"
                  width="500"
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="activity">
          <ActivitySection />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-y">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">利用者の声</h2>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <MemberSection />
          {/* <Test /> */}
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          {/* map */}
          <div className="text-center">google map ここに表示</div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <TwitterIcon className="h-6 w-6" />
          <FacebookIcon className="h-6 w-6" />
          <InstagramIcon className="h-6 w-6" />
        </div>
      </footer> */}
    </div>
  )
}
