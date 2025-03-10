export default function HorizontalLines({ leftLine, rightLine }) {
  return (
    <>
      {leftLine && <div className="horizontal-left-line"></div>}
      {rightLine && <div className="horizontal-right-line"></div>}
    </>
  );
}
