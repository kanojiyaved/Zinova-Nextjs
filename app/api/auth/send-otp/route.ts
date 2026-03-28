import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { setOtp } from "@/lib/otp-store";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ detail: "Email is required" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(email, otp);

    console.log(`[OTP] ${email} → ${otp}`);

    // SMTP configuration for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your Zinova OTP Code",
      text: `Hello,\n\nYour Zinova verification code is:\n\n  ${otp}\n\nThis code is valid for one use only.\n\nDo not share it with anyone.`,
    };

    // If credentials are missing, we just log the OTP and return success for demo purposes
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn("[WARNING] Gmail credentials missing. OTP logged but not sent via email.");
      return NextResponse.json({ message: "OTP sent (logged) for demo purposes." });
    }

    await transporter.sendMail(mailOptions);
    console.log(`[SUCCESS] Email sent to ${email}`);

    return NextResponse.json({ message: "OTP sent to your email." });
  } catch (error) {
    console.error("[ERROR] Email failed:", error);
    return NextResponse.json(
      { detail: error instanceof Error ? error.message : "Email sending failed" },
      { status: 500 }
    );
  }
}
