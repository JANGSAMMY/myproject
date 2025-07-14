import { Content1Style } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Content2 = () => {
    return (
        <Content1Style>
            <div className="inner">
                <h2>포토카드</h2>
                <p>
                    사랑스러운 이들의 <strong>'일상샷'</strong>
                </p>
                <div className="box">
                    <div className="left">
                        <h3>Dog</h3>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/images/content2_1.png" alt="강아지1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/content2_2.png" alt="강아지2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/content2_3.png" alt="강아지3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/content2_4.png" alt="강아지4" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/content2_5.png" alt="강아지5" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/content2_6.png" alt="강아지6" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="right">
                        <h3>Baby</h3>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/images/right1.png" alt="강아지1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/right2.png" alt="강아지2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/right3.png" alt="강아지3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/right4.png" alt="강아지4" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/right5.png" alt="강아지5" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/right6.png" alt="강아지6" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Content1Style>
    );
};

export default Content2;
