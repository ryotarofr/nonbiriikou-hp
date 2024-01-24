"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"

export const UsersVoices = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className='text-2xl font-bold tracking-tighter sm:text-3xl text-center'>利用者の声</div>
      <div className="md:grid md:grid-cols-2 justify-center mt-10 md:space-x-10 mx-6">
        <img src="/image/landing/user-voice1.jpg" alt="user voice1" className="w-full lg:max-w-[600px] object-cover rounded-3xl mx-auto" />
        <div className="space-y-8">
          <div className="flex-col justify-center md:justify-start mt-6">
            <div className="hidden md:block md:tracking-widest">や&nbsp;&nbsp;ま&nbsp;&nbsp;う&nbsp;&nbsp;ち&nbsp;&nbsp;&nbsp;け&nbsp;&nbsp;ん&nbsp;&nbsp;す&nbsp;&nbsp;け</div>
            <div className="md:hidden">やま&nbsp;うち&nbsp;&nbsp;けん&nbsp;すけ</div>
            <div className="text-3xl md:text-5xl lg:text-6xl">山内&nbsp; 健資 <span className="text-lg md:text-2xl lg:text-4xl">さん</span></div>
          </div>
          <div className="mx-6">
            この施設は、その日の一人ひとりの体調や状況に合わせて声かけやアドバイスをしてくださり本当にやりやすい環境
            だなと感じています。<br />
            あと、自分の将来の夢・希望に対して一緒に親身になって考えてくださいます。<br />

            <Link href="https://drive.google.com/file/d/1pGZuDbDux7hX2lkiR9go_Q12rVlOHlZ0/view?usp=sharing">
              <Button variant="secondary" className="my-2">続きを読む</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}