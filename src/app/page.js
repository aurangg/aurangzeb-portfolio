import CalFunction from "./components/cal";
import Footer from "./components/footer";
import Banner from "./home/banner.js";
import ProjectsTile from "./home/projectsTile";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProjectsTile />
      <CalFunction />
      <Footer />
    </div>
  );
}
