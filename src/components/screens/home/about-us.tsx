import Image from "next/image";
import { AboutUsWrapper } from "./index.style"
import { LBCFImage } from "@/assets";
import { AppButton } from "@/components";
import { openLink } from "@/utils/helper";

const AboutUs = () => {
  return (
    <>
      <AboutUsWrapper className="md:hidden block w-[90%] py-[40px] mx-auto text-center">
        <h2 className="text-[30px] font-bold text-center">About Us</h2>
        <p className="text-[12px] my-[30px]">
          We are a Confessional Reformed Baptist Church which subscribes to the
          <a href="https://www.chapellibrary.org/pdf/books/lbcw.pdf" className="font-semibold decoration-black underline" target="_blank">1689 London Baptist Confession of Faith.</a>
          We are regulated both in doctrine and practice by a faithful exposition of the Word of God.
        </p>
        <div className="">
          <Image
            src={LBCFImage}
            height={324}
            width={316}
            alt="London Baptist Confession of Faith Image"
            className="mx-auto"
          />
        </div>
        <div className="text-center">
          <AppButton
            text="Learn More"
          />
        </div>
      </AboutUsWrapper>
      <div className="hidden md:block my-[100px]">
        <div className=" mx-auto flex justify-center gap-[20px] items-center">
          <div>
            <Image
              src={LBCFImage}
              height={520}
              width={380}
              alt="London Baptist Confession of Faith Image"
              className="mx-auto"
            />
          </div>
          <div className="w-[450px]">
            <h2 className="text-[30px] font-bold">About Us</h2>
            <p className="mt-[20px] mb-[40px]">
              We are a Confessional Reformed Baptist Church which subscribes to the 1689 London Baptist Confession of Faith.
              We are regulated both in doctrine and practice by a faithful exposition of the Word of God.
            </p>
            <div>
              <AppButton
                text="Learn More"
                onClick={() => openLink("https://www.chapellibrary.org/book/lbcw/the-london-baptist-confession-of-faith-of-1689-with-preface-baptist-catechism-and-appendix-on-baptism")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default AboutUs;