import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {SessionProvider} from 'next-auth/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskMaster AI",
  description: "TaskMaster AI is your ultimate productivity tool, designed to help you manage and create tasks effortlessly with the power of artificial intelligence. Whether you're working solo or in a team, TaskMaster AI boosts your productivity by 10x, enabling you to focus and organize your tasks like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
          {children}
      </body>
    </html>
  );
}
