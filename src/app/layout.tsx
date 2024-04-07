import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "./_providers";

import "@/styles/reset.css";
import "@/styles/core.css";
import "@/styles/typography.css";
import "@/styles/color.css";
import "@/styles/animations.css";
import "@/styles/scroll.css";
import "@/styles/sizing.css";
import "@/styles/utils.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paypipe",
  description: "Perfect payment solution",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
