"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"

export const UsersVoices = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="max-w-5xl mx-auto">
      <div className='text-2xl font-bold tracking-tighter sm:text-3xl text-center'>利用者の声</div>
      <div className="md:grid md:grid-cols-2 justify-center mt-10 md:space-x-10 mx-6">
        <Image src="/image/landing/IMG_1168.JPG" alt="user voice1" className="object-cover rounded-lg" width={600} height={400} />
        <div className="space-y-8">
          <div className="text-center mt-6">
            {/* <div className="md:tracking-widest">や&nbsp;&nbsp; ま&nbsp;&nbsp; う&nbsp;&nbsp; ち&nbsp;&nbsp;&nbsp; け&nbsp;&nbsp; ん&nbsp;&nbsp; す&nbsp;&nbsp; け</div> */}
            <div className="text-2xl md:text-5xl lg:text-6xl">Y&nbsp;. K<span className="text-lg md:text-2xl lg:text-4xl">さん</span></div>
          </div>
          <div className="mx-6">
            この施設は、その日の一人ひとりの体調や状況に合わせて声けけやアドバイスをしてくださり本当にやりやすい環境
            だなと感じています。<br />
            あと、自分の将来の夢・希望に対して一緒に親身になって考えてくださいます。<br />

            {toggle ?
              <>
                <span>
                  この職場に入って一番驚いたことは、何かをするたびに『ありがとうございます』と言われることです。<br />
                  一日の始まりや送迎車が施設に到着した時などにも『今日もお願いします』と言ってくださり『今日も頑張っていこう』
                  という気持ちになります。<br />
                  とても過ごしやすい施設・職員さんなので来てみて下さい。体験されると、きっと良さが分かって頂けると思います。
                </span>
                <div></div>
                <Button onClick={() => setToggle(prev => !prev)} className="my-2">閉じる</Button>
              </>
              : <Button variant="secondary" onClick={() => setToggle(prev => !prev)} className="my-2">続きを読む</Button>}

          </div>
        </div>
      </div>
    </div>
  )
}