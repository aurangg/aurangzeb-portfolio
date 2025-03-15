import Padding from "../components/Padding";
import BasicDot from "../components/BasicDot";
import VerticalLines from "../components/VerticalLines";
import InnerForm from "./innerform";

export default function ContactForm() {
  return (
    <section className="position-relative">
      <Padding spacing={60} border={true} />
      <div>
        <div className="container border-lr position-relative section-sm-padding">
          <VerticalLines topLine={true} bottomLine={false} />
          <BasicDot
            topLeft={true}
            topRight={true}
            bottomRight={true}
            bottomLeft={true}
          />
          <InnerForm />
        </div>
        <div className="container border-lr position-relative section-sm-padding form-height">
          <VerticalLines topLine={true} bottomLine={false} />
        </div>
      </div>
    </section>
  );
}
