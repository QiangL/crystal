import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crystal Guide - Your Personal Crystal Companion",
  description: "Discover the perfect crystal for your zodiac sign and mood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <span className="font-semibold text-gray-500 text-lg">Crystal Guide</span>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <a href="/" className="py-4 px-2 text-gray-500 hover:text-purple-500 transition duration-300">Home</a>
                  <a href="/crystals" className="py-4 px-2 text-gray-500 hover:text-purple-500 transition duration-300">Crystals</a>
                  <a href="/recommend" className="py-4 px-2 text-gray-500 hover:text-purple-500 transition duration-300">Recommend</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
