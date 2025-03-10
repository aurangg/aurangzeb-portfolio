import "./globals.css";
import "./bootstrap-grid.css";
import Toolbar from "./components/toolbar";
import NavbarTest from "./components/toolbarTry";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Toolbar /> */}
        <NavbarTest />
        {children}
      </body>
    </html>
  );
}
