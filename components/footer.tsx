import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">のんびりいこう</h3>
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
          <p className="text-sm">TEL 083-087-0987, FAX 083-987-1155</p>
          <p className="text-sm">info@company.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">お問い合わせ</h3>
          {/* <p className="text-sm mb-3">Subscribe to our newsletter for updates and promotions.</p> */}
          <form className="flex space-x-2">
            <Input className="flex-1" placeholder="Enter your email" type="email" />
            <Button type="submit">次へ</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link className="text-sm hover:underline" href="#">
            プライバシーポリシー
          </Link>
          {/* <Link className="text-sm hover:underline" href="#">
            このサイトについて
          </Link> */}
        </div>
        <div className="text-sm">© LLC Tito Group. All rights reserved.</div>
        <div className="mt-4 md:mt-0">
          <Button className="text-sm" variant="ghost">
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
