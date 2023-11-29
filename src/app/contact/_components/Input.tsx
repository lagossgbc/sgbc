interface IProps {
  id: string;
  label: string;
  type?: "text" | "tel";
  style?: object;
  className?: string;
}

const Input: React.FC<IProps> = ({ id, label, type = "text" }: IProps) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="block after:content-['*'] after:text-yellow-500"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full bg-[#d9d9d9] border-2 border-[#7d7d7d] outline-none h-12 px-4 rounded-lg text-black outline-[#7d7d7d]  outline-0"
      />
    </div>
  );
};

export default Input;
