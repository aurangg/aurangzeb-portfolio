export default function Padding({ spacing, border }) {
  return (
    <div className={`container ${border ? "border-lr" : ""}`}>
      <div className={`padding-${spacing}`}></div>
    </div>
  );
}
