import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="px-6 py-12 bg-gray-50" id="about">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">会社概要</h2>
            <div className="flex md:space-x-14">
              <div className="space-y-4 text-gray-600">
                <div>法人名</div>
                <div>所在地</div>
                <div>連絡先</div>
                <div>設立日</div>
                <div>代表者</div>
                <div>取引金融機関</div>
              </div>
              <div className="space-y-4 font-semibold">
                <div>合同会社ティトグループ</div>
                <div>山口県山口市秋穂二島1911番地</div>
                <div>TEL 080-987-0987 FAX 083-987-1155</div>
                <div>2021年11月1日</div>
                <div>伊藤 卓芳</div>
                <div>山口銀行</div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 py-12" id="team">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">メンバー</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <img
                  alt="John Doe"
                  className="w-20 h-20 rounded-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
              <div className="space-y-2">
                <img
                  alt="Jane Doe"
                  className="w-20 h-20 rounded-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-medium">Jane Doe</h3>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 py-12 bg-gray-50" id="services">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">ティトグループ経営理念</h2>
            <div>「関係するすべてのお客様と地域の幸せ。そして社員とその家族の幸せと絵がをを追求し続ける」</div>
          </div>
        </section>
        <section className="px-6 py-12" id="testimonials">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">ティトグループ基本方針</h2>
            <div>「当たり前のことを当たり前にできる」会社を目指すためにティトグループは以下のことを大切にします。</div>
            <ul className=" space-y-4 font-semibold">
              <li>◯ 当たり前のことでも周囲に感謝できる謙虚さを大切にする</li>
              <li>◯ 真面目にコツコツ、正直で透明性のある事業活動を行う</li>
              <li>◯ 明るく元気で健康にシドとを楽しむことができる風通しの良い組織と環境を大切にする</li>
              <li>◯ プロトしての専門知識の蓄積と知識をスキルに変換するためのアウトプットを常に実現する</li>
              <li>◯ プラスアルファ(ひと手間)を惜しまずに当たり前にできる人材を育てる</li>
              <li>◯ 自然と助け合える優しさと配慮を大切にして強い組織を作る</li>
              <li>◯ 創造的なアイデアの創出とそれを実現する組織を作る</li>
            </ul>
            {/* <blockquote className="p-4 rounded-md bg-white shadow">
              <p className="text-gray-600">
                "Acme Inc's services have been instrumental in our company's success. Their expertise and dedication are
                unmatched."
              </p>
              <footer className="mt-4 text-right text-sm text-gray-500">- Happy Client</footer>
            </blockquote> */}
          </div>
        </section>
        <section className="px-6 py-12 bg-gray-50" id="projects">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">アクセス</h2>
            {/* ここにgoogle map入れる */}
            <div>ここにgoogle map入れる</div>
          </div>
        </section>
      </main>
    </div>
  )
}
