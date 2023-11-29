import Image from "next/image";
import Link from "next/link";

import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  // BsYoutube,
  // BsInstagram,
  // BsTwitter,
  // BsFacebook,
} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

import SocialMediaLinks from "./SocialMediaLinks";

const ContactLeftSide = () => {
  return (
    <div className="md:w-2/5 md:self-start mb-20 md:mb-0">
      <h2 className="text-white text-4xl font-bold">Contact Us</h2>
      <div className="flex gap-2 mt-8">
        <IoLocationSharp className="text-xl text-yellow-400 flex-shrink-0" />
        <div>
          <p>Plot 451A Oluwadamilola Fasade Street</p>
          <p>Omole Phase 1, Ojodu Berger</p>
          <p>Road Lagos</p>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <BsEnvelopeFill className="text-xl text-yellow-400 flex-shrink-0" />
        <p>email: info@sgbc.ng</p>
      </div>
      <div className="flex gap-2 mt-1">
        <BsFillTelephoneFill className="text-xl text-yellow-400 flex-shrink-0" />
        <p>+234 802 828 0551</p>
      </div>
      <h2 className="mt-8 text-4xl font-bold">Hours: </h2>
      <div className="mt-8">
        <p>Mondays to Fridays: 10am - 4pm</p>
        <p>Satudray: Closed</p>
        <p>Sunday: 8am - 6pm</p>
      </div>
      <SocialMediaLinks />
    </div>
  );
};

export default ContactLeftSide;
