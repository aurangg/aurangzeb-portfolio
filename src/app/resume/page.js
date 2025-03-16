import { staticMetadata } from "@/lib/metadata";
import Footer from "../components/footer";
import Padding from "../components/Padding";
import ResumeData from "./resumeData";
import VerticalLines from "../components/VerticalLines";
import BasicDot from "../components/BasicDot";

export const metadata = staticMetadata.resume;

export default function Resume() {
  return (
    <main className="position-relative border-adjust">
      <div className="container">
        <div className="row position-relative flex-all">
          <ResumeData />
        </div>
      </div>
      <Footer />
    </main>
  );
}
