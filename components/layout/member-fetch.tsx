"use client"

import { useEffect, useState } from "react";
import MemberMobileSection from "./member-mobile-section";
import MemberSection from "./member-section";

export const MemberFetch = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // ウィンドウのリサイズ時に幅を更新するためのイベントリスナーを追加
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth); // 初期画面の幅を取得
    // コンポーネントがマウントされたときにイベントリスナーを追加
    window.addEventListener('resize', handleResize);

    // コンポーネントがアンマウントされたときにイベントリスナーを削除
    return () => {
      window.removeEventListener('resize', handleResize);
    };


  }, []); // 空の依存配列は、コンポーネントがマウントされたときに一度だけ実行されるようにします

  return (
    <div>
      {windowWidth >= 768 ?
        <MemberSection />
        :
        <MemberMobileSection />
      }
    </div>
  )
}