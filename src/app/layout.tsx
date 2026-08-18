import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fynd My Space - Find Your Perfect Workspace",
  description: "Discover the ideal workspace with Fynd My Space. Explore coworking spaces, private offices, and meeting rooms tailored to your needs. Book your perfect workspace today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <QueryProvider >

        {children}
          </QueryProvider>
        
        </body>
    </html>
  );
}
