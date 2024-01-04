"use client"

import { useState } from "react";
import { Card, CardContent } from "../ui/card"

import { useInView } from 'react-intersection-observer';
import Image from "next/image";

export const AboutMeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 一度だけトリガーする
  });


  return (
    <div className="space-y-12 px-4 md:px-6">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">私たちについて</h2>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <Card
          className={`
          
          relative overflow-hidden h-[200px]`}
        // className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-orange-500 transform -rotate-12" />
          <Image
            src="/image/placeholder.svg"
            alt="logo"
            width="400"
            height="40"
            className="absolute object-cover"
          />
          <CardContent
            className="p-6 relative">
            <h2 className="text-xl text-center font-bold mb-2">会社概要</h2>
            <p className="text-gray-600 text-center">company</p>
            {/* <Button className="mt-4">Learn More</Button> */}
          </CardContent>
        </Card>
        <Card
          className={`
          
          relative overflow-hidden h-[200px]`}
        // className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-green-500 transform -rotate-12" />
          <Image
            src="/image/placeholder.svg"
            alt="logo"
            width="400"
            height="40"
            className="absolute object-cover"
          />
          <CardContent className="p-6 relative">
            <h2 className="text-xl text-center font-bold mb-2">事業内容</h2>
            <p className="text-gray-600 text-center">services</p>
            {/* <Button className="mt-4">Learn More</Button> */}
          </CardContent>
        </Card>
        <Card
          className={`
          
          relative overflow-hidden h-[200px]`}
        // className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-sky-500 transform -rotate-12" />
          <Image
            src="/image/placeholder.svg"
            alt="logo"
            width="400"
            height="40"
            className="absolute object-cover"
          />
          <CardContent className="p-6 relative">
            <h2 className="text-xl text-center font-bold mb-2">活動内容</h2>
            <p className="text-gray-600 text-center">activities</p>
            {/* <Button className="mt-4">Learn More</Button> */}
          </CardContent>
        </Card>
        {/* <Card className="bg-[#369036]">
                <CardHeader>
                  <CardTitle className="text-gray-200">事業内容</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 dark:text-gray-400">services</p>
                </CardContent>
              </Card>
              <Card className="bg-[#277631]">
                <CardHeader>
                  <CardTitle className="text-gray-200">活動内容</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 dark:text-gray-400">activities</p>
                </CardContent>
              </Card> */}
      </div>
    </div>
  )
}