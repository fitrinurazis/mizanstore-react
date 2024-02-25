import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../../assets/img/baner_baru_contoh_bundling_novel.png";
import slide2 from "../../assets/img/baner_baru_contoh_so_diary_of_a_void.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mx-auto max-w-screen-md p-5 md:p-8">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
