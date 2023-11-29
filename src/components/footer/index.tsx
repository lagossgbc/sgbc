"use client";
import { FullLogo } from "@/assets";
import {
  YoutubeFilled,
  InstagramFilled,
  TwitterCircleFilled,
  FacebookFilled,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState<string>("")

  const resetEmail = () => {
    setEmail("")
  }
  return (
    <footer className="w-[100%] bg-blue-400 color-white py-10 text-white font-light">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <div className="flex flex-col">
          <div className="mb-[25px]">
            <h5 className="text-[20px] font-bold">Sunday Service Times</h5>
            <p className="text-[14px]">Morning Worship Service 9:00am (WAT)</p>
            <p className="text-[14px]">Evening Worship Service 5:00pm (WAT)</p>
          </div>
          <div>
            <h5 className="text-[20px] font-bold">Contact Us</h5>
            <p className="text-[14px]">Call: +234 802 828 0551</p>
            <p className="text-[14px]">Email: info@sgbc.ng</p>
            <p className="text-[14px]">Follow us on:</p>
            <div className="flex gap-2">
              <YoutubeFilled />
              <InstagramFilled />
              <TwitterCircleFilled />
              <FacebookFilled className="rounded" />
              <p>@ SGBCLagos</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center gap-[30px] md:gap-[90px] mb-[45px]">
            <div>
              <h5 className="text-[20px] font-bold">Church Address</h5>
              <p className="text-[14px]">
                Plot 451a Oluwadamilola Fasade Street
              </p>
              <p className="text-[14px]">Omole Phase 1, Ojodu Berger</p>
              <p className="text-[14px] mb-[10px]">Lagos</p>
              <Link
                href="https://www.google.com/maps/place/Sovereign+Grace+Bible+Church/@6.6317176,3.360402,15z/data=!4m6!3m5!1s0x103b936630f68e15:0x2d482d6d91395d05!8m2!3d6.6317176!4d3.360402!16s%2Fg%2F11fl08_mnv?entry=ttu"
                className="underline text-[yellow] decoration-[yellow] text-[16px]"
                target="_blank"
              >
                Get directions
              </Link>
            </div>
            <Image src={FullLogo} height={115} width={150} alt="SGBC Logo" />
          </div>
          <div>
            <p className="text-[14px]">Subscribe to our monthly newsletter</p>
            <div className='border-2 border-white flex justify-between mt-[5px] bg-white'>
              <input
                type="text"
                placeholder='email address'
                className="
                  bg-[transparent] text-[#001229] outline-none ml-[15px] basis-3/4 font-medium
                  placeholder:text-[#216BC4] placeholder:opacity-50
                "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className='p-4 bg-yellow-500 text-[#001229]' onClick={resetEmail}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[25px]">
        <p className="text-[12px]">
          Sovereign Grace Bible Church © 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
