"use client"

import Image from "next/image"
import { useState } from "react"

export const WorkMenu = () => {
  const [selectNumber, setSelectNumber] = useState(10000000)
  const [selectImage, setSelectImage] = useState("/image/work/wassher.jpeg")

  const handleClick1 = () => {
    setSelectNumber(1)
    setSelectImage("/image/work/wassher.jpeg")
  }

  const handleClick2 = () => {
    setSelectNumber(2)
    setSelectImage("/image/placeholder.svg")
  }

  const handleClick3 = () => {
    setSelectNumber(3)
    setSelectImage("/image/placeholder.svg")
  }
  const handleClick4 = () => {
    setSelectNumber(4)
    setSelectImage("/image/placeholder.svg")
  }
  const handleClick5 = () => {
    setSelectNumber(5)
    setSelectImage("/image/placeholder.svg")
  }
  const handleClick6 = () => {
    setSelectNumber(6)
    setSelectImage("/image/placeholder.svg")
  }
  const handleClick7 = () => {
    setSelectNumber(7)
    setSelectImage("/image/placeholder.svg")
  }


  return (
    <div className="my-10">
      <div className="text-xl font-bold tracking-tighter sm:text-2xl">4.ワーク作業メニュー</div>
      <p className="text-gray-500 m-2">
        7種類のワークを正確性、スピード、集中力、器用さ、忍耐力をスコア評価するものです。
      </p>
      <div className="md:grid md:grid-cols-2 items-center">
        <ul className="ml-10 mt-8 flex-col justify-center list-disc">
          <li
            className={`${selectNumber === 1 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick1}
          >
            ワッシャー積上げ作業</li>
          <li
            className={`${selectNumber === 2 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick2}
          >
            ビーズ並べ作業</li>
          <li
            className={`${selectNumber === 3 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick3}
          >
            ブロック照合作業</li>
          <li
            className={`${selectNumber === 4 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick4}
          >
            ブロック積上げ作業</li>
          <li
            className={`${selectNumber === 5 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick5}
          >
            点結び作業</li>
          <li
            className={`${selectNumber === 6 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick6}
          >
            図形カット作業</li>
          <li
            className={`${selectNumber === 7 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick7}
          >
            計算</li>
        </ul>
        <img src="/image/landing/work-sample.JPG" alt="workImage" className="max-w-[240px] rounded-lg hidden lg:block" />
      </div>
    </div>
  )
}