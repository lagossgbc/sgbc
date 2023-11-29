import Image from "next/image";
import Card from "../Card";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface IProps {
  info: string;
  date: string;
  time: string;
  imageUrl: string;
  title: string;
  isActive: boolean;
}
const Slide: React.FC<IProps> = ({ info, date, time, imageUrl, isActive }) => {
  return (
    <Card
      className={`relative text-sm max-w-[230px] text-justify transition-all bg-white  ${
        isActive
          ? "opacity-100 block visible pointer-events-auto"
          : "opacity-0 hidden invisible pointer-events-none"
      }`}
    >
      <figure className="relative w-full h-40 rounded-t-xl overflow-hidden mb-2">
        <Image src={imageUrl} alt="Image" fill />
      </figure>
      <p>{info}</p>
      <p className="mt-4 text-center">{date}</p>
      <p className="text-center">{time}</p>
      <Link
        href="#"
        className="text-yellow-500 py-4 flex gap-2 items-center justify-center text-lg"
      >
        Learn More <BsArrowRight className="text-xl" />
      </Link>
    </Card>
  );
};

export default Slide;
