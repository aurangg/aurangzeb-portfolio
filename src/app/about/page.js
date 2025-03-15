import { createClient } from "@/prismicio";
import Padding from "../components/Padding";
import Footer from "../components/footer";
import AboutBanner from "./AboutBanner";
import AboutHobbies from "./AboutHobbies";
import InnerForm from "../contact/innerform";
import BasicDot from "../components/BasicDot";
import VerticalLines from "../components/VerticalLines";

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
  const about = await client.getSingle("about").catch(() => null);
  generateMetadata(about);
  if (!about) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <AboutBanner about={about} />
      <Padding spacing={40} border={true} />
      <AboutHobbies about={about} />
      <section className="position-relative">
        <VerticalLines topLine={true} bottomLine={false} />
        <div className="container section-sm-padding border-lr position-relative padding-bottom-40">
          <BasicDot
            topLeft={true}
            topRight={true}
            bottomRight={true}
            bottomLeft={true}
          />
          <InnerForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
