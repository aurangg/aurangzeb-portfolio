import { createClient } from "@/prismicio";
import Banner from "./banner";
import CalFunction from "../components/cal";
import Footer from "../components/footer";
import ProjectsComponent from "../work/projects";
import BasicLines from "../components/BasicLines";
import Padding from "../components/Padding";

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
      images: [{ url: homepage?.data.meta_image?.url || "/default-image.jpg" }],
    },
  };
}
export default async function HomePage() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  generateMetadata(homepage);

  return (
    <main className="position-relative">
      <Padding spacing={40} border={true} />
      <Banner homepage={homepage} />
      <Padding spacing={100} border={true} />
      <ProjectsComponent />
      <CalFunction />
      <Footer />
    </main>
  );
}
