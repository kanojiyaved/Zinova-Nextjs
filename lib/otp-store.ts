// Simple in-memory OTP store for local development.
// Note: This will not work in a serverless environment like Vercel across multiple requests.
// For production, use a database or Redis.

type OtpStore = {
  [email: string]: string;
};

// Use global to persist across HMR in development
const globalForOtp = global as unknown as { otpStore: OtpStore };

export const otpStore = globalForOtp.otpStore || {};

if (process.env.NODE_ENV !== "production") globalForOtp.otpStore = otpStore;

export function setOtp(email: string, otp: string) {
  otpStore[email.toLowerCase()] = otp;
}

export function getOtp(email: string): string | undefined {
  return otpStore[email.toLowerCase()];
}

export function deleteOtp(email: string) {
  delete otpStore[email.toLowerCase()];
}
