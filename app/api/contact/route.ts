import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(2000, "Message too long"),
  honeypot: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";

  const { success: rateLimitOk } = await ratelimit.limit(ip);
  if (!rateLimitOk) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  if (req.headers.get("content-type") !== "application/json") {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 400 }
    );
  }

  const body = await req.json().catch(() => ({}));

  if (body.honeypot) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message || "Validation failed" },
      { status: 400 }
    );
  }

  const { name, email, message } = result.data;

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio <contact@mehedi-hasan.me>",
      to: process.env.CONTACT_TO_EMAIL || "mehedi.hasan16111@gmail.com",
      replyTo: email,
      subject: "New Portfolio Contact",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <hr/>
        <p>${escapeHtml(message)}</p>
      `,
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Mehedi Hasan <contact@mehedi-hasan.me>",
      to: email,
      subject: "Thanks for contacting Mehedi Hasan",
      html: `
        <p>Hello ${escapeHtml(name)},</p>
        <p>Thank you for reaching out through my portfolio.</p>
        <p>I've successfully received your message and appreciate your interest.</p>
        <p>I'll review it and get back to you within 24–48 hours.</p>
        <p>Best regards,<br/>Mehedi Hasan<br/>Full Stack Developer</p>
        <p>Portfolio:<br/><a href="https://mehedi-hasan.me">https://mehedi-hasan.me</a></p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}