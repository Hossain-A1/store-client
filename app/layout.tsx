import Navber from "@/components/shared/Navber";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import {Toaster} from 'react-hot-toast'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "welcome to nnur store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(roboto.className, "bg-light_dark text-dark")}>
        <Toaster/>
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
