import { staticMetadata } from "@/lib/metadata";
import Footer from "../components/footer";
import PageTitle from "./page-title";
import PhotosGallery from "./photos-gallery";
import { createClient } from "@/prismicio";
import Padding from "../components/Padding";

export const metadata = staticMetadata.photos;

export default async function PhotosMain() {
  const client = createClient();
  const imagesData = await client.getAllByType("photos").catch(() => null);
  if (!imagesData) {
    console.error("No homepage document found in Prismic.");
    return { notFound: true }; // This prevents build failure
  }
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <PageTitle />
      <Padding spacing={60} border={true} />
      <PhotosGallery imagesData={imagesData} />
      <Footer />
    </main>
  );
}
