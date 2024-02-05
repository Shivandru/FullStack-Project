import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import swiper1 from "../assets/jd-Assets/swiper1.png";
import swiper2 from "../assets/jd-Assets/swiper2.jpeg";
import SwiperCard from "./SwiperCard";
import SubSwiper from "./SubSwiper";
import NavSection from "./NavSection";
import { Box } from "@chakra-ui/react";
function SwipingComponent() {
  return (
    <Box w={{ base: "100%", md: "50%" }}
    bg="ternary"
    zIndex="1"
    padding="1rem">
      <NavSection />
      <Swiper
        spaceBetween={30}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperCard swiperImage={swiper1} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard swiperImage={swiper2} />
        </SwiperSlide>
      </Swiper>
      <SubSwiper />
    </Box>
  );
}

export default SwipingComponent;
