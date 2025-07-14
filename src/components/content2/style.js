import styled from 'styled-components';
export const Content1Style = styled.div`
    width: 100%;
    height: 800px;
    margin: auto;
    h2 {
        text-align: center;
        margin-bottom: 15px;
    }
    p {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 30px;
        strong {
            font-size: 25px;
            font-weight: 600;
            color: brown;
        }
    }
    .box {
        border-top: 30px;
        position: relative;
        .left {
            h3 {
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                margin: 20px 0;
            }
            position: absolute;
            left: 10%;
        }
        .right {
            h3 {
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                margin: 20px 0;
            }
            position: absolute;
            right: 10%;
        }
    }
    .swiper {
        width: 300px;
        height: 400px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .swiper-slide:nth-child(1n) {
        background-color: rgb(206, 17, 17);
    }

    .swiper-slide:nth-child(2n) {
        background-color: rgb(0, 140, 255);
    }

    .swiper-slide:nth-child(3n) {
        background-color: rgb(10, 184, 111);
    }

    .swiper-slide:nth-child(4n) {
        background-color: rgb(211, 122, 7);
    }

    .swiper-slide:nth-child(5n) {
        background-color: rgb(118, 163, 12);
    }

    .swiper-slide:nth-child(6n) {
        background-color: rgb(180, 10, 47);
    }

    .swiper-slide:nth-child(7n) {
        background-color: rgb(35, 99, 19);
    }

    .swiper-slide:nth-child(8n) {
        background-color: rgb(0, 68, 255);
    }

    .swiper-slide:nth-child(9n) {
        background-color: rgb(218, 12, 218);
    }

    .swiper-slide:nth-child(10n) {
        background-color: rgb(54, 94, 77);
    }
`;
