export default function Dot({ color }) {
  return (
    <div class={`dot-main ${color === "red" ? "dot-red" : "dot-green"}`}></div>
  );
}
