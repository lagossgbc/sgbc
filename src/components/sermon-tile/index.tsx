import Image, { StaticImageData } from "next/image";
import { AppButton } from "..";

interface Props {
  image: StaticImageData;
}

const SermonTile = ({ image }: Props) => {
  return (
    <div className="w-max inline-block">
      <div className="w-max mb-[50px] md:m-0 mx-[20px] rounded-lg">
        <Image
          src={image}
          alt="A Sermon E-flier"
          height={190}
          width={340}
          className="rounded-lg"
        />
      </div>
    </div>
  )
};

export default SermonTile;