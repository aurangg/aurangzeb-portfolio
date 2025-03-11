import Banner from "./banner";
import CalFunction from "../components/cal";
import Footer from "../components/footer";
import ProjectsComponent from "../work/projects";
import Padding from "../components/Padding";
import { createClient } from "@prismicio/client";

export async function generateMetadata({ homepage }) {
  return {
    title:
      homepage?.data.meta_title ||
      "Sr. UI/UX Designer - Landing Pages | Dashboards | SaaS | Websites | Mobile",
    description:
      homepage?.data.meta_description || "Default description for SEO.",
    openGraph: {
      title: homepage?.data.meta_title,
      description: homepage?.data.meta_description,
    },
  };
}

export default async function HomePage() {
  const client = createClient();
  const homepage = await client.getSingle("homepage").catch(() => null);
  generateMetadata(homepage);
  if (!homepage) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <main className="position-relative">
      <Padding spacing={40} border={true} />
      <Banner homepage={homepage} />
      <ProjectsComponent />
      {/* <CalFunction /> */}
      <Footer />
    </main>
  );
}
