import Image from "next/image";

interface IProps {
  name: string;
  imageURL: string;
  info: string;
}
const ElderCard: React.FC<IProps> = ({ name, imageURL, info }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row max-w-[300px] md:max-w-none  md:text-justify items-center mx-auto gap-6">
      <figure className="relative w-24 h-24  w-3/10 shrink-0">
        <Image src={imageURL} alt={name} fill className="rounded-full" />
      </figure>
      <div className="w-7/10">
        <h3 className="text-2xl font-semibold mb-1 ">{name}</h3>
        <p className="text-base text-justify">{info}</p>
      </div>
    </div>
  );
};

export default ElderCard;
