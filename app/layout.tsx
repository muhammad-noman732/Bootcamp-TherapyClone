import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Italiana,
  Inria_Serif,
  Hurricane,
} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppin",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const hurricane = Hurricane({
  variable: "--font-hurricane",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Therapy Services - Professional Mental Health Support",
  description: "Expert therapy and counseling services for mental health, depression, anxiety, and relationship issues. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${italiana.variable} ${inriaSerif.variable}  ${hurricane.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

