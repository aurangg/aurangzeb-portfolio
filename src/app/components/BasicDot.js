export default function BasicDot({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  return (
    <>
      {topLeft && <div className="dot-top-left"></div>}
      {topRight && <div className="dot-top-right"></div>}
      {bottomLeft && <div className="dot-bottom-left"></div>}
      {bottomRight && <div className="dot-bottom-right"></div>}
    </>
  );
}
