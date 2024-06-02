import Image from "next/image";
import { Inter } from "next/font/google";
import Particlesview from "@/components/Particles";
import Head from "next/head";
import LeftComponents from "@/components/LeftComponents";
import RightComponents from "@/components/RightComponents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Metrix LGP | AutoTrader</title>
        <meta name="description" content="Trade, govern, earn!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center min-h-screen">
        <Particlesview />
        <div className="waves z-10">
          <div className="wavev3" id="wave1"></div>
          <div className="wavev3" id="wave2"></div>
          <div className="wavev3" id="wave3"></div>
          <div className="wavev3" id="wave4"></div>
        </div>

        <div className="waves z-10">
          <div className="wavev2" id="wave1"></div>
          <div className="wavev2" id="wave2"></div>
          <div className="wavev2" id="wave3"></div>
          <div className="wavev2" id="wave4"></div>
        </div>
        <div className="max-w-screen-xl flex z-20 gap-4">
          <LeftComponents />
          <RightComponents />
        </div>
      </main>
    </>
  );
}
