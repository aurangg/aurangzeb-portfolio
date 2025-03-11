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

      // openGraph: {
      //   images: [{ url: homepage?.data.meta_image?.url }],
      // },
    },
  };
}

export default async function HomePage({ homepage }) {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  generateMetadata(homepage);
  console.log(homepage);
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
