import Footer from "../components/footer";
import Padding from "../components/Padding";

export default function Resume() {
  return (
    <main className="position-relative border-adjust">
      <Padding spacing={80} border={true} />
      <h2 className="banner-heading">My Resume</h2>
      <Footer />
    </main>
  );
}
