"use client"

import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, CarFront, ChevronLeft, ChevronLeftCircle, ChevronRight, ChevronRightCircle, Fish, FlameKindling, Guitar, MousePointerClick, MoveLeft, MoveRight, Shrub } from 'lucide-react'

function MemberMobileSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const updateCurrent = () => {
    if (!emblaApi || !emblaThumbsApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
  }

  const handlePrevious = () => {
    emblaApi?.scrollPrev()

    updateCurrent()
  }

  const handleNext = () => {
    emblaApi?.scrollNext()

    updateCurrent()
  }

  const handleThumbClick = (index: number) => {
    if (!emblaApi || !emblaThumbsApi) return
    emblaApi.scrollTo(index)

    updateCurrent()
  }

  return (
    <div>
      <div className='text-2xl font-bold tracking-tighter sm:text-3xl text-center mt-10 mb-6'>社員紹介</div>
      <div className="space-y-8 container max-w-3xl lg:max-w-5xl mx-auto">
        <div>

          {/* 下のドット */}
          <div className=" justify-center  gap-3 hidden">
            {members.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleThumbClick(index)}
                className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>

          {/* プレビューのスライダー */}
          <div className="overflow-hidden" ref={emblaThumbsRef}>
            <div className="flex  gap-3">
              {members.map((thumb, index) => (
                <button key={index} onClick={() => handleThumbClick(index)} className="flex-[0_0_20%]">
                  <div
                    className="aspect-video w-full flex items-center justify-center text-xl font-bold"
                    style={{
                      opacity: index === selectedIndex ? 1 : 0.6,
                    }}
                  >
                    <Image src={thumb.avator} alt="thumbnail" width="60" height="60" className="rounded-lg" />
                  </div>
                </button>
              ))}
            </div>
          </div>


        </div>
        <div className="relative">
          <div className=' hidden sm:block'>
            <button
              onClick={handlePrevious}
              className="h-8 w-8 rounded-full flex items-center justify-center bg-white absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full flex items-center justify-center bg-white  absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          {/* <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%]  aspect-video w-full  mx-4 overflow-hidden">
                <img src={slide.url} alt="sample" className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div> */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {members.map((member, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_75%] w-full  mx-4">
                  {/* <img src={slide.url} alt="sample" className="w-full h-full object-cover rounded-lg" /> */}
                  <div>{member.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default MemberMobileSection


const members = [
  {
    desc: <Member1 />,
    avator: "/image/avatars/avatar1.JPG",
  },
  {
    desc: <Member2 />,
    avator: "/image/avatars/avatar2.JPG",
  },
  {
    desc: <Member3 />,
    avator: "/image/avatars/avatar3.JPG",
  },
  {
    desc: <Member4 />,
    avator: "/image/avatars/avatar4.JPG",
  },
  {
    desc: <Member5 />,
    avator: "/image/avatars/avatar5.JPG",
  },
]

const slides = [
  {
    url: '/image/77940-1.jpg',
  },
  {
    url: '/image/77931.jpg',
  },
  {
    url: '/image/4913959475038897143.99396958218ba7a03177a3fe4a737ae1.23080911.jpeg',
  },
  {
    url: '/image/IMG_4712-1.jpg',
  },
]

function Member1() {
  const [dropdown, setDropdown] = useState(0)
  const [toggleImage, setToggleImage] = useState(true)

  return (
    <div className="items-center px-6 pb-6 overflow-hidden ">
      <div className="mx-auto">

        <div className='flex flex-col items-center p-6 space-y-4'>
          {toggleImage ?
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick className='' />
              <Avatar className="w-36 h-36">
                <AvatarImage alt="User Name" src="/image/avatars/avatar1.JPG" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </div>
            :
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick />

              <Image src="/image/avatars/avatar1-2.JPG" alt='' width={400} height={300} className=' rounded-lg' />
            </div>
          }

          <h2 className="text-2xl font-bold">伊藤 卓芳</h2>
        </div>

        <div className=' text-center'>
          {dropdown === 0 && <><div className='font-bold text-gray-800 underline underline-offset-2'>この仕事に対する思い</div></>}
          {dropdown === 1 && <><div className='font-bold text-gray-800 underline underline-offset-2'>これから利用いただく方へのメッセージ</div></>}
          {dropdown === 2 && <><div className='font-bold text-gray-800 underline underline-offset-2'>趣味・好きなこと</div></>}
        </div>


        {dropdown === 0 &&
          <div className=' p-3'>
            『人生一回ポッキリ・・・』どのような働き方をしても、どのように日々を過ごしても、同じように時間は過ぎていきます。
            であるならば、自分たちが考えを具体化できるような、どこにもない『心ある楽しい福祉サービス』を追求し、サービスを受けて
            いただく利用者様(ご家族)、サービスを提供する職員、共に楽しく成長し幸せになれるような会社にしたいと心から思います。
          </div>
        }
        {dropdown === 1 &&
          <div className=' p-3'>
            仕事(作業)や活動、イベント、日常のコミュニケーションなどをと通して『自分らしさ』を発見していただき、自分の夢や目標
            に希望が持てるように・・・！そして、そのきっかけづくりが&quot;のんびりいこう&quot;でできるといいな・・・と思っています！他の人
            と比較することなく、自分のペースで&quot;のんびり&quot;と・・・。素敵な自分発見を我々と一緒に倒しみましょう！！
          </div>
        }
        {dropdown === 2 &&
          <div className='pl-4 sm:pl-10 md:pl-20'>
            <ul className='mx-6 grid grid-cols-2 md:grid-cols-3 h-[160px] items-center'>
              <li className='flex space-x-2 items-center'><FlameKindling /><p>キャンプ</p></li>
              <li className='flex space-x-2 items-center'><Fish /><p>魚釣り</p></li>
              <li className='flex space-x-2 items-center'><Guitar /><p>楽器演奏(ベースギター)</p></li>
              <li className='flex space-x-2 items-center'><Car /><p>ドライブ</p></li>
              <li className='flex space-x-2 items-center'><CarFront /><p>車いじり</p></li>
            </ul>
          </div>
        }
        <div className='flex justify-around text-gray-600'>
          <div
            className={`${dropdown === 0 && "hidden"} rounded-md flex items-center`}
            onClick={() => setDropdown(dropdown - 1)}
          >
            <ChevronLeft
              size={36}
              color='gray'
            />
            <p>もどる</p>
          </div>
          <div
            className={`${dropdown === 2 && "hidden"} rounded-md flex items-center`}
            onClick={() => setDropdown(dropdown + 1)}
          >
            <p>すすむ</p>
            <ChevronRight
              size={36}
              color='gray'

            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Member2() {
  return (
    <Card className="items-center p-6 overflow-hidden">
      <Tabs defaultValue="heart" className="mx-auto">
        <div className='flex flex-col items-center p-6 space-y-4'>
          <Avatar className="w-36 h-36">
            <AvatarImage alt="Youhei Imai" src="/image/avatars/avatar2.JPG" />
            <AvatarFallback>Y.I</AvatarFallback>
          </Avatar>

          <h2 className="text-2xl font-bold">今井 洋平</h2>
        </div>
        <TabsList className='text-gray-500 flex justify-start md:justify-center overflow-scroll'>
          <TabsTrigger value="heart" className='font-bold'>この仕事に対する思い</TabsTrigger>
          <TabsTrigger value="message" className='font-bold'>これから利用いただく方へのメッセージ</TabsTrigger>
          <TabsTrigger value="hobby" className='font-bold'>趣味・好きなこと</TabsTrigger>
        </TabsList>
        <TabsContent value="heart" className=''>
          福祉の仕事には『優しさ』が必要と考えています。優しいという字の中心には『心』という字が置かれています。
          『心くばり』を意識し『心ある支援』がどんな時でもできるようになることが現在の目標です。ティトグループで働きたいと思った
          時の初心や、会社の基本方針である『心から感謝する』『謙虚な気持ちを持つ』を心にとめ優しさを追求していきます。
        </TabsContent>
        <TabsContent value="message">
          初めまして。のんびりいこうの今井洋平と申します。<br />
          人と関わることが中心となる仕事ですが、『人見知り』『話下手』です。<br />
          自分から積極的に会話するのは苦手ですが、聞くことは得意です。ご縁があり&quot;のんびりいこう&quot;で一緒に作業する
          ことになった際には、皆さんの好きなことや得意なことをお聞かせください。のんびりいこうでお待ちしています。
        </TabsContent>
        <TabsContent value="hobby" className='ml-4 sm:ml-10 md:ml-20'>
          <ul className=' list-disc'>
            <li>旅行</li>
            <li>魚釣り</li>
            <li>海鮮系の物を食べること</li>
          </ul>
        </TabsContent>
      </Tabs>


      {/* <p className="text-center text-gray-500 dark:text-gray-400">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p> */}
    </Card>
  )
}
function Member3() {
  return (
    <Card className="flex flex-col items-center p-6 space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage alt="User Name" src="/image/avatars/avatar3.JPG" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">User Name3</h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Card>
  )
}
function Member4() {
  return (
    <Card className="flex flex-col items-center p-6 space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage alt="User Name" src="/image/avatars/avatar4.JPG" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">User Name4</h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Card>
  )
}


function Member5() {
  return (
    <Card className="flex flex-col items-center p-6 space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage alt="User Name" src="/image/avatars/avatar5.JPG" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">User Name5</h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Card>
  )
}

