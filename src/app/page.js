import { createClient } from "@/prismicio";
import HomePage from "./home/page";

export async function generateMetadata({ homepage }) {
  return {
    title:
      homepage?.data.meta_title ||
      "Sr. UI/UX Designer - Landing Pages | Dashboards | SaaS | Websites | Mobile",
    description:
      homepage?.data.meta_description || "Default description for SEO.",
    openGraph: {
      title: homepage?.data.meta_title,
      description: homepage?.data.meta_description,

      openGraph: {
        images: [{ url: homepage?.data.meta_image?.url }],
      },
    },
  };
}

export default async function Home() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  generateMetadata(homepage);
  return (
    <>
      <HomePage homepage={homepage} />
    </>
  );
}
