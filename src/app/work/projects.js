import { createClient } from "@/prismicio";
import ProjectListing from "./project-components/project-listing";
import SectionHeading from "../components/section_heading";
import { Suspense } from "react";
import ProjectSkeleton from "../components/project-skeleton";
import VerticalLines from "../components/VerticalLines";

export default async function ProjectsComponent() {
  const client = createClient();
  const data = await client.getAllByType("projects");
  return (
    <>
      <section className="position-relative">
        <SectionHeading
          subheading="How I have helped others"
          heading="Selected Work"
        />
        {/* border-lr section-sm-padding  */}
        <div className="container border-lr section-sm-padding">
          {/* <VerticalLines topLine={true} bottomLine={false} /> */}
          <div className="row position-relative">
            <Suspense fallback={<ProjectSkeleton />}>
              <ProjectListing data={data} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
