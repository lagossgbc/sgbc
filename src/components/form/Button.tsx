import { BsArrowRight } from "react-icons/bs";
import { ButtonType } from "./types";
import Link from "next/link";

const Button: React.FC<ButtonType> = ({
  children,
  className,
  href,
  style,
  type = "submit",
  icon,
  target = "_self",
}) => {
  let elementToReturn: React.ReactNode;
  const btnClass =
    "flex gap-2 items-center justify-center max-w-max bg-yellow-500 text-black font-semibold px-[24px] py-[12px] rounded-full hover:bg-yellow-400 transition-all";

  if (href) {
    elementToReturn = (
      <Link href={href} className={btnClass} target={target}>
        {children}
        <BsArrowRight />
      </Link>
    );
  } else {
    elementToReturn = (
      <button type={type} className={btnClass}>
        {children} <BsArrowRight />
      </button>
    );
  }
  return (
    <div className={`mt-8 ${className || ""}`} style={style || {}}>
      {elementToReturn}
    </div>
  );
};

export default Button;
