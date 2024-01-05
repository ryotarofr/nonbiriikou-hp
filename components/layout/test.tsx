// import { useState, useRef, useEffect, Suspense } from "react";
// import { AnimatePresence, motion, usePresence } from "framer-motion";
// import { gsap } from "gsap";
// import Image from "next/image";

// function Box() {
//   const ref = useRef(null);
//   const [isPresent, safeToRemove] = usePresence();

//   useEffect(() => {
//     if (!isPresent) {
//       gsap.to(ref.current, {
//         opacity: 0,
//         onComplete: () => safeToRemove?.(),
//       });
//     }
//   }, [isPresent, safeToRemove]);

//   return <div className="" ref={ref} >
//     {/* <Image src="/image/landing/landing1.JPG" alt="Slider" width={500} height={1800} className="absolute inset-0 object-cover w-[50%] h-[50%]" /> */}
//   </div>;
// }

// export default function Test() {
//   const [show, setShow] = useState(true);
//   useEffect(() => {
//     // 3秒後に非表示にする
//     const timeoutId = setTimeout(() => {
//       setShow(false);
//     }, 3000);

//     // コンポーネントがアンマウントされたときにタイマーをクリアする
//     return () => clearTimeout(timeoutId);
//   }, []);
//   return (
//     <div className="example">
//       <motion.div
//         className=" absolute left-[-50%] w-[50%] h-[50%]"
//         animate={{
//           x: 100
//         }}
//       // initial={{ scale: 0 }}
//       // animate={{ x: 100, y: 0, scale: 1 }}
//       // animate={{ scale: 1 }}
//       // exit={{ scale: 0 }}  // 非表示時のスタイルを設定
//       // transition={{
//       //   type: "spring",
//       //   stiffness: 260,
//       //   damping: 20,
//       //   // delay: 2  // 4秒遅延
//       // }}
//       >
//         <Image src="/image/landing/landing1.JPG" alt="Slider" width={2000} height={1000} className="object-cover" />
//       </motion.div>

//       <div className="controls">
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onClick={() => {
//             setShow(!show);
//           }}
//         >
//           {show ? "Hide" : "Show"}
//         </motion.button>
//       </div>

//       <AnimatePresence>{show ? <Box /> : null}</AnimatePresence>
//     </div>
//   );
// }


"use client"

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
// import "./styles.css";

const variants: Variants = {
  initial: {
    opacity: 0,
    y: -16
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -16
  }
};

export default function Test() {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  useEffect(() => {
    // 3秒後に非表示にする
    const timeoutId = setTimeout(() => {
      setShow((prevToggleState) => !prevToggleState);
    }, 3000);

    // コンポーネントがアンマウントされたときにタイマーをクリアする
    return () => clearTimeout(timeoutId);
  }, [show]);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  return (
    <div className="">
      {/* <div className="w-1/2 h-1/2 bg-white/40"> */}
      {/* <div className=" absolute w-[400px] h-[400px] left-[35%] top-1/2 rounded-full bg-white/40">
          <div>salskasalsklaskla</div>
        </div> */}
      {/* </div> */}
      <div>
        <p>Current state: {show.toString()}</p>
        <AnimatePresence>
          <div className="grid grid-cols-2">
            <div className="">
              {show2 && (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{

                    borderRadius: "4px"
                  }}
                >
                  <Image src="/image/landing/landing1.JPG" alt="Slider" width={2000} height={1000} className="object-cover w-full h-full" />
                </motion.div>
              )}
            </div>
            <div>
              {show2 && (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{



                    borderRadius: "4px"
                  }}
                >
                  <Image src="/image/landing/landing1.JPG" alt="Slider" width={2000} height={1000} className="object-cover w-full h-full" />
                </motion.div>
              )}
            </div>
            <div>
              {show2 && (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{



                    borderRadius: "4px"
                  }}
                >
                  <Image src="/image/landing/landing1.JPG" alt="Slider" width={2000} height={1000} className="object-cover w-full h-full" />
                </motion.div>
              )}
            </div>
            <div>
              {show2 && (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{



                    borderRadius: "4px"
                  }}
                >
                  <Image src="/image/landing/landing1.JPG" alt="Slider" width={2000} height={1000} className="object-cover w-full h-full" />
                </motion.div>
              )}
            </div>
          </div>
        </AnimatePresence>
      </div>
      <div style={{ marginTop: "32px" }}>

        <AnimatePresence>
          {isVisible2 && (
            <motion.div
              variants={variants}
              initial={false}
              animate="animate"
              exit="exit"
              style={{
                display: "block",
                padding: "8px",
                marginTop: "32px",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
                borderRadius: "4px"
              }}
            >
              initial=false
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

