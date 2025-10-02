import styled from 'styled-components';
export const PhotoStyle = styled.div`
    width: 100%;
    height: 800px;
    background-image: url('./images/banner5.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PhotoConStyle = styled.div`
    width: 100%;
    text-align: center;

    .txt {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
`;
export const PhotoUl = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 30px;

    li {
        width: 320px;
        border: 1px solid #fff;
        padding: 15px;
        text-align: center;
        gap: 50px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgb(112, 112, 112);
        padding: 16px;
        margin-bottom: 24px;
        transition: 0.2s ease-in-out;
        h3 {
            /* font-size: 25px;
            font-weight: 600;
            margin-bottom: 15px; */
            font-size: 30px;
            margin-bottom: 30px;
            font-weight: 600;
            color: brown;
        }
        p {
            font-size: 18px;
            text-align: left;

            img {
                width: 100%;
                transition: 0.3s;
            }
            &:hover {
                img {
                    transform: scale(1.2);
                }
            }
        }
    }
`;
