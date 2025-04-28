import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    const chatId = process.env.TELEGRAM_CHAT_ID;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name, email, and message are required.",
        }),
        { status: 400 }
      );
    }
    const text = `💌 *Message From Visitor*  
👤 Nama: ${name}  
📧 Email: ${email}  
📞 Phone: ${phone || ""}
💬 Pesan: ${message}
`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.description || "Failed to send message.");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sended!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 500 }
    );
  }
}
