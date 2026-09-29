import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }
        if (message.length > 5000) {
            return NextResponse.json({ error: "Message too long" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_TO,
            replyTo: email, // hitting "Reply" in Gmail goes to the visitor
            subject: `New message from ${name || email}`,
            text: `From: ${name || "N/A"} <${email}>\n\n${message}`,
            html: `
        <p><strong>Name:</strong> ${escapeHtml(name || "N/A")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
}