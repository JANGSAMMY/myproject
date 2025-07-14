import styled from 'styled-components';
export const ContentCon1Style = styled.div`
    width: 100%;
    height: 800px;
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
    .swiper {
        width: 100%;
        height: 500px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #444;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
