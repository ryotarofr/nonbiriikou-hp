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
import Test from "@/components/layout/test"
import { UsersVoices } from "@/components/layout/users-voices-section"
import { Faq } from "@/components/layout/faq"
import MemberMobileSection from "@/components/layout/member-mobile-section"
import { MemberFetch } from "@/components/layout/member-fetch"
import { ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import LoadingAnimation from "@/components/loading-animation"

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

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading ?
        <div>
          <LoadingAnimation />
        </div>

        :


        <main className="flex-1">
          {/* <section className="h-[90vh]"> */}
          {/* <Test /> */}
          {/* </section> */}
          <section>
            <HeroSection />
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" id="about">
            <AboutMeSection />
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-y">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div className="w-full lg:mt-8">
                  <div className="lg:flex space-x-3 text-center items-end mb-8">
                    <h1 className="lg:leading-tightertext-2xl font-bold tracking-tighter text-2xl sm:text-3xl md:text-[26px]">
                      就労継続支援B型事業
                    </h1>
                    <div className="text-green-800 lg:leading-tighter text-2xl font-bold tracking-tighter sm:text-3xl  md:text-3xl">
                      のんびりいこう
                    </div>
                  </div>
                  <p className="mx-auto my-6 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    作業や活動を通して、様々な発見や成長を感じていただき、それぞれの夢(小さくても)や目標を一緒に設定していくことで「昨日より今日、
                    今日より明日」のさらなる成長や希望を楽しみながら焦らずに自分のペースで「<span className="text-green-600 font-bold">のんびり</span>」と進んでいくことを支援させていただきます。
                    どのような働き方でも「働くことを通じて幸せになる！」を一緒に追求していきましょう！
                  </p>
                  <Link
                    className="inline-flex h-9 mt-2 items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/support"
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
            <UsersVoices />
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-b">
            <MemberFetch />
            {/* <MemberSection /> */}


          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-4 text-2xl font-bold tracking-tighter sm:text-3xl">事業所MAP</h2>
              <Link
                href="https://www.google.co.jp/maps/place/%E3%80%92754-0893+%E5%B1%B1%E5%8F%A3%E7%9C%8C%E5%B1%B1%E5%8F%A3%E5%B8%82%E7%A7%8B%E7%A9%82%E4%BA%8C%E5%B3%B6%EF%BC%91%EF%BC%99%EF%BC%91%EF%BC%91/@34.0383223,131.4122046,15.3z/data=!4m6!3m5!1s0x354485c37911ef59:0xd39645131a23a202!8m2!3d34.0389417!4d131.4166068!16s%2Fg%2F11c193m3_1?hl=ja&entry=ttu"
                className="text-blue-600 text-lg space-x-2 mb-2 flex"
              >
                <div>合同会社ティトグループ</div>
                <ExternalLink />
              </Link>
              <Image src="/image/map2.png" alt="map" width={1920} height={1080} className="rounded-2xl border shadow-md" />

            </div>
          </section>
          {/* <section className="w-full py-12 md:py-24 lg:py-32 border-y">

          <div className="text-center">google map ここに表示</div>
        </section> */}
          <section className="w-full py-12 md:py-24 lg:pb-20 px-3">
            {/* <div className="flex w-full flex-col gap-16 py-8 md:py-8"> */}
            <Faq />
            {/* </div> */}
          </section>
        </main>
      }
    </div>
  )
}
