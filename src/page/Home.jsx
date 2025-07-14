import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HomeStyle } from '../components/home/home';

import { Container } from './style';
import Content1 from '../components/content1/Content1';
import Content2 from '../components/content2/Content2';

const Home = () => {
    return (
        <HomeStyle>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <img src="./images/banner1.png" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner2.png" alt="2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner3.png" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner4.png" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner5.png" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner6.png" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner7.png" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner8.png" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/banner9.png" alt="3" />
                </SwiperSlide>
            </Swiper>
            <Container>
                <Content1 />
            </Container>
            <Container>
                <Content2 />
            </Container>
        </HomeStyle>
    );
};

export default Home;
