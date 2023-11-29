import Image from "next/image";
import Button from "@/components/form/Button";
import { SisterChurches } from "./_data";
import { MdOutlineLocationOn } from "react-icons/md";
import HeartCry from "../../ministries/book-ministry/_components/heart-cry.png";
import LIT from "../../ministries/book-ministry/_components/lit.png";
import FirstLove from "../../ministries/book-ministry/_components/first-love.png";
import Metropolitan from "../../ministries/book-ministry/_components/metropolitan-tab.png";
import Banner from "@/components/hero-banner";

const Partners = [HeartCry, LIT, FirstLove, Metropolitan];
const AffiliatedMinistries = () => {
  return (
    <div className="overflow-hidden">
      <Banner
        imageUrl="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/affiliated-ministries.webp"
        title="Affiliated Ministries"
        color="black"
      />
      {/* GTS */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-8 justify-center my-14">
        <div className="flex-1 flex flex-col items-start sm:items-center  max-w-md">
          <figure className="relative w-72 h-28 mb-5 self-end">
            <Image
              src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gts.webp"
              alt="GTS Logo"
              fill
            />
          </figure>
          <p className="md:text-right text-center">
            Grace & Truth Theological Seminary (GTS) is an educational ministry
            instituted to train men who have been called into ministry and or
            preparing for pastoral ministry and women who want to be equipped
            with the knowledge of God.
          </p>
          <Button
            href="https://gtslagos.ng"
            target="_blank"
            className="hidden md:block"
          >
            Learn More
          </Button>
        </div>
        <div className="flex-1 flex flex-col max-w-md items-center md:items-start gap-6 mb-10 overflow-hidden relative">
          <figure className="relative w-[500px] h-72 md:w-80 md:h-80">
            <Image
              src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gts-library.webp"
              alt="GTS Library"
              fill
              // style={{ objectFit: "contain" }}
            />
          </figure>
          <Button
            href="https://gtslagos.ng"
            target="_blank"
            className="block md:hidden"
          >
            Learn More
          </Button>
        </div>
      </section>
      {/* Sister Churches */}
      <section className="flex flex-col items-center justify-center pt-10 pb-40 px-10 bg-blue-200 rounded-t-3xl md:rounded-none">
        <h2 className="text-center md:text-left text-3xl font-bold first-of-type:max-w-lg">
          Sister-Churches in Nigeria
        </h2>
        <ul className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto mt-14">
          {SisterChurches.map((church, i) => (
            <li
              key={i}
              className="bg-white flex flex-col items-center w-[300px] h-[220px] rounded-[22px] overflow-hidden"
            >
              <figure
                className={`relative w-[150px] h-[100px] ${
                  [0, 2, 3].includes(i) ? "w-[230px] mt-4" : ""
                }`}
              >
                <Image
                  src={church.imageUrl}
                  alt={church.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </figure>
              <div className="flex gap-2 p-2 bg-blue-400 text-white mt-auto h-[100px]">
                <MdOutlineLocationOn
                  style={{
                    color: "#F9AF1C",
                    fontSize: "25px",
                    flexShrink: 0,
                  }}
                />
                <p className="text-sm leading-4">{church.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Partners */}
      <section className="h-[600px] md:h-[400px] relative bg-blue-200 md:bg-white ">
        <div
          className="absolute -top-20 bg-white min-w-full md:min-w-[700px] lg:min-w-[900px] px-8 py-12 rounded-3xl "
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 0px 10px rgba(0,0,0,.3)",
          }}
        >
          <h2 className="text-center text-4xl font-bold">Our Partners</h2>
          <ul className="flex md:flex-wrap flex-nowrap flex-col md:flex-row items-center  justify-center mx-auto mt-16 gap-10 max-w-xl">
            {Partners.map((p, i) => (
              <Image key={i} src={p} alt="Partners" width={200} height={80} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AffiliatedMinistries;
