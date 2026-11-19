import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Khaidir Maulana | Information Systems & Software Development",
  description:
    "Personal portfolio of Khaidir Maulana, showcasing experience in data management, administration, software development, and IT support.",
  openGraph: {
    title: "Khaidir Maulana | Information Systems & Software Development",
    description: "Data management, administration, software development, and IT support.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
