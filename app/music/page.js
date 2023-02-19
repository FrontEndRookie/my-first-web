import dynamic from "next/dynamic";
const Music = dynamic(() => import("./music.jsx"), { ssr: false });

export default function Home() {
  return (
    <div style={{ height: "auto" }}>
      <Music />
    </div>
  );
}
