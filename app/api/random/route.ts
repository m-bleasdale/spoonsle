import crypto from "crypto";
import { NextResponse } from "next/server";

function getRandomIndex(length: number) {
  const randomBytes = crypto.randomBytes(4);
  const randomInt = randomBytes.readUInt32BE(0);
  return randomInt % length;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const lengthParam = url.searchParams.get("length"); 
  const length = lengthParam ? parseInt(lengthParam, 10) : 1;
  const index = getRandomIndex(length);

  return NextResponse.json({ index });
}
