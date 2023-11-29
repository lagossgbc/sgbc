import { LBCImage } from "@/assets";
import { AppButton } from "@/components";
import Image from "next/image";

const UpcomingEvents = () => {
  return (
    <div className="my-[20px]">
      <h2 className="text-[30px] font-bold mb-[15px] mx-auto text-center">Upcoming events</h2>
      <div className="bg-[#001229] pt-[63px] pb-[40px] text-center md:mx-auto">
        <div className="w-[90%] mx-auto flex md:flex-row md:items-center md: justify-center flex-col text-white h-[500px] gap-[25px]">
          <div className="text-center">
            <Image
              src={LBCImage}
              height={300}
              width={300}
              sizes="100%"
              alt="Lagos Bible Conference Poster"
              className="inline-block"
            />
          </div>
          <div className="">
            <div className="w-50% mb-[25px]">
              <p>Lagos Bible Conference:</p>
              <p>Themed</p>
              <p>Communion with God</p>
            </div>
            <div>
              <AppButton
                text="Register here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UpcomingEvents;