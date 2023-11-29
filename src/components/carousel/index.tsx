import { Carousel } from "antd"

interface Props {
  slides: React.ReactNode[]
}

const AppCarousel = ({ slides }: Props) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  
  return (
    <Carousel afterChange={onChange}>
      {slides}
    </Carousel>
  )
};

export default AppCarousel;