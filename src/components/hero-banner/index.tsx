import Image from "next/image";

interface IProps {
  className?: string;
  imageUrl: string;
  title?: string;
  bannerHeightStyle?: object;
  color?: "white" | "black";
}

const Banner: React.FC<IProps> = ({
  className,
  imageUrl,
  title,
  bannerHeightStyle,
  color,
}) => {
  return (
    <header className={`relative w-4/10 xl:w-3/10 ${className || ""}`}>
      <figure
        className="relative w-full"
        style={bannerHeightStyle || { height: "60vh" }}
      >
        <Image
          src={imageUrl}
          alt={title || "Banner"}
          fill
          className="absolute object-cover"
        />
      </figure>
      {title && (
        <h2
          className="absolute px-6 text-4xl md:text-5xl font-bold text-center "
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            lineHeight: "60px",
            color: color || "white",
          }}
        >
          {title}
        </h2>
      )}
    </header>
  );
};

export default Banner;
