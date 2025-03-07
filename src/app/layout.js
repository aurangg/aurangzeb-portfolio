import "./globals.css";
import "./bootstrap-grid.css";
import Toolbar from "./components/toolbar";
import { createClient } from "@/prismicio";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title:
      page.data.meta_title ||
      "Sr. UI/UX Designer - Landing Pages | Dashboards | SaaS | Websites | Mobile",
    description: page.data.meta_description || "Default description for SEO.",
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: [{ url: page.data.meta_image?.url || "/default-image.jpg" }],
    },
  };
}
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}
