'use client';

interface Props {
  bgColor?: string;
  color?: string;
  text: string;
  className?: string;
  onClick?: () => void;
}
const AppButton = ({ color="#000000", bgColor="#F9AF1C", text, className = "", onClick}: Props) => {
  return (
    <>
          <button className={`text-[black] bg-yellow-500 py-[12px] px-[35px] rounded-[25px] ${className}`} onClick={onClick}>{ text }</button>
    </>
  )
};

export default AppButton;