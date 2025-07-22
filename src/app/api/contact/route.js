import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getCollection } from "../../../../lib/db"; // kendi modülüne göre uyarlarsın

export async function POST(req) {
  try {
    const body = await req.json();
    const { ad, email, telefon, mesaj } = body;

    const gonderenMail = "ilkimilke547@gmail.com";
    const gonderilenMail = "iremozel@sidomatasarim.com.tr";
const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure, // true/false
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

     const info = await transporter.sendMail({
      from: `"İletişim Formu" <${gonderenMail}>`,
      to: gonderilenMail,
      subject: "Website İletişim Formu",
      text: `Ad: ${ad}\nEmail: ${email}\nTelefon: ${telefon}\nMesaj: ${mesaj}`,
    });


	 console.log("📧 Mail Gönderildi:", info.messageId);
    console.log("🔗 Preview URL:", nodemailer.getTestMessageUrl(info));


    // MongoDB’ye yaz
    const collection = await getCollection("Email");

    await collection.insertOne({
      gonderenMail:testAccount.user,
      gonderilenMail:"iremozel@sidomatasarim.com.tr",
      musteriMail: email,
      musteriAdi: ad,
      musteriTel: telefon,
      musteriMesaji: mesaj,
      tarih: new Date(),
    });

      return NextResponse.json({
      success: true,
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("İletişim hatası:", error);
    return NextResponse.json({ success: false, error: "Sunucu hatası" }, { status: 500 });
  }
}