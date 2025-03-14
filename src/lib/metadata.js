import { createClient } from "@/prismicio";

export async function generateHomeMetaData() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  return {
    title: homepage?.data.meta_title,
    description:
      homepage?.data.meta_description || "Default description for SEO.",
    openGraph: {
      title: homepage?.data.meta_title,
      description: homepage?.data.meta_description,
      // images: [{ url: homepage?.data.meta_image?.url || "/default-image.jpg" }],
      openGraph: {
        images: [homepage?.data.meta_image.url],
      },
    },
  };
}
