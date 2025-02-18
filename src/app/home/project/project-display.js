import { createClient } from "@/prismicio";
import ProjectImage from "./project-image";
import ProjectBody from "./project-body";

export default async function ProjectDisplay() {
  const client = createClient();
  const data = await client.getAllByType("projects");
  // console.log(data);
  return (
    <div className="row">
      {data.map((i, index) => (
        <div className="col-lg-12" key={index}>
          <div className="project-box">
            <div className={`${index % 2 === 0 ? "row" : "row row-reverse"}`}>
              <ProjectImage i={i} />
              <ProjectBody i={i} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
