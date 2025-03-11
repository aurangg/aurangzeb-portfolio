import Banner from "./banner";
import CalFunction from "../components/cal";
import Footer from "../components/footer";
import ProjectsComponent from "../work/projects";
import Padding from "../components/Padding";

export default function HomePage({ homepage }) {
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
