import Footer from "../components/footer";
import PageTitle from "./page-title";
import PhotosGallery from "./photos-gallery";
import { createClient } from "@/prismicio";

export async function generateMetadata({ imagesData }) {
  return {
    title:
      imagesData?.data.meta_title ||
      `Photos & Visual Storytelling | A Designer’s Perspective`,
    description:
      imagesData?.data.meta_description ||
      `Design Meets Photography – Capturing moments with the same precision I bring to UI/UX.

Great design and great photography share a common goal—telling stories through visuals. Every shot I take is: Shot on iPhone, proving that creativity isn’t about the gear—it’s about the vision. From symmetry in architecture to raw human emotion, my photography is an extension of my eye for aesthetics, balance, and detail.

A designer’s perspective isn’t limited to screens—it’s everywhere. Explore my lens on the world. 🎨`,
    openGraph: {
      title: imagesData?.data.meta_title,
      description: imagesData?.data.meta_description,
      images: [
        { url: imagesData?.data.meta_image?.url || "/default-image.jpg" },
      ],
      openGraph: {
        images: [
          { url: imagesData?.data.meta_image?.url || "/default-image.jpg" },
        ],
      },
    },
  };
}

export default async function PhotosMain() {
  const client = createClient();
  const imagesData = await client.getSingle("photos").catch(() => null);
  generateMetadata(imagesData);
  if (!imagesData) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <>
      <PageTitle />
      <PhotosGallery imagesData={imagesData} />
      <Footer />
    </>
  );
}
