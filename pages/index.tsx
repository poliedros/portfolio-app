import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "@/components/icons/Icon";
import AdvancedMenu from "@/components/AdvancedMenu";
import Image from "next/image";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    {/* <h1>Hello Next.js 👋</h1>
    <div className="flex">
      <h2>Anderson</h2>
      {Icon("gi", "GiPieSlice", "64px")}
    </div>
    <p>
      <Link href="/about">About</Link>
    </p> */}
    <div className="flex items-center justify-center w-screen h-screen">
      <Link href="/users">
        <Image
          src={"./sazonDelPeru.svg"}
          width="200"
          height="200"
          alt={""}
          className="drop-shadow-md hover:drop-shadow-xl"
        />
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
