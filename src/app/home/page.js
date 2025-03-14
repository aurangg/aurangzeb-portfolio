import { createClient } from "@/prismicio";
import Banner from "./banner";
import CalFunction from "../components/cal";
import Footer from "../components/footer";
import ProjectsComponent from "../work/projects";
import Padding from "../components/Padding";
import Coming from "./coming";

export default async function HomePage() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  return (
    <main className="position-relative">
      <Padding spacing={40} border={true} />
      <Banner homepage={homepage} />
      <Padding spacing={100} border={true} />
      <ProjectsComponent />
      {/* <CalFunction /> */}
      <Footer />
      {/* <Coming /> */}
    </main>
  );
}
