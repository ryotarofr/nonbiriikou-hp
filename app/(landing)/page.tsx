"use client"

import Image from "next/image"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import HeroSection from "@/components/layout/hero-section"
import MemberSection from "@/components/layout/member-section"
import Footer from "@/components/footer"
import { Header } from "@/components/header"
import { landingConfig } from "@/config/landing"
import { useEffect, useState } from "react"
import { useInView } from 'react-intersection-observer';
import "./style.css"
import { ActivitySection } from "@/components/layout/activity-section"

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
      <Header items={landingConfig.mainNav} />
      <main className="flex-1">
        <section>
          <HeroSection />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="space-y-12 px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">私たちについて</h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card
                ref={ref}
                className={`fade-in ${isVisible ? 'active' : ''} relative overflow-hidden h-[200px]`}
              // className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-orange-500 transform -rotate-12" />
                <Image
                  src="/image/placeholder.svg"
                  alt="logo"
                  width="400"
                  height="40"
                  className="absolute object-cover"
                />
                <CardContent
                  className="p-6 relative">
                  <h2 className="text-xl text-center font-bold mb-2">会社概要</h2>
                  <p className="text-gray-600 text-center">company</p>
                  {/* <Button className="mt-4">Learn More</Button> */}
                </CardContent>
              </Card>
              <Card
                ref={ref}
                className={`fade-in2 ${isVisible ? 'active' : ''} relative overflow-hidden h-[200px]`}
              // className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-green-500 transform -rotate-12" />
                <Image
                  src="/image/placeholder.svg"
                  alt="logo"
                  width="400"
                  height="40"
                  className="absolute object-cover"
                />
                <CardContent className="p-6 relative">
                  <h2 className="text-xl text-center font-bold mb-2">事業内容</h2>
                  <p className="text-gray-600 text-center">services</p>
                  {/* <Button className="mt-4">Learn More</Button> */}
                </CardContent>
              </Card>
              <Card
                ref={ref}
                className={`fade-in3 ${isVisible ? 'active' : ''} relative overflow-hidden h-[200px]`}
              // className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-sky-500 transform -rotate-12" />
                <Image
                  src="/image/placeholder.svg"
                  alt="logo"
                  width="400"
                  height="40"
                  className="absolute object-cover"
                />
                <CardContent className="p-6 relative">
                  <h2 className="text-xl text-center font-bold mb-2">活動内容</h2>
                  <p className="text-gray-600 text-center">activities</p>
                  {/* <Button className="mt-4">Learn More</Button> */}
                </CardContent>
              </Card>
              {/* <Card className="bg-[#369036]">
                <CardHeader>
                  <CardTitle className="text-gray-200">事業内容</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 dark:text-gray-400">services</p>
                </CardContent>
              </Card>
              <Card className="bg-[#277631]">
                <CardHeader>
                  <CardTitle className="text-gray-200">活動内容</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 dark:text-gray-400">activities</p>
                </CardContent>
              </Card> */}
            </div>
          </div>
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
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <ActivitySection />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <MemberSection />
          {/* <Test /> */}
        </section>
      </main>
      <Footer />
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
