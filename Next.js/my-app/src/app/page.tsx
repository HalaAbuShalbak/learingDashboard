import Image from "next/image";
export const metadata = {
  title: "Static sub meta , will take priority over the root one",
};

export default function Home() {
  return <h1>next js</h1>;
}
