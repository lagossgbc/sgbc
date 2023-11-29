import Image, { StaticImageData } from "next/image";
import { AppButton } from "..";
import { openLink } from "@/utils/helper";

interface Props {
  title: string;
  subTextArray: string[];
  image: StaticImageData;
}


const ActivityCard = ({ title, subTextArray, image }: Props) => {
  return (
    <div className="w-[274px] py-[20px] text-center rounded-xl shadow-md shadow-[#00000040] inline-block mx-[20px]">
      <div className="mb-[20px]">
        <h5 className="text-[16px] font-bold">{title}</h5>
      </div>
      <div className="w-full">
        <Image
          src={image}
          width={274}
          height={232}
          alt={`${title} image`}
        />
      </div>
      <div className="my-[20px]">
        {subTextArray.map((text, index) => (
          <p key={index} className="text-[12px]">{text}</p>
        ))}
      </div>
      <div>
        <AppButton
          text="Live Stream"
          onClick={() => openLink("https://www.youtube.com/@SGBCLagos")}
        />
      </div>
    </div>
  )
};

export default ActivityCard;