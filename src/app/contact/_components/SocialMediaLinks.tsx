import React from "react";
import Link from "next/link";
import { BsYoutube, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
const links = [
  { link: "https://www.youtube.com/@SGBCLagos", icon: <BsYoutube /> },
  { link: "https://www.instagram.com/sgbclagos/", icon: <BsInstagram /> },
  { link: "https://twitter.com/SGBCLagos", icon: <RiTwitterXFill /> },
  { link: "https://facebook.com/SGBCLagos", icon: <BsFacebook /> },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-2 align-middle mt-6 text-lg">
      {links.map((link, index) => (
        <Link href={link.link} target="_blank" key={index}>
          {React.cloneElement(link.icon, {
            className: "text-2xl cursor-pointer",
          })}
        </Link>
      ))}
      <span>@SGBCLagos</span>
    </div>
  );
};

export default SocialMediaLinks;
