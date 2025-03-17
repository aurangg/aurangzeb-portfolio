import { createClient } from "@/prismicio";
import Padding from "../components/Padding";
import Footer from "../components/footer";
import AboutBanner from "./AboutBanner";
import AboutHobbies from "./AboutHobbies";
import InnerForm from "../contact/innerform";
import BasicDot from "../components/BasicDot";
import VerticalLines from "../components/VerticalLines";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getMetadata("about"); // Fetch dynamic metadata from Prismic
}

export default async function AboutMain() {
  const client = createClient();
  const about = await client.getSingle("about").catch(() => null);
  if (!about) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <AboutBanner about={about} />
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
