import Image from "next/image";
import ProjectDisplay from "./project/project-display";

export default async function ProjectsTile() {
  return (
    <section className="section-second">
      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-lg-12 section-padding">
            <p className="section-subheading">How I have helped others</p>
            <h2 className="section-heading">Selected Work</h2>
          </div>
        </div>
        <ProjectDisplay />
      </div>
    </section>
  );
}
