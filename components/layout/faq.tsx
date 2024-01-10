import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Balancer from "react-wrap-balancer";

const pricingFaqData = [
  {
    id: "item-1",
    question: "昼食について",
    answer1: "昼食は業者の弁当が注文できます(選べる味噌汁・ふりかけ付き)。*税込370円(大)・330円(小)",
    answer2: "昼食代は月末で締めて翌月の5日までにご請求させていただきます。",
    answer3: "基本的には金融機関(山口銀行)の口座振替にさせていただきます",
  },
  {
    id: "item-2",
    question: "送迎について",
    answer1: "送迎は朝は8時から開始。夕方は15時から開始となります。",
    answer2: "送迎費用はいりません(無料)。",
    answer3: "当面の間ダイヤの度重なる変更があるかと思いますが、ご了承ください。",
  },
  {
    id: "item-3",
    question: "健康管理について",
    answer1: "事業所では特に実施しておりませんが、健康管理は大切となりますので定期健康診断の受診をお願いいたします。",
  },
  {
    id: "item-4",
    question: "その他の活動について",
    answer1: "季節ごとのプチイベント(節分、バレンタインデー、七夕、クリスマス会など)",
    answer2: "ご利用感謝祭(1回/年)*ご家族の参加もお待ちしております。",
  },
];

export function Faq() {
  return (
    <section className="mx-auto container max-w-3xl py-2">
      <div className="mb-14 space-y-6 text-center">
        <h1 className="text-center font-heading text-2xl md:text-3xl">
          <Balancer>よくある質問</Balancer>
        </h1>
        <p className="text-md text-muted-foreground">
          <Balancer>
            よくあるご質問とその回答をご覧ください。さらに詳しい説明が必要な場合は、お気軽にお問い合わせください。
          </Balancer>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent>{faqItem?.answer1}</AccordionContent>
            <AccordionContent>{faqItem?.answer2}</AccordionContent>
            <AccordionContent>{faqItem?.answer3}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}