import Image from "next/image";
import React from "react";
import SupportTheWork from "./_component/SupportTheWork";
import Grid from "./_component/Grid";
import Banner from "@/components/hero-banner";

export const metadata = {
  title: "Ministries - Grace Campus Outreach",
};

const GCO = () => {
  return (
    <>
      <Banner
        imageUrl="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gco.webp"
        bannerHeightStyle={{ height: "80vh" }}
      />
      <figure className="relative w-44 h-44 left-1/2 -translate-x-1/2 bottom-28">
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gco-logo.png"
          alt="GCO Logo"
          fill
          sizes="100"
        />
      </figure>
      <div className="flex items-center flex-col -mt-28 mb-10 text-3xl md:text-4xl font-bold px-6">
        <h2>Grace Campus</h2>
        <h2>Fellowship</h2>
        <p className="text-lg font-normal max-w-5xl mt-6 text-center">
          We are a Reformed Confessional outreach that seeks to teach the Holy
          Bible in its entirety. we adhere to the 1689 confession of faith which
          we firmly believe to be a good and accurate summary of the
          Bible&apos;s teaching.
        </p>
      </div>
      <Grid />
      <SupportTheWork />
    </>
  );
};

export default GCO;
