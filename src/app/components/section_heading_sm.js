export default function SectionHeadingSM({
  subheading,
  heading,
  headingAlign,
  subheadingAlign,
}) {
  return (
    <div className="heading-area">
      <p className={`section-subheading ${subheadingAlign}`}>{subheading}</p>
      <h2 className={`section-heading ${headingAlign}`}>{heading}</h2>
    </div>
  );
}
