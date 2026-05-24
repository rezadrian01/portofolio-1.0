import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { message: "Telegram not configured." },
        { status: 500 },
      );
    }

    const text = [
      `📬 <b>New message from portfolio</b>`,
      ``,
      `👤 <b>Name:</b> ${name}`,
      `📧 <b>Email:</b> ${email}`,
      phone ? `📞 <b>Phone:</b> ${phone}` : null,
      ``,
      `💬 <b>Message:</b>`,
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      },
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description ?? "Telegram API error");
    }

    return NextResponse.json({ message: "Message sent!" }, { status: 200 });
  } catch (error: any) {
    console.error("Telegram Error:", error);
    return NextResponse.json(
      { message: "Failed to send message.", error: error.message },
      { status: 500 },
    );
  }
};
