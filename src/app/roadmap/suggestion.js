import Image from "next/image";
// { background: "#DEE9FF", text: "#6B8AFF" }

export default function Suggestion({ setSuggestion }) {
  return (
    <div
      className="roadmap-item"
      style={{ alignItems: "center" }}
      onClick={() => {
        setSuggestion(true);
        console.log("cicked");
      }}
    >
      <Image src="/idea-bulb.svg" alt="bulb" width={120} height={120} />
      <div
        className="jetbrains text-uppercase font-weight-500"
        style={{
          textAlign: "center",
          fontSize: "16px",
          lineHeight: "20px",
          padding: "4px 2px",
          width: "100%",
          borderRadius: "4px",
          backgroundColor: "#DEE9FF",
          color: "#6B8AFF",
          cursor: "pointer",
        }}
      >
        Want to suggest?
      </div>
    </div>
  );
}
