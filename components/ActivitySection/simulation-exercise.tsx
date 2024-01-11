"use client"

import Image from "next/image"
import { useState } from "react"

export const SimulationExercise = () => {
  const [selectNumber, setSelectNumber] = useState(100000000000)
  const [selectImage, setSelectImage] = useState("/image/landing/simulation-Training.JPG")

  const handleClick1 = () => {
    setSelectNumber(1)
    setSelectImage("/image/work/bolt.webp")
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
  return (
    <div className="my-10">
      <div className="text-xl font-bold tracking-tighter sm:text-2xl">3.模擬作業訓練メニュー</div>
      <p className="text-gray-500 m-2">
        手先を使う模擬的な作業訓練です。品質管理、時間管理をしながら実施します。
      </p>
      <div className="md:grid md:grid-cols-2 items-center">
        <ul className="ml-10 mt-8 flex-col justify-center list-disc">
          <li
            className={`${selectNumber === 1 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick1}
          >
            ボルト組付作業訓練
          </li>
          <li
            className={`${selectNumber === 2 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick2}
          >
            フック組付作業訓練
          </li>
          <li
            className={`${selectNumber === 3 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick3}
          >
            ジョイント部品組付訓練
          </li>
          <li
            className={`${selectNumber === 4 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick4}
          >
            部品袋詰め作業訓練
          </li>
          <li
            className={`${selectNumber === 5 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick5}
          >
            クリップ選別作業訓練
          </li>
          <li
            className={`${selectNumber === 6 ? 'bg-green-50 shadow-md' : ''} rounded-md py-2`}
          // onClick={handleClick6}
          >
            ボタン選び作業訓練
          </li>
        </ul>
        <Image src="/image/landing/simulation-Training.JPG" alt="workImage" width={400} height={200} className="rounded-lg hidden md:block" />
      </div>
    </div>
  )
}