import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">合同会社ティトグループ</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="#">
                会社概要
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                事業内容
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                活動内容
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div> */}
        <div>
          <h3 className="text-lg font-semibold mb-3">事業拠点</h3>
          <p className="text-sm">山口県山口市秋穂二島1911番地</p>
          <p className="text-sm">TEL 083-987-0987, FAX 083-987-1155</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">お問い合わせ</h3>
          <form className="flex space-x-2">
            <Input className="flex-1 text-black" placeholder="Enter your email" type="email" />
            <Button type="submit">次へ</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link className="text-sm hover:underline" href="/privacy">
            プライバシーポリシー
          </Link>
          {/* <Link className="text-sm hover:underline" href="#">
            このサイトについて
          </Link> */}
        </div>
        <div className="text-sm">© LLC Tito Group. All rights reserved.</div>
        <div className="mt-4 md:mt-0">
          <Link href="#">
            <Button className="text-sm" variant="ghost">
              Back to Top
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
