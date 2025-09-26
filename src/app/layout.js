import { Geist, Geist_Mono, Poppins} from "next/font/google";

import "./globals.css";

import Footer from "@/component/Footer";
import Header from "@/component/header";
import ScrollToTop from "@/component/important";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "TARGET EVENT PREZLAB",
  description: "Today, we are the nation’s most reliable live, virtual and hybrid event production company. We’ve successfully produced events for leading brands, covering 12.2 million miles; engaging over 500,000 virtual participants for leading world-class corporate organizations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
