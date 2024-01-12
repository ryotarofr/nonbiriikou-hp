"use client"

import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function LoadingAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const container = document.querySelector(".loaderWrapper") as HTMLElement;
    if (container) {
      const containerWidth = container.offsetWidth;
      // rest of the code


      const animateLoader = async () => {
        await animate(
          [
            [scope.current, { x: 20, width: "90%" }],
            [scope.current, { x: containerWidth, width: "0%" }, { delay: 0.6 }]
          ],
          {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.8
          }
        );
      };
      animateLoader();
    }
  }, [animate, scope]);

  return (
    <div className=" h-screen">
      <div className="loaderWrapper">
        <motion.div ref={scope} className="loader" />
        <h1 className="text">
          <i>合同会社ティトグループ</i>
        </h1>
      </div>
    </div>
  );
}
