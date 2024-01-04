import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] lg:h-[800px]">
      <img
        alt="Person using HP device"
        className="absolute inset-0 object-cover w-full h-full"
        height="800"
        src="/image/image1.jpg"
        style={{
          aspectRatio: "1920/800",
          objectFit: "cover",
        }}
        width="1920"
      />
      <div className="absolute inset-0 " />
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-6 lg:px-8">
        {/* <h1 className="text-3xl md:text-3xl lg:text-5xl text-white font-bold max-w-[600px]">
          就労継続支援B型事業 のんびりいこう
        </h1> */}
        <p className="mt-4 text-lg md:text-xl text-white max-w-[500px]">
          自分のペースで「のんびり」と・・・。
        </p>
        <p className="mt-4 text-lg md:text-xl text-white max-w-[500px]">
          でも明確な目標を持ち楽しんで進んでいく
        </p>
        <p className="mt-4 text-lg md:text-xl text-white max-w-[500px]">
          ことを支援させていただきます。
        </p>
        <div className="mt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            href="#"
          >
            私たちについて
          </Link>
        </div>
      </div>
    </section>
  )
}

