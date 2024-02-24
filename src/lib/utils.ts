import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(date: Date) {
  return format(date, "LLL dd, y");
}

export function extractSegmentURL(path: string) {
  if (!path) return "";
  if (path === "/") return null;
  return path.split("/")[1];
}

export function capitalizer(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => {
    const numC = Number(c);
    return (
      numC ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (numC / 4)))
    ).toString(16);
  });
}

export function convertLinksToObjects(allLinks: { [key: string]: string }) {
  const links: { key: string; value: string }[] = Object.entries(allLinks)
    .filter(([, value]) => value)
    .map(([key, value]) => ({ key, value: value ?? "" }));

  return links;
}
