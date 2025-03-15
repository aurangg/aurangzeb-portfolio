import Footer from "../components/footer";
import Form from "./form";
import { staticMetadata } from "@/lib/metadata";

export const metadata = staticMetadata.contact;

export default function Contact() {
  return (
    <main className="position-relative border-adjust">
      <Form />
      <Footer />
    </main>
  );
}
