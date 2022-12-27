// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import SwiperCore,{Autoplay} from 'swiper'

export default () => {

  SwiperCore.use([Autoplay])
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    autoplay={{
      delay : 2000
    }}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    
      <SwiperSlide>
      <Image
      src="/../public/images/banner.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
      </SwiperSlide>

      <SwiperSlide>
      <Image
      src="/../public/images/desp.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
      </SwiperSlide>

      <SwiperSlide>
      <Image
      src="/../public/images/doc.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
      </SwiperSlide>

      <SwiperSlide>
      <Image
      src="/../public/images/flayer.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
      </SwiperSlide>
    </Swiper>
  );
};
