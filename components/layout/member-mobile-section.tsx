"use client"

import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Car, CarFront, ChevronLeft, ChevronLeftCircle, ChevronRight, ChevronRightCircle, Fish, FlameKindling, Guitar, MousePointerClick, Baby, Coffee, CookingPot, Drum, Flower2, Instagram, MessageSquareHeart, MonitorPlay, Plane, Shirt, Shrub, Tractor, Utensils, Wrench } from 'lucide-react'

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
                <AvatarImage alt="伊藤 卓芳" src="/image/avatars/avatar1.JPG" />
                <AvatarFallback>伊藤 卓芳</AvatarFallback>
              </Avatar>
            </div>
            :
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick />

              <Image src="/image/avatars/avatar1-2.JPG" alt='' width={400} height={300} className=' rounded-lg' />
            </div>
          }

          <div className='flex items-end'>
            <p className='text-gray-600 text-lg mr-2'>代表</p>
            <h2 className="text-2xl font-bold">伊藤 卓芳</h2>
          </div>
        </div>

        <div className=' text-center'>
          {dropdown === 0 && <><div className='font-bold text-gray-800 underline underline-offset-2'>この仕事に対する思い</div></>}
          {dropdown === 1 && <><div className='font-bold text-gray-800 underline underline-offset-2'>これから利用いただく方へのメッセージ</div></>}
          {dropdown === 2 && <><div className='font-bold text-gray-800 underline underline-offset-2'>趣味・好きなこと</div></>}
        </div>


        {dropdown === 0 &&
          <div className=' p-3'>
            『人生一回ポッキリ！』どのような働き方をしても、どのように日々を過ごしても、同じように時間は過ぎていきます。
            であるならば、自分たちの考えを具現化できるような、どこにもない『心ある楽しい福祉サービス』を追求し、サービスを受けていただく利用者様(ご家族)、サービスを提供する職員、共に楽しく成長し幸せになれるような会社にしたいと心から思います。
          </div>
        }
        {dropdown === 1 &&
          <div className=' p-3'>
            仕事(作業)や活動、イベント、日常のコミュニケーションなどを通して『自分らしさ』を発見していただき、自分の夢や目標に希望が持てるように！そして、そのきっかけづくりが “のんびりいこう” でできるといいなと思っています！他の人と比較することなく、自分のペースで “のんびり” と・・・。素敵な自分発見を我々と一緒に楽しみましょう！！
          </div>
        }
        {dropdown === 2 &&
          <div className='sm:pl-10 md:pl-20'>
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
  const [dropdown, setDropdown] = useState(0)
  const [toggleImage, setToggleImage] = useState(true)
  return (
    <Card className="items-center px-6 pb-6 overflow-hidden">
      <div className="mx-auto">
        <div className='flex flex-col items-center p-6 space-y-4'>
          {toggleImage ?
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick className='' />
              <Avatar className="w-36 h-36">
                <AvatarImage alt="今井 洋平" src="/image/avatars/avatar2.JPG" />
                <AvatarFallback>今井 洋平</AvatarFallback>
              </Avatar>
            </div>
            :
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick />

              <Image src="/image/avatars/avatar2-2.JPG" alt='' width={400} height={300} className=' rounded-lg' />
            </div>
          }
          <div className='flex items-end'>
            <p className='text-gray-600 text-lg mr-2'>課長</p>
            <h2 className="text-2xl font-bold">今井 洋平</h2>
          </div>
        </div>
        <div className=' text-center'>
          {dropdown === 0 && <><div className='font-bold text-gray-800 underline underline-offset-2'>この仕事に対する思い</div></>}
          {dropdown === 1 && <><div className='font-bold text-gray-800 underline underline-offset-2'>これから利用いただく方へのメッセージ</div></>}
          {dropdown === 2 && <><div className='font-bold text-gray-800 underline underline-offset-2'>趣味・好きなこと</div></>}
        </div>


        {dropdown === 0 &&
          <div className=' p-3'>
            福祉の仕事には『優しさ』が必要と考えています。優しいという字の中心には『心』という字が置かれています。
            『心くばり』を意識し『心ある支援』がどんな時でもできるようになることが現在の目標です。ティトグループで働きたいと思った時の初心や、会社の基本方針である『心から感謝する』『謙虚な気持ちを持つ』を心にとめ優しさを追求していきます。。
          </div>
        }
        {dropdown === 1 &&
          <div className=' p-3'>
            初めまして。のんびりいこうの今井洋平と申します。<br />
            人と関わることが中心となる仕事ですが、『人見知り』『話下手』です。<br />
            自分から積極的に会話するのは苦手ですが、聞くことは得意です。ご縁があり&quot;のんびりいこう&quot;で一緒に作業することになった際には、皆さんの好きなことや得意なことをお聞かせください。のんびりいこうでお待ちしています。
          </div>
        }
        {dropdown === 2 &&
          <div className=' sm:pl-10 md:pl-20'>
            <ul className='mx-6 grid grid-cols-2 md:grid-cols-3 h-[160px] items-center'>
              <li className='flex space-x-2 items-center'><Plane /><p>旅行</p></li>
              <li className='flex space-x-2 items-center'><Fish /><p>魚釣り</p></li>
              <li className='flex space-x-2 items-center'><Utensils /><p>海鮮系の物を食べること</p></li>
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
    </Card>
  )
}
function Member3() {
  const [dropdown, setDropdown] = useState(0)
  const [toggleImage, setToggleImage] = useState(true)
  return (
    <Card className="items-center px-6 pb-6 overflow-hidden">
      <div defaultValue="heart" className="mx-auto">
        <div className='flex flex-col items-center p-6 space-y-4'>
          {toggleImage ?
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick className='' />
              <Avatar className="w-36 h-36">
                <AvatarImage alt="山本 和磨" src="/image/avatars/avatar3.JPG" />
                <AvatarFallback>山本 和磨</AvatarFallback>
              </Avatar>
            </div>
            :
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick />

              <Image src="/image/avatars/avatar3-2.JPG" alt='' width={400} height={300} className=' rounded-lg' />
            </div>
          }
          <div className='flex items-end'>
            <p className='text-gray-600 text-lg mr-2'>主任</p>
            <h2 className="text-2xl font-bold">山本 和磨</h2>
          </div>
        </div>
        <div className=' text-center'>
          {dropdown === 0 && <><div className='font-bold text-gray-800 underline underline-offset-2'>この仕事に対する思い</div></>}
          {dropdown === 1 && <><div className='font-bold text-gray-800 underline underline-offset-2'>これから利用いただく方へのメッセージ</div></>}
          {dropdown === 2 && <><div className='font-bold text-gray-800 underline underline-offset-2'>趣味・好きなこと</div></>}
        </div>


        {dropdown === 0 &&
          <div className=' p-3'>
            私は自分に自信が無く上手くいかない事も多々あり、周囲に迷惑をかけてきました。そんな中、色々な人に出会い支えられ今があると思っています。生活する上で悩み苦しむことは誰にでもあります。自分が周囲に支えられているように、自分も同じようにこの仕事を通じて誰かを支えていきたい・・・！ 微力かもしれませんが、誰かの力になれたらと考えています。これからもたくさんの出会いに感謝し、日々精進して参ります。
          </div>
        }
        {dropdown === 1 &&
          <div className=' p-3'>
            就労Bという特性上、働く事は不可欠ですが、働く形は人それぞれだと思います。自分のペースで色々経験し楽しんで仕事をする中で、休まず出勤出来た、◯個製品を仕上げた・・・どんな些細な事でも『出来た！』を積み重ね、今より自分をすごいと思える、笑顔と自信に満ちた未来を一緒に作っていけたら嬉しいです。ここまでご一読いただき感謝申し上げます。『HP見ました』と言って頂くと・・・笑 お会いできるのを心待ちにしております。
          </div>
        }
        {dropdown === 2 &&
          <div className='pt-4 sm:pl-10 md:pl-20'>
            <ul className='mx-6 grid grid-cols-2 md:grid-cols-3 h-[160px] items-center'>
              <li className='flex space-x-2 items-center'><Wrench /><p>DIY</p></li>
              <li className='flex space-x-2 items-center'><FlameKindling /><p>キャンプ</p></li>
              <li className='flex space-x-2 items-center'><Instagram /><p>ガジェット収集</p></li>
              <li className='flex space-x-2 items-center'><MonitorPlay size={48} /><p>サブカルチャー(ゲーム、漫画、アニメ etc)</p></li>
              <li className='flex space-x-2 items-center'><Shirt /><p>ファッション</p></li>
              <li className='flex space-x-2 items-center'><Coffee /><p>カフェ巡り</p></li>
              <li className='flex space-x-2 items-center'><Baby /><p>息子と遊ぶこと</p></li>
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
    </Card>
  )
}
function Member4() {
  const [dropdown, setDropdown] = useState(0)
  const [toggleImage, setToggleImage] = useState(true)
  return (
    <Card className="items-center px-6 pb-6 overflow-hidden">
      <div defaultValue="heart" className="mx-auto">
        <div className='flex flex-col items-center p-6 space-y-4'>
          {toggleImage ?
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick className='' />
              <Avatar className="w-36 h-36">
                <AvatarImage alt="田邉 真由美" src="/image/avatars/avatar4.JPG" />
                <AvatarFallback>田邉 真由美</AvatarFallback>
              </Avatar>
            </div>
            :
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick />

              <Image src="/image/avatars/avatar4-2.JPG" alt='' width={400} height={300} className=' rounded-lg' />
            </div>
          }
          <div className='flex items-end'>
            <p className='text-gray-600 text-lg mr-2'></p>
            <h2 className="text-2xl font-bold">田邉 真由美</h2>
          </div>
        </div>
        <div className=' text-center'>
          {dropdown === 0 && <><div className='font-bold text-gray-800 underline underline-offset-2'>この仕事に対する思い</div></>}
          {dropdown === 1 && <><div className='font-bold text-gray-800 underline underline-offset-2'>これから利用いただく方へのメッセージ</div></>}
          {dropdown === 2 && <><div className='font-bold text-gray-800 underline underline-offset-2'>趣味・好きなこと</div></>}
        </div>


        {dropdown === 0 &&
          <div className=' p-3'>
            学生時代の私は、福祉で働く自分を想像もしませんでした。初めての就職先はものづくりの会社。その後、自分の心や体調と相談しながらいくつか職を経験して、たくさんの出逢いの中で現在の仕事と仲間、そして利用者さんたちとのご縁をいただきました。現場では福祉人として至らない自分を痛感させられますが、『働くことは大変だけど楽しい』を皆さんと共有し “人として” の信頼とつながりを深めていきたいです。ご縁って不思議。
          </div>
        }
        {dropdown === 1 &&
          <div className=' p-3'>
            “のんびりいこう” はいろんなカラーの職員が揃っています。その中でも私はどうやら「ちょっとまじめで厳しい人」という印象を持たれることが多いようです(汗)。「優しい私」はまだまだ修行中ですが、私の得意は『困ったことがある⇨じゃあどうする？』を考えること。皆さんが少しでも安心して過ごしやすい職場になるように、一緒に環境づくりをいたします。弊社で一緒に、あなたのいろいろな未来を創造（想像）してみませんか？
          </div>
        }
        {dropdown === 2 &&
          <div className='sm:pl-10 md:pl-20 pt-4'>
            <ul className='mx-6 grid grid-cols-2 md:grid-cols-3 h-[160px] items-center'>
              <li className='flex space-x-2 items-center'><MessageSquareHeart /><p>寝ること</p></li>
              <li className='flex space-x-2 items-center'><Baby size={48} /><p>子どもたちの寝顔を毎晩写真に撮ること</p></li>
              <li className='flex space-x-2 items-center'><Drum size={48} /><p>ミュージカル鑑賞(今は行けないけど)</p></li>
              <li className='flex space-x-2 items-center'><Tractor /><p>梅干しづくり</p></li>
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
    </Card>
  )
}

function Member5() {
  const [dropdown, setDropdown] = useState(0)
  const [toggleImage, setToggleImage] = useState(true)
  return (
    <Card className="items-center px-6 pb-6 overflow-hidden">
      <div defaultValue="heart" className="mx-auto">
        <div className='flex flex-col items-center p-6 space-y-4'>
          {toggleImage ?
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick className='' />
              <Avatar className="w-36 h-36">
                <AvatarImage alt="藤井 香織" src="/image/avatars/avatar5.JPG" />
                <AvatarFallback>藤井 香織</AvatarFallback>
              </Avatar>
            </div>
            :
            <div onClick={() => setToggleImage(prev => !prev)}>
              <MousePointerClick />

              <Image src="/image/avatars/avatar5-2.jpg" alt='' width={400} height={300} className=' rounded-lg' />
            </div>
          }
          <div className='flex items-end'>
            <p className='text-gray-600 text-lg mr-2'></p>
            <h2 className="text-2xl font-bold">藤井 香織</h2>
          </div>
        </div>
        <div className=' text-center'>
          {dropdown === 0 && <><div className='font-bold text-gray-800 underline underline-offset-2'>この仕事に対する思い</div></>}
          {dropdown === 1 && <><div className='font-bold text-gray-800 underline underline-offset-2'>これから利用いただく方へのメッセージ</div></>}
          {dropdown === 2 && <><div className='font-bold text-gray-800 underline underline-offset-2'>趣味・好きなこと</div></>}
        </div>


        {dropdown === 0 &&
          <div className=' p-3'>
            以前は事務の仕事をしていましたが、ご縁あって福祉の仕事へと転身しました。福祉の仕事はまだまだ経験浅いですが、これまでの人生で学んだことをお伝えし参考にしてほしい、自分らしく過ごし明るく元気に楽しく生活していくお手伝いをしたい、皆さんと共に過ごしお互い色々な事にチャレンジして成長していき「出来た！」という喜びを一緒に感じていきたいという想いで皆さんと頑張っていきたいと思います。
          </div>
        }
        {dropdown === 1 &&
          <div className=' p-3'>
            自然豊かな環境でゆったりと過ごせます。休憩時間は一人でゆっくり過ごす方、スマホをみて過ごす方、職員と話をしたりトランプをして過ごす方など利用者さんも職員も楽しみの笑顔あふれる時間です。
            焦らずゆっくりのんびりとご自分のペースで過ごしながら、一緒に夢や目標に向かって行けるように心温かな支援をしていきたいと思います。ぜひ見学にいらしてください。
          </div>
        }
        {dropdown === 2 &&
          <div className='sm:pl-10 md:pl-20'>
            <ul className='mx-6 grid grid-cols-2 md:grid-cols-3 h-[160px] items-center'>
              <li className='flex space-x-2 items-center'><Car /><p>ドライブ</p></li>
              <li className='flex space-x-2 items-center'><Flower2 /><p>花の観賞</p></li>
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
    </Card>
  )
}