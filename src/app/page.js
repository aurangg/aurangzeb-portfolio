import { getMetadata } from "@/lib/metadata";
import HomePage from "./home/page";

export async function generateMetadata() {
  return await getMetadata("homepage"); // Fetch dynamic metadata from Prismic
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
