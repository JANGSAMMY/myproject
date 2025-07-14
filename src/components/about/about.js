import styled from 'styled-components';
export const AboutVisualStyle = styled.div`
    width: 100%;
    height: 800px;
    background-image: url('./images/banner3.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        font-weight: 40;
        font-weight: 700;
    }
`;
export const AbpoutConStyle = styled.section`
    width: 100%;
    h2 {
        font-size: 30px;
        margin-bottom: 30px;
        font-weight: 600;
        color: brown;
    }
    .txt {
        display: flex;
        justify-content: space-between;
        gap: 30px;

        p {
            margin-top: 60px;
            font-weight: 18px;
            line-height: 1.8;
        }
    }
`;
