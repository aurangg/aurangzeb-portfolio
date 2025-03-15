import "./globals.css";
import "./bootstrap-grid.css";
import NavbarTest from "./components/toolbarTry";
import { Albert_Sans, JetBrains_Mono } from "next/font/google";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const albert_sans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${albert_sans.variable} ${jetbrains_mono.variable}`}>
        <NavbarTest />
        {children}
        {/* <SpeedInsights /> */}
      </body>
      <GoogleAnalytics gaID="G-Z4SX9XDB1T" />
    </html>
  );
}
