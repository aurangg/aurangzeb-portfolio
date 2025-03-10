import CalFunction from "@/app/components/cal";
import Footer from "@/app/components/footer";
import { createClient } from "@/prismicio";
import Middle from "./projectDetail/middle";
import Banner from "./banner";
import { Suspense } from "react";
import Padding from "@/app/components/Padding";

export async function generateStaticParams() {
  const client = createClient();
  const projects = await client.getAllByType("projects");

  return projects.map((project) => ({
    slug: project.uid, // ✅ Must match the dynamic [slug]
  }));
}

export default async function ProjectsDetail({ params }) {
  const client = createClient();
  const { slug } = await params;
  const project = await client.getByUID("projects", slug);
  console.log(project);
  if (!project) {
    <p>Loading...</p>;
  }

  return (
    <>
      <Padding spacing={40} border={true} />
      <Banner project={project} />
      <Padding spacing={40} border={true} />
      <Middle project={project} />
      {/* <Suspense fallback={<p>Loading...</p>}>
      </Suspense> */}
      {/* <CalFunction /> */}
      <Footer />
    </>
  );
}
