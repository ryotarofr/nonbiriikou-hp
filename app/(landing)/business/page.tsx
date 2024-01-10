import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export default function BusinessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="px-6 py-12 bg-gray-50" id="about">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">事業概要</h2>
            <div className="flex md:space-x-14">
              <div className="text-gray-600">
                <div className=" min-h-[60px] items-center">事業所名</div>
                <div className=" min-h-[60px] items-center">サービスの種類</div>
                <div className=" min-h-[60px] items-center">所在地</div>
                <div className=" min-h-[60px] items-center">連絡先</div>
                <div className=" min-h-[60px] items-center">開設日</div>
                <div className=" min-h-[60px] items-center">営業日</div>

              </div>
              <div className="font-semibold">
                <div className=" min-h-[60px] items-center">のんびりいこう</div>
                <div className=" min-h-[60px] items-center">障害福祉サービス/就労継続支援B型(定員20名)</div>
                <div className=" min-h-[60px] items-center">山口県山口市秋穂二島1911番地</div>
                <div className=" min-h-[60px] items-center">TEL 083-987-0987 FAX 083-987-1155</div>
                <div className=" min-h-[60px] items-center">2022年4月1日</div>
                <div className=" min-h-[60px] items-center">月曜日~金曜日(10:00~15:00) 第1・3土曜日(10:00~13:00)</div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 py-12" id="services">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">のんびりいこう基本理念</h2>
            <div>
              『心から感謝する』『謙虚な気持ちを持つ』『福祉の志と優しさを大切にする』を基本理念として、
              障がいのある利用者が&quot;昨日より今日&quot; &quot;今日より明日&quot;の成長と希望を感じていただけるように、利用者の想いやりや立場に寄り添い、
              最善の支援が提供できるように努めていきます。
            </div>
          </div>
        </section>
        <section className="px-6 py-12 bg-gray-50" id="testimonials">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">のんびりいこう基本方針</h2>
            <div>
              利用者一人ひとりの個性や主体性を尊重し、日々の支援を通して成長を促し、小さな『できた』を次の
              『できる！！』につなげ、利用者が楽しく活躍することで、遣り甲斐と笑顔が増えるための支援に努めます。
              <br />
              また、利用者一人ひとりが自分の成長を感じて、新たな目標や夢が生まれるように、そしてその目標が叶えられる
              様に『心ある支援』の追求に努めていきます。
            </div>
          </div>
        </section>
        <section className="px-6 py-12" id="projects">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">アクセス</h2>
            {/* ここにgoogle map入れる */}
            <div>ここにgoogle map入れる</div>
          </div>
        </section>
        <section className="px-6 py-12 bg-gray-50" id="about">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl font-bold">のんびりいこう倫理綱領</h2>
            <div className="flex">
              <div>PDF</div>{" "}
              <Link href="https://drive.google.com/file/d/1uSD3rLFTWGGMBuo5eRpXNd5FYm7Q44En/view?usp=sharing" className=" text-blue-600">のんびりいこう倫理綱領</Link>
            </div>
            <h2 className="text-xl font-bold">のんびりいこう職員行動規範</h2>
            <div className="flex">
              <div>PDF</div>{" "}
              <Link href="/#" className=" text-blue-600">のんびりいこう職員行動規範</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
