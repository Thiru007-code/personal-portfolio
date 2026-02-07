
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Creative Portfolio",
  description: "A showcase of my skills, projects, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        <Navbar />
        <main className="pt-20 px-4 max-w-7xl mx-auto min-h-screen pb-24 md:pb-0">
            {children}
        </main>
        <MobileNav />
      </body>
    </html>
  );
}
