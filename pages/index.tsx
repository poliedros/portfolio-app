import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "@/components/icons/Icon";
import AdvancedMenu from "@/components/AdvancedMenu";
import Image from "next/image";
import StartFashion1 from "./portfolios/fashionShop/startFashion1";
import StartFashion2 from "./portfolios/fashionShop/startFashion2";
import StartFashion3 from "./portfolios/fashionShop/startFashion3";
import StartFashion4 from "./portfolios/fashionShop/startFashion4";
import FarmFairStart from "./portfolios/farmersFair/farmFairStart";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function IndexPage() {
  function handleClick(path: string) {
    Router.push("/portfolios" + path);
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* <h1>Hello Next.js 👋</h1>
    <div className="flex">
      <h2>Anderson</h2>
      {Icon("gi", "GiPieSlice", "64px")}
    </div>
    <p>
      <Link href="/about">About</Link>
    </p> */}
      {/* <div className="flex items-center justify-center w-screen h-screen">
      <Link href="/users">
        <Image
          src={"./sazonDelPeru.svg"}
          width="200"
          height="200"
          alt={""}
          className="drop-shadow-md hover:drop-shadow-xl dark-shadow" //shadow-pop-bl
        />
      </Link>
      MathSim TokiPona GAYA Farol Agro -- Moda -- Auraa
    </div> */}
      <div className="flex justify-around items-center w-screen h-screen flex-col md:flex-row">
        {/* <div className="photo">
        <div
          className="photo__image"
          style={{
            backgroundImage: "url(//source.unsplash.com/S3eqr293Vho/600x1200)",
          }}
        ></div>
        <div
          className="photo__feather"
          style={{
            backgroundImage: "url(//source.unsplash.com/S3eqr293Vho/600x1200)",
          }}
        ></div>
      </div>
      <div className="photo">
        <div
          className="photo__image"
          style={{
            backgroundImage: "url(//source.unsplash.com/aIYFR0vbADk/600x1200)",
          }}
        ></div>
        <div
          className="photo__feather"
          style={{
            backgroundImage: "url(//source.unsplash.com/aIYFR0vbADk/600x1200)",
          }}
        ></div>
      </div>
      <div className="photo">
        <div
          className="photo__image"
          style={{
            backgroundImage: "url(//source.unsplash.com/sfze-8LfCXI/600x1200)",
          }}
        ></div>
        <div
          className="photo__feather"
          style={{
            backgroundImage: "url(//source.unsplash.com/sfze-8LfCXI/600x1200)",
          }}
        ></div>
      </div>
      <div className="photo">
        <div
          className="photo__image"
          style={{
            backgroundImage: "url(//source.unsplash.com/sfze-8LfCXI/600x1200)",
          }}
        ></div>
        <div
          className="photo__feather"
          style={{
            backgroundImage: "url(//source.unsplash.com/sfze-8LfCXI/600x1200)",
          }}
        ></div>
        </div> */}
        <div className="photo">
          <div
            className="photo__image bg-cover bg-center"
            style={{
              backgroundImage: "url('/lnd.png')",
            }}
            onClick={() => handleClick("/fashionShop/startFashion1")}
          ></div>
          <div
            className="photo__feather bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('lnd.png')",
            }}
          ></div>
        </div>
        <div className="photo">
          <div
            className="photo__image bg-cover bg-center"
            style={{
              backgroundImage: "url('/lma.png')",
            }}
            onClick={() => handleClick("/fashionShop/startFashion3")}
          ></div>
          <div
            className="photo__feather bg-cover bg-center"
            style={{
              backgroundImage: "url('/lma.png')",
            }}
          ></div>
        </div>
        <div className="photo">
          <div
            className="photo__image bg-cover bg-center"
            style={{
              backgroundImage: "url('/bbp.png')",
            }}
            onClick={() => handleClick("/fashionShop/startFashion4")}
          ></div>
          <div
            className="photo__feather bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/bbp.png')",
            }}
          ></div>
        </div>
      </div>
      <Button
        className="absolute bottom-0 right-20 !rounded-b-none !rounded-t-2xl"
        onClick={() => handleClick("/farmersFair/farmFairStart")}
      >
        {Icon("gi", "GiWheat", "24px")} Feira do Produtor Rural
      </Button>
      {/* <FarmFairStart /> */}
    </Layout>
  );
}
