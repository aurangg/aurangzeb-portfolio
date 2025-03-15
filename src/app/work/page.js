import { staticMetadata } from "@/lib/metadata";
import Footer from "../components/footer";
import ProjectsComponent from "./projects";
import Padding from "../components/Padding";
import VerticalLines from "../components/VerticalLines";
import BasicDot from "../components/BasicDot";

export const metadata = staticMetadata.work;

export default function Projects() {
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <section className="position-relative">
        <VerticalLines topLine={true} bottomLine={true} />
        <div className="container banner-position-relative border-lr section-sm-padding">
          <BasicDot
            topLeft={true}
            topRight={true}
            bottomRight={true}
            bottomLeft={true}
          />
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-box about-banner">
                <div className="banner-header">
                  <div className="banner-chip">
                    Great Design 🤝 Greater Impact
                  </div>
                  <h1 className="banner-title">Concepts → Conversions</h1>
                  <p className="banner-description">The best of my work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectsComponent />
      <Footer />
    </main>
  );
}
