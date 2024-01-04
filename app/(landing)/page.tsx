import Image from "next/image"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import HeroSection from "@/components/layout/hero-section"
import MemberSection from "@/components/layout/member-section"
import Footer from "@/components/footer"
import { Header } from "@/components/header"
import { landingConfig } from "@/config/landing"


export default function IndexPage() {
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
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-orange-500 transform -rotate-12" />
                {/* <Image
                  src="/image/image1.jpg"
                  alt="logo"
                  width="400"
                  height="40"
                  className="absolute object-cover"
                /> */}
                <CardContent className="p-6 relative">
                  <h2 className="text-xl text-center font-bold mb-2">会社概要</h2>
                  <p className="text-gray-600 text-center">company</p>
                  {/* <Button className="mt-4">Learn More</Button> */}
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-green-500 transform -rotate-12" />
                {/* <Image
                  src="/image/image1.jpg"
                  alt="logo"
                  width="400"
                  height="40"
                  className="absolute object-cover"
                /> */}
                <CardContent className="p-6 relative">
                  <h2 className="text-xl text-center font-bold mb-2">事業内容</h2>
                  <p className="text-gray-600 text-center">services</p>
                  {/* <Button className="mt-4">Learn More</Button> */}
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-sky-500 transform -rotate-12" />
                {/* <Image
                  src="/image/image1.jpg"
                  alt="logo"
                  width="400"
                  height="40"
                  className="absolute object-cover"
                /> */}
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
                <Image src="/image/image1.jpg" alt="1" width="1000" height="800" />
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
        <section>
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

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
