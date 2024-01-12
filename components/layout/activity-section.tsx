"use client"

import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SimulationExercise } from "../ActivitySection/simulation-exercise"
import { WorkMenu } from "../ActivitySection/work-menu"
import { useState } from "react"
import { Button } from "../ui/button"

export const ActivitySection = () => {
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  return (
    <div className=" max-w-6xl mx-auto">
      <div className=" space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">活動内容</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              様々な活動やイベントを主催しています
            </p>
          </div>
        </div>

        <div className="">
          <div className="text-xl font-bold tracking-tighter sm:text-2xl">1.施設内作業</div>
          <p className="text-gray-500 m-2">
            慣れた施設内の作業です。各作業は細分化されており、自分の適性に合った作業から取り組みます。
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/landing/IMG_2143.JPG"
              width="400"
            />
            <h3 className="text-lg font-bold">車部品の加工作業</h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the activity.</p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link> */}
          </div>
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/landing/IMG_2159.JPG"
              width="400"
            />
            <h3 className="text-[16px] font-bold">封入、封かん作業等 / 臨時請負内職作業</h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the activity.</p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link> */}
          </div>
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/landing/IMG_2151.JPG"
              width="400"
            />
            <h3 className="text-lg font-bold">段ボール資材料等の加工作業</h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the activity.</p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link> */}
          </div>
        </div>
        <div className="">
          <div className="text-xl font-bold tracking-tighter sm:text-2xl">2.施設外作業</div>
          <p className="text-gray-500 m-2">
            施設外の作業環境で体を動かす作業です。必要に応じて刈払機の資格も取得いただきます。
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/landing/washing-a.JPG"
              width="400"
            />
            <h3 className="text-lg font-bold">建物内清掃作業A社[月・木曜日]</h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the activity.</p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link> */}
          </div>
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/landing/washing-b.JPG"
              width="400"
            />
            <h3 className="text-lg font-bold">建物内清掃作業B社[金曜日]</h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the activity.</p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link> */}
          </div>
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/landing/grow-delete.JPG"
              width="400"
            />
            <h3 className="text-lg font-bold">管理畑の除草作業</h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the activity.</p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link> */}
          </div>
        </div>

        <div className="md:flex justify-around md:space-x-10 ">
          <SimulationExercise />
          <WorkMenu />
        </div>
        <div className="">
          <div className="">
            <div className="text-xl my-10 font-bold tracking-tighter sm:text-2xl">5.その他の活動</div>
            <p className="text-gray-500 m-2">
              第1・第3土曜に実施！！！
            </p>
          </div>
          <div className="w-full  md:grid md:grid-cols-3">
            {/* <ScrollArea className="h-72 w-full max-w-sm rounded-md border"> */}
            <div className="p-4 text-sm">
              <span className="mb-4 text-lg font-medium leading-none border-b">グローイングセミナー</span>
              <ul className="mt-4 leading-7">
                <li>ビジネスマナーの基本</li>
                <li>アンガーマネジメント</li>
                <li>アサーション</li>
                <li>自己紹介セミナー</li>
                <li>褒めるセミナー</li>
                <li>仕事の朝を整える</li>
                {toggle1 ?
                  <>
                    <li>金銭管理セミナー</li>
                    <li>SNS利用について</li>
                    <li>品質管理について</li>
                    <li>みんな違ってみんないい</li>
                    <li>人から好かれるとは？</li>
                    <li>目標について</li>
                    <li>その夢は叶う！</li>
                    <li>プライベートを充実させよう</li>
                    <li>利用者さんセミナー などなど</li>
                    <Button size="sm" onClick={() => setToggle1(prev => !prev)} className="my-2">閉じる</Button>
                  </> :
                  <Button size="sm" onClick={() => setToggle1(prev => !prev)} className="my-2">もっと見る</Button>
                }

              </ul>
            </div>
            {/* </ScrollArea> */}
            {/* <ScrollArea className="h-72 w-full max-w-sm rounded-md border"> */}
            <div className="p-4 text-sm">
              <span className="mb-4 text-lg font-medium leading-none border-b">調理実習 & EAT体験</span>
              <ul className="mt-4 leading-7">
                <li>わんぱくカレー</li>
                <li>豚丼</li>
                <li>マーボー丼</li>
                <li>ビーフシチュー</li>
                <li>ホワイトシチュー</li>
                <li>瓦そば</li>
                {toggle2 ?
                  <>
                    <li>ミートスパゲッティ</li>
                    <li>冷やしぶっかけうどん</li>
                    <li>餃子定食</li>
                    <li>肉じゃが定食</li>
                    <li>豚茄子定食</li>
                    <li>おむすび定食</li>
                    <li>ホットドッグ</li>
                    <li>焼きそばパン</li>
                    <li>肉野菜炒め定食</li>
                    <li>中華丼</li>
                    <li>焼きビーフン</li>
                    <li>ポトフ</li>
                    <li>ホットケーキ などなど</li>
                    <Button size="sm" onClick={() => setToggle2(prev => !prev)} className="my-2">閉じる</Button>
                  </>
                  :
                  <Button size="sm" onClick={() => setToggle2(prev => !prev)} className="my-2">もっと見る</Button>}
              </ul>
            </div>
            {/* </ScrollArea> */}
            {/* <ScrollArea className="h-72 w-full max-w-sm rounded-md border"> */}
            <div className="p-4 text-sm">
              <span className="mb-4 text-lg font-medium leading-none border-b">季節イベント</span>
              <ul className="mt-4 leading-7">
                <li>◯ 2月 節分行事</li>
                <li>◯ 3月 バレンタインデー</li>
                <li>◯ 4月 利用感謝祭(BBQ)</li>
                <li>◯ 7月 七夕</li>
                <li>◯ 11月 創立記念</li>
                <li>◯ 12月 クリスマス会</li>
              </ul>
            </div>
            {/* </ScrollArea> */}
          </div>
        </div>
      </div>
    </div >

  )
}


