import Image from "next/image"

export const UsersVoices = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className='text-2xl font-bold tracking-tighter sm:text-3xl text-center mt-10'>利用者の声</div>
      <div className="md:flex justify-center mt-10 md:space-x-10">
        <Image src="/image/landing/user-voice1.jpg" alt="user voice1" className="mx-auto" width={400} height={400} />
        <div className="space-y-8">
          <div className="text-center">
            <div className="md:tracking-widest">や&nbsp;&nbsp; ま&nbsp;&nbsp; う&nbsp;&nbsp; ち&nbsp;&nbsp;&nbsp; け&nbsp;&nbsp; ん&nbsp;&nbsp; す&nbsp;&nbsp; け</div>
            <div className="text-2xl md:text-5xl lg:text-6xl">山内&nbsp; 健資 <span className="text-lg md:text-2xl lg:text-4xl">さん</span></div>
          </div>
          <div className="mx-6">
            この施設は、その日の一人ひとりの体調や状況に合わせて声けけやアドバイスをそてくださり本当にやりやすい環境
            だなと感じています。<br />
            あと、自分の将来の夢・希望に対して一緒に親身になって考えてくださいます。<br />
            この職場に入って一番驚いたことは、何かをするたびに『ありがとうございます』と言われることです。<br />
            一日の始まりや送迎車が施設に到着した時などにも『今日もお願いします』と言ってくださり『今日も頑張っていこう』
            という気持ちになります。<br />
            とても過ごしやすい施設・職員さんなので来てみて下さい。体験されると、きっと良さが分かって頂けると思います。
          </div>
        </div>
      </div>
    </div>
  )
}