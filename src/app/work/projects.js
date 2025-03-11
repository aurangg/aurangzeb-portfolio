import { createClient } from "@/prismicio";
import ProjectListing from "./project-components/project-listing";
import SectionHeading from "../components/section_heading";
import { Suspense } from "react";
import ProjectSkeleton from "../components/project-skeleton";
import VerticalLines from "../components/VerticalLines";
import Padding from "../components/Padding";

export default async function ProjectsComponent() {
  const client = createClient();
  const data = await client.getAllByType("projects").catch(() => ());
  if (!data) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <>
      <Padding spacing={60} border={true} />
      <section className="position-relative">
        <div className="container border-lr">
          <SectionHeading
            subheading="How I have helped others"
            heading="Selected Work"
          />
        </div>
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
