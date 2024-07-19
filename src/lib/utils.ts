import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function idGenerator(): string {
  return Math.floor(Math.random() * 10001).toString();
}

export function generateRandomID(prefix: string): string {
  if (prefix.length >= 7) {
    throw new Error("Prefix must be shorter than 7 characters");
  }

  const length = 7 - prefix.length;
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function createRandomString(length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  const randomString = createRandomString(length);
  return `${prefix}${randomString}`;
}
