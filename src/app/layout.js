import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'animate.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart | Your Ultimate Summer Essentials Store",
  description: "Explore SunCart for the best summer essentials, from UV protection to trendy summer wear. Developed by Sheikh Muzammil.",
  keywords: ["SunCart", "Summer Essentials", "eCommerce", "MERN Stack", "Frontend Developer Bangladesh"],
  authors: [{ name: "Sheikh Muzammil" }],
  openGraph: {
    title: "SunCart - Summer Shopping Simplified",
    description: "High-quality summer products delivered to your doorstep.",
    url: "https://b13-a8-suncart.vercel.app", 
    siteName: "SunCart",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        <ToastContainer />
        </body>

    </html>
  );
}
