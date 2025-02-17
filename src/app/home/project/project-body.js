import ProjectLogo from "./project-logo";
import LinkButton from "@/app/components/link-button";
import { projects_page } from "@/constants/urls";
import ProjectTags from "./project-tags";

export default async function ProjectBody({ i }) {
  return (
    <div className="col-lg-6">
      <div className="project-space-vertical">
        <div className="project-header">
          <ProjectLogo i={i} />
          <div className="project-title-box">
            <h2 className="thumb-title">{i.data.title}</h2>
            <p className="thumb-description">{i.data.description[0]?.text}</p>
          </div>
          <div className="chip-flex">
            {i.data.categories.map((j, index) => (
              <div className="project-chip" key={index}>
                <p className="chip-text">{j.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="project-footer">
          <ProjectTags i={i} />
          <LinkButton isIcon={true} name="View Project" url={projects_page} />
        </div>
      </div>
    </div>
  );
}
