import crypto from "crypto";
import { NextResponse } from "next/server";

function getRandomIndex(length: number) {
  const randomBytes = crypto.randomBytes(4);
  const randomInt = randomBytes.readUInt32BE(0);
  return randomInt % length;
}

function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET() {
  const defaultArray = [0, 1, 2, 3, 4];
  const shuffled = shuffleArray(defaultArray);

  return NextResponse.json({ shuffled });
}

