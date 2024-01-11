"use client"

import Image from "next/image";
import Link from "next/link"
import React, { useState, useEffect, useRef } from 'react';


const ImageSlider = () => {
  const images = ['/image/landing/landing1.JPG', '/image/landing/landing2.JPG', '/image/landing/landing3.JPG'];
  const [currentImage, setCurrentImage] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにクリアする
  // }, []);

  return <Image src={images[currentImage]} alt="Slider" width={2000} height={1800} className="absolute inset-0 object-cover w-full h-full" />;
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] lg:h-[800px]">
      {/* <img
        alt="Person using HP device"
        className="absolute inset-0 object-cover w-full h-full"
        height="1800"
        src="/image/landing/landing1.JPG"
        // style={{
        //   aspectRatio: "1920/800",
        //   objectFit: "cover",
        // }}
        width="3000"
      /> */}
      <ImageSlider />
      <div className="absolute inset-0 " />
      {/* <div className=" absolute text-2xl lg:text-[70px] top-[100px] right-10 text-green-600 font-extrabold">のんびりいこう</div> */}
      {/* <Image src="/logo.svg" alt="logo" width={600} height={300} className="relative w-[200px] h-[100px] top-[100px] left-1/3" /> */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-10 lg:px-20">
        {/* <h1 className="text-3xl md:text-3xl lg:text-5xl text-white font-bold max-w-[600px]">
          就労継続支援B型事業 のんびりいこう
        </h1> */}
        <p className="mt-4 text-lg md:text-3xl text-white max-w-[500px]">
          自分のペースで「のんびり」と・・・。
        </p>
        <p className="mt-4 text-lg md:text-3xl text-white max-w-[500px]">
          でも明確な目標を持ち楽しんで進んでいく
        </p>
        <p className="mt-4 text-lg md:text-3xl text-white max-w-[500px]">
          ことを支援させていただきます。
        </p>
        <div className="mt-6">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            href="#about"
          >
            私たちについて
          </Link>
        </div>
      </div>
    </section>
  )
}

