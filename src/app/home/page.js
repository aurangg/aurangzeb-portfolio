import { createClient } from "@/prismicio";
import Banner from "./banner";
import Footer from "../components/footer";
import ProjectsComponent from "../work/projects";
import Padding from "../components/Padding";
import InnerForm from "../contact/innerform";
import VerticalLines from "../components/VerticalLines";
import BasicDot from "../components/BasicDot";

export default async function HomePage() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <Banner homepage={homepage} />
      {/* <Padding spacing={60} border={true} /> */}
      <ProjectsComponent />
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
      {/* <Coming /> */}
    </main>
  );
}
