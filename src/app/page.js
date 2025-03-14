import { generateHomeMetaData } from "@/lib/metadata";
import HomePage from "./home/page";

export async function generateMetadata() {
  return await generateHomeMetaData();
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
