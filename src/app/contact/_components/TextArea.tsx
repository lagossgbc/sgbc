interface IProps {
  id: string;
  label: string;
  style?: object;
  className?: string;
}

const TextArea: React.FC<IProps> = ({ id, label }: IProps) => {
  return (
    <div className="w-full mb-3">
      <label
        htmlFor={id}
        className="block after:content-['*'] after:text-yellow-500"
      >
        {label}
      </label>
      <textarea
        className="w-full bg-[#d9d9d9] border-2 border-[#7d7d7d] outline-none px-4 py-2 rounded-lg text-black  outline-[#7d7d7d] outline-0 focus:outline-none resize-none "
        rows={5}
      />
    </div>
  );
};

export default TextArea;
