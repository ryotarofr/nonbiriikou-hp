import { env } from "@/env.mjs";
import { SiteConfig } from "@/types";


const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "合同会社ティトグループ | のんびりいこう",
  description:
    "自分のペースで「のんびり」と・・・。でも明確な目標を持ち楽しんで進んでいくことを支援させていただきます。",
  url: site_url,
  ogImage: `${site_url}/og.png`,
  mailSupport: ""
}
