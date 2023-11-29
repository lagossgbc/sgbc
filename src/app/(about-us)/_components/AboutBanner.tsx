"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface IProps {
  className?: string;
}

const AboutBanner: React.FC<IProps> = ({ className }) => {
  const pathname = usePathname();
  const [LeadText, setLeadText] = useState("");
  const [CurrentBanner, setCurrentBanner] = useState(
    "https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/church.webp"
  );

  useEffect(() => {
    setCurrentBanner(() => {
      if (pathname === "/our-doctrines-and-beliefs") {
        return "https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/doctrines-and-beliefs.webp";
      } else if (pathname === "/our-leadership") {
        setLeadText("Our Leadership");
        return "https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/elders.webp";
      } else if (pathname === "/reformed-baptist") {
        setLeadText("We are Reformed Baptist");
        return "https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/cathedral.webp";
      } else if (pathname === "/what-is-the-gospel") {
        setLeadText("What Is The Gospel?");
        return "https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gospel.webp";
      } else {
        setLeadText("About Us");
        return "https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/church.webp";
      }
    });
  }, [pathname]);

  return (
    <header className={`relative w-4/10 xl:w-3/10 ${className || ""} `}>
      <figure className="relative w-full h-[70vh]">
        <Image
          src={CurrentBanner}
          alt="Banner"
          fill
          className="absolute object-cover blur-[1px]"
        />
        <div
          className="absolute z-10 w-full h-[70vh] bg-black opacity-30 
        "
        ></div>
      </figure>
      <h2
        className="absolute px-6 text-4xl md:text-5xl font-bold text-center text-white z-20"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          lineHeight: "60px",
        }}
      >
        {LeadText}
      </h2>
    </header>
  );
};

export default AboutBanner;
