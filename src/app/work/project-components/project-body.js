import Button from "@/app/components/button";
import { projects_page } from "@/constants/urls";
import Image from "next/image";

export default function ProjectBody({ i }) {
  return (
    <div className="col-lg-6">
      <div className="project-space-vertical">
        <div className="project-header">
          <Image
            src={i.data.project_logo.url}
            alt={i.data.project_logo.alt}
            width={i.data.project_logo.dimensions.width}
            height={i.data.project_logo.dimensions.height}
            className="project-logo"
          />
          <div className="project-title-box">
            <h2 className="thumb-title">{i.data.title}</h2>

            <p className="thumb-description">{i.data.description[0]?.text}</p>
          </div>
          <div className="chip-flex">
            {i.data.industry.map((j, index) => (
              <div className="project-chip" key={index}>
                <p className="chip-text">{j.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="project-footer">
          <div className="tags-flex">
            {i.data.scope.map((k, index) => (
              <div className="tags-inner" key={index}>
                <p className="project-tags">{k.text}</p>
                {index !== i.data.scope.length - 1 ? (
                  <div className="dot"></div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          <Button isIcon={true} name="View Project" url={projects_page} />
        </div>
      </div>
    </div>
  );
}
