import Image from "next/image"
import Link from "next/link"

export const ActivitySection = () => {
  return (
    <div>
      <div className=" space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">活動内容</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              様々な活動やイベントを主催しています
            </p>
          </div>
        </div>
        <div className="ml-3 lg:ml-20">
          <div className="text-xl font-bold tracking-tighter sm:text-2xl">1.作業所内作業</div>
          <p className="text-gray-500 m-2">
            慣れた作業所内の作業です。各作業は細分化されており、自分の適性に合った作業から取り組みます。
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/placeholder.svg"
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
              src="/image/placeholder.svg"
              width="400"
            />
            <h3 className="text-lg font-bold">封入、封かん作業等 / 臨時請負内職作業</h3>
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
              src="/image/placeholder.svg"
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
        <div className="ml-3 lg:ml-20">
          <div className="text-xl font-bold tracking-tighter sm:text-2xl">2.作業所外作業</div>
          <p className="text-gray-500 m-2">
            事業所外の作業環境で体を動かす作業です。必要に応じて刈払機の資格も取得いただきます。
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Image
              alt="Activity Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height="300"
              src="/image/placeholder.svg"
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
              src="/image/placeholder.svg"
              width="400"
            />
            <h3 className="text-lg font-bold">建物内清掃作業A社B社[金曜日]</h3>
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
              src="/image/placeholder.svg"
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

        <div className="max-w-6xl mx-auto md:flex justify-around md:space-x-10 ">
          <div className="my-10">
            <div className="text-xl font-bold tracking-tighter sm:text-2xl">3.模擬作業訓練メニュー</div>
            <p className="text-gray-500 m-2">
              事業所外の作業環境で体を動かす作業です。必要に応じて刈払機の資格も取得いただきます。
            </p>
            <div className="ml-4 mt-8 flex-col justify-center space-y-2">
              <li>ボルト組付作業訓練</li>
              <li>フック組付作業訓練</li>
              <li>ジョイント部品組付訓練</li>
              <li>部品袋詰め作業訓練</li>
              <li>クリップ選別作業訓練</li>
              <li>ボタン選び作業訓練</li>
            </div>
          </div>
          <div className="my-10">
            <div className="text-xl font-bold tracking-tighter sm:text-2xl">4.ワーク作業メニュー</div>
            <p className="text-gray-500 m-2">
              事業所外の作業環境で体を動かす作業です。必要に応じて刈払機の資格も取得いただきます。
            </p>
          </div>
        </div>
      </div>
    </div >

  )
}
