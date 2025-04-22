//APIルート

// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // 送信元（Resend公式で用意されたもの）
      to: process.env.TO_EMAIL!,     // 自分のGmailアドレス
      subject: "お問い合わせが届きました",
      html: `
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>内容:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: "送信成功" });
  } catch (error) {
    return res.status(500).json({ message: "送信失敗", error });
  }
}
