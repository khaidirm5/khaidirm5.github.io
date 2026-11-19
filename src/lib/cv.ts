import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";

// The CV button only renders when the PDF really exists in /public.
export function hasCv() {
  return fs.existsSync(path.join(process.cwd(), "public", profile.cvPath));
}
