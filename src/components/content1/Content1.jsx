import { ContentCon1Style } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Content1 = () => {
    return (
        <ContentCon1Style>
            <div className="inner">
                <h2>유기견</h2>
                <p>
                    우리들의 욕심으로 생겨난 이름, <strong>'유기견'</strong>
                </p>

                <Swiper
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    className="dogSwiper"
                >
                    <SwiperSlide>
                        <img src="/images/mainsect0.jpg" alt="유기견1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/mainsect1.jpg" alt="유기견2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/mainsect2.jpg" alt="유기견3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/mainsect3.jpg" alt="유기견3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/mainsect4.png" alt="유기견3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </ContentCon1Style>
    );
};

export default Content1;
