export default function VerticalLines({ topLine, bottomLine }) {
  return (
    <>
      {topLine && <div className="vertical-top-line"></div>}
      {bottomLine && <div className="vertical-bottom-line"></div>}
    </>
  );
}
