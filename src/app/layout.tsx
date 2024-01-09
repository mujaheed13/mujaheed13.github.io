import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { grey } from "@mui/material/colors";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Mujaheed",
  description: "Mohammad Mujaheed | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: grey[600],
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
