import { createClient } from "@/prismicio";
import Padding from "../components/Padding";
import Footer from "../components/footer";
import CalFunction from "../components/cal";
import AboutBanner from "./AboutBanner";
import AboutHobbies from "./AboutHobbies";

export async function generateMetadata({ about }) {
  return {
    title: about?.data.meta_title || "My Little About",
    description: about?.data.meta_description || "Default description for SEO.",
    openGraph: {
      title: about?.data.meta_title,
      description: about?.data.meta_description,
      images: [{ url: about?.data.meta_image?.url || "/default-image.jpg" }],
    },
  };
}
export default async function AboutMain() {
  const client = createClient();
  const about = await client.getSingle("about");
  console.log(about);
  generateMetadata(about);

  return (
    <main className="position-relative">
      <Padding spacing={120} border={true} />
      <AboutBanner about={about} />
      <Padding spacing={60} border={true} />
      <AboutHobbies about={about} />
      <CalFunction />
      <Footer />
    </main>
  );
}
