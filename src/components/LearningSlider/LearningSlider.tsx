import "./LearningSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useRef } from "react";

const slides = [
  {
    title: "The Basics of Photosynthesis",
    tag: "Biology",
    description: "An introduction to how plants convert light into energy.",
    thumbnail: "https://img.youtube.com/vi/UPBMG5EYydo/0.jpg",
    time: "5:12",
    hyperlink: "https://www.youtube.com/watch?v=UPBMG5EYydo",
  },
  {
    title: "Understanding Newton's Laws of Motion",
    tag: "Physics",
    description: "A comprehensive guide to Newton's three laws of motion.",
    thumbnail: "https://img.youtube.com/vi/kKKM8Y-u7ds/0.jpg",
    time: "7:45",
    hyperlink: "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
  },
  {
    title: "Understanding Climate Change",
    tag: "Climate",
    description:
      "An insightful explanation of the science behind climate change and its global impact.",
    thumbnail: "https://img.youtube.com/vi/EtW2rrLHs08/0.jpg",
    time: "12:30",
    hyperlink: "https://www.youtube.com/watch?v=EtW2rrLHs08",
  },
  {
    title: "Introduction to Basic Algebra",
    tag: "Math",
    description:
      "A beginner's tutorial on understanding algebraic expressions and equations.",
    thumbnail: "https://img.youtube.com/vi/5ANcspdYh_U/0.jpg",
    time: "9:30",
    hyperlink: "https://www.youtube.com/watch?v=5ANcspdYh_U",
  },
  {
    title: "The Solar System: Our Home in Space",
    tag: "Space",
    description:
      "Explore the planets, moons, and other celestial bodies that make up our solar system.",
    thumbnail: "https://img.youtube.com/vi/libKVRa01L8/0.jpg",
    time: "12:15",
    hyperlink: "https://www.youtube.com/watch?v=libKVRa01L8",
  },
  {
    title: "The History of the Internet",
    tag: "Internet",
    description:
      "A documentary on how the internet started and evolved over the years.",
    thumbnail: "https://img.youtube.com/vi/9hIQjrMHTv4/0.jpg",
    time: "10:01",
    hyperlink: "https://www.youtube.com/watch?v=9hIQjrMHTv4",
  },
];

export const LearningSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="learning-container">
      <div className="slider-header">
        <h3>Learning</h3>
        <div className="slides-navigation">
          <span>See all</span>
          <div className="custom-nav-buttons">
            <button ref={prevRef} className="custom-prev-button">
              &lt;
            </button>
            <button ref={nextRef} className="custom-next-button">
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          690: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          970: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="slide-container">
              <img src={slide.thumbnail} width="200px" className="thumbnail" />
              <span className="time">{slide.time}</span>
              <div className="description-block">
                <span>{slide.tag}</span>
                <h4>{slide.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
