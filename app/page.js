import Image from "next/image";
export default function Home(s) {
  return (
    <div style={{ height: "auto" }}>
      <div className="floatDiv">
        <h1 className="pageTitle">樱纾</h1>
        <div>
          <h2>永远有告别,也永远伴随期待</h2>
          <br></br>
          <div>
            月圆月缺，这路太长了，不知多少日月，多少路人，多少人生，个自走远，只愿终点再见。
          </div>
        </div>
      </div>
      <Image src="/homeBg.jpg" layout="fill" alt="sakura"></Image>
    </div>
  );
}
