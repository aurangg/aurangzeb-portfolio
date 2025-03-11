export default function SectionHeading({ subheading, heading }) {
  return (
    <div className="row" style={{ alignItems: "center" }}>
      <div className="col-lg-12">
        <p className="section-subheading">{subheading}</p>
        <h2 className="section-heading">{heading}</h2>
      </div>
    </div>
  );
}
