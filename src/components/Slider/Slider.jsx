import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from "../../utils/images";
import Slider from "react-slick";
import "./Slider.scss";

const SliderBar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="">
      {sliderImages.map((img, index) => (
        <div key={index} className="hero-slider">
          <img src={img} alt="slider" className="hero-slider-item" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderBar;
