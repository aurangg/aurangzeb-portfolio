import CalFunction from "@/app/components/cal";
import Footer from "@/app/components/footer";
import { createClient } from "@/prismicio";
import Middle from "./projectDetail/middle";
import Banner from "./banner";
import { Suspense } from "react";
import Padding from "@/app/components/Padding";
import { getMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const client = createClient();
  const projects = await client.getAllByType("projects");

  return projects.map((project) => ({
    slug: project.uid, // This should match how slugs are stored in Prismic
  }));
}

export async function generateMetadata({ params }) {
  return await getMetadata("workDetail", { slug: params?.slug });
}

export default async function ProjectsDetail({ params }) {
  const client = createClient();
  const { slug } = await params;
  const project = await client.getByUID("projects", slug).catch(() => null);
  if (!project) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <Banner project={project} />
      <Padding spacing={40} border={true} />
      <Middle project={project} slug={slug} />
      {/* <Suspense fallback={<p>Loading...</p>}>
      </Suspense> */}
      {/* <CalFunction /> */}
      <Footer />
    </main>
  );
}
