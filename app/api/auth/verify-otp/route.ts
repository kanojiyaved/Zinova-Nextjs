import { NextResponse } from "next/server";
import { getOtp, deleteOtp } from "@/lib/otp-store";

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ detail: "Email and OTP are required" }, { status: 400 });
    }

    const storedOtp = getOtp(email);

    if (!storedOtp) {
      return NextResponse.json({ detail: "No OTP found. Request a new one." }, { status: 400 });
    }

    if (storedOtp !== otp.trim()) {
      return NextResponse.json({ detail: "Invalid OTP." }, { status: 400 });
    }

    deleteOtp(email);
    
    // In a real app, you would issue a JWT or session here.
    // For this reference fix, we just return success.
    
    return NextResponse.json({ message: "OTP verified successfully." });
  } catch (error) {
    console.error("[ERROR] Verification failed:", error);
    return NextResponse.json(
      { detail: "Verification failed" },
      { status: 500 }
    );
  }
}
