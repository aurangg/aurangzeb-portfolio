import "./globals.css";
import "./bootstrap-grid.css";
import Toolbar from "./components/toolbar";
import NavbarTest from "./components/toolbarTry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Aurangg - Coming Soon",
  description: "Aurangg - Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <NavbarTest /> */}
        {children}
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaID="G-Z4SX9XDB1T" />
    </html>
  );
}
