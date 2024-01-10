import { BasicTable, BasicTable2 } from "@/components/table";

export default function Support() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" space-y-12 px-4 md:px-6 mb-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">就労継続支援B型事業のご案内</h2>
          </div>
        </div>
        <div className="text-xl font-bold tracking-tighter sm:text-xl">◯のんびりいこうの支援方針</div>
        <p className="mx-10 my-6 md:text-lg">
          作業や活動を通して、様々な発見や成長を感じていただき、それぞれの夢(小さくても)や目標を一緒に設定していくことで「昨日より今日、
          今日より明日」のさらなる成長や希望を楽しみながら焦らずに自分のペースで「<span className="text-green-600 font-bold">のんびり</span>」と進んでいくことを支援させていただきます。
          どのような働き方でも「働くことを通じて幸せになる！」を一緒に追求していきましょう！
        </p>
        <div className="text-xl font-bold tracking-tighter sm:text-xl">◯利用対象者</div>
        <p className="mx-10 my-6 md:text-lg">
          縁の多いゆったりとした環境の中で、自分のペースに合わせて働きたい！仕事ばかりではなく様々な活動を通して楽しみながら
          成長していきたい！自分の成長とタイミングが来たら、他B型事業所や最低賃金の保証が受けられるA型事業所に言ってみたい！
          5年後、8年後、10年後？・・・将来は一般の企業等で働きたい！など、自分の成長や目標に合わせて働き方を変えていく
          <span className="text-red-600 font-bold">(楽しみながら成長する)</span>ことを希望されている方。できれば
          基本的に毎日通所できる方。
        </p>
        <div className="text-xl font-bold tracking-tighter sm:text-xl">◯利用日と利用時間</div>
        <ul className="mx-10 my-6 md:text-lg">
          <li>月曜日~金曜日: 10時~15時(送迎開始は8時 ※要相談)</li>
          <li>第1・第3土曜日: 10時~13時(グローイングセミナー、調理実習・EAT体験)</li>
          <li>お盆休み、年末年始休み(年間カレンダーにて)</li>
        </ul>
        <div className="text-xl font-bold tracking-tighter sm:text-xl">◯作業プログラム</div>
        <ul className="mx-10 my-6 md:text-lg">
          <li>①企業下請け作業(車両部品の加工、段ボール等資材の加工など)</li>
          <li>②企業下請け作業(施設外の建物内清掃作業等)</li>
          <li>③事業所周り、畑の除草作業</li>
          <li>④自分の適性を見るための模擬的な作業訓練プログラム</li>
          <li>⑤グローイングセミナー(土曜日のみ)</li>
          <span className="text-sm text-gray-600">ビジネスマナー各種・夢を叶えるセミナー・自分も相手も大切にするコミュニケーション
            ・第一印象セミナー・怒りと上手に向き合うセミナー・プライベートを考えるセミナーなど</span>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-10">
            <div className="text-xl font-bold tracking-tighter sm:text-xl mb-8">◯プログラム(月~金)</div>
            <BasicTable />
          </div>
          <div className="my-10">
            <div className="text-xl font-bold tracking-tighter sm:text-xl mb-8">◯プログラム(第１・３土曜日)</div>
            <BasicTable2 />
          </div>
        </div>
      </div>
    </div >

  )
}