export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="">
          <h1 className="text-2xl text-center my-4 font-bold">プライバシーポリシー</h1>

          <section className="px-6 py-12 bg-gray-50" id="about">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">個人情報の利用目的</h2>
              <hr className="hr" />
              <p className="py-2">
                合同会社ティトグループ (※以下「当サイト」と呼称)
                では、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
              </p>
            </div>
          </section>
          <section className="px-6 py-12" id="about">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">アクセス解析ツールについて</h2>
              <hr className="hr" />
              <p className="py-2">
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
              </p>
            </div>
          </section>
          <section className="px-6 py-12 bg-gray-50" id="about">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">免責事項</h2>
              <hr className="hr" />
              <p className="py-2">
                当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
              </p>
              <p className="py-2">
                また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっている場合もございます。
              </p>
              <p className="py-2">
                当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
            </div>
          </section>
          <section className="px-6 py-12" id="about">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">著作権について</h2>
              <hr className="hr" />
              <p className="py-2">
                当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
              </p>
            </div>
          </section>
          <section className="px-6 py-12 bg-gray-50" id="about">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">リンクについて</h2>
              <hr className="hr" />
              <p className="py-2">
                当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。ただし、インラインフレーム内へのページの読み込みや、画像の直リンクはご遠慮ください。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}