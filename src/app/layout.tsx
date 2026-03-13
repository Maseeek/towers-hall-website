import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Towers Hall | Loughborough University",
  description: "Home of Towers Hall, Loughborough University — Est. 1965. One of the biggest halls on campus with the best views. Join us for hall events, meet the committee, and be part of the Towers family.",
  keywords: ["Towers Hall", "Loughborough University", "Student Accommodation", "Hall Events", "Committee"],
  openGraph: {
    title: "Towers Hall | Loughborough University",
    description: "One of the biggest rooms on campus with hands down the best views 🌅",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
