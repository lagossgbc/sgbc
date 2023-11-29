import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-xl p-2 min-w-[300px] lg:min-w-[250px]  lg:max-w-xl ${
        className || ""
      }`}
      style={{ boxShadow: "0 0 25px rgba(0,0,0,.4)" }}
    >
      {children}
    </div>
  );
};

export default Card;
