import { AppButton } from "@/components";
import { openLink } from "@/utils/helper";
import { Carousel } from "antd"

const HomepageCarousel = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} className="main-carousel">
      <div className="carousel-slide font-Georgia">
        <div className="carousel-overlay -z-50"></div>
        <div className="relative w-[90%] md:w-[430px] mx-auto md:ml-[250px] md:mr-auto h-[100%] z-50">
          <div className="py-[25vh]">
            <h3 className="leading-tight">Welcome to Sovereign Grace Bible Church</h3>
            <AppButton
              text="Live Stream"
              className="my-[50px]"
              onClick={() => openLink("https://www.youtube.com/@SGBCLagos")}
            />
            <p>On Sundays 9:00AM and 5:00PM</p>
          </div>
        </div>
      </div>
      <div className="carousel-slide font-Georgia">
        <div className="carousel-overlay -z-50"></div>
        <div className="relative w-[90%] md:w-[430px] mx-auto md:ml-[250px] md:mr-auto h-[100%] z-50">
          <div className="py-[25vh]">
            <h3 className="leading-tight font-Georgia">Welcome to Sovereign Grace Bible Church</h3>
            <AppButton
              text="Live Stream"
              className="my-[50px]"
            />
            <p>On Sundays 9:00AM and 5:00PM</p>
          </div>
        </div>
      </div>
      <div className="carousel-slide font-Georgia">
        <div className="carousel-overlay -z-50"></div>
        <div className="relative w-[90%] md:w-[430px] mx-auto md:ml-[250px] md:mr-auto h-[100%] z-50">
          <div className="py-[25vh]">
            <h3 className="leading-tight">Welcome to Sovereign Grace Bible Church</h3>
            <AppButton
              text="Live Stream"
              className="my-[50px]"
            />
            <p>On Sundays 9:00AM and 5:00PM</p>
          </div>
        </div>
      </div>
    </Carousel>
  )
};

export default HomepageCarousel;