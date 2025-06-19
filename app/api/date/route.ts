import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();

  process.env.TZ = "Asia/Seoul";

  return NextResponse.json({
    iso: now.toISOString(),
    utc: now.toString(),
    local: now.toLocaleString(),
  });
}
