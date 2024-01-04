"use client"

import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import Image from 'next/image'

function CarouselDemo() {
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
      <div className='text-2xl font-bold tracking-tighter sm:text-3xl text-center mt-10'>社員紹介</div>
      <div className="p-6 space-y-8 container max-w-3xl lg:max-w-5xl mx-auto">
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

        {/* 下のドット */}
        <div className="flex justify-center  gap-3">
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
    </div>
  )
}

export default CarouselDemo


const members = [
  {
    desc: <Member1 />,
    avator: "/image/avatars/shadcn.png",
  },
  {
    desc: <Member2 />,
    avator: "/image/avatars/shadcn.png",
  },
  {
    desc: <Member3 />,
    avator: "/image/avatars/shadcn.png",
  },
  {
    desc: <Member4 />,
    avator: "/image/avatars/shadcn.png",
  },
  {
    desc: <Member5 />,
    avator: "/image/avatars/shadcn.png",
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
  return (
    <Card className="flex flex-col items-center p-6 space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage alt="User Name" src="/image/avatars/shadcn.png" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">User Name1</h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Card>
  )
}

function Member2() {
  return (
    <Card className="flex flex-col items-center p-6 space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage alt="User Name" src="/image/avatars/shadcn.png" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">User Name2</h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Card>
  )
}
function Member3() {
  return (
    <Card className="flex flex-col items-center p-6 space-y-4">
      <Avatar className="w-24 h-24">
        <AvatarImage alt="User Name" src="/image/avatars/shadcn.png" />
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
        <AvatarImage alt="User Name" src="/image/avatars/shadcn.png" />
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
        <AvatarImage alt="User Name" src="/image/avatars/shadcn.png" />
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

