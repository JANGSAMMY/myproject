import styled from 'styled-components';
// 공통
export const Container = styled.main`
    width: 100%;
    .inner {
        padding: 120px 0;
    }
    h2 {
        font-size: 40px;
        font-weight: 600;
        color: #fff;
    }
`;
export const DetailStyle = styled.article`
    .inner {
        padding: 120px 0;
    }
    h2 {
        padding-bottom: 50px;
        text-align: center;
    }

    .con-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        position: relative;
        img {
            width: 100%;
        }
        h3 {
            font-size: 30px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 30px;
            color: orange;
        }
        .left {
            margin-right: 120px;

            p {
                text-align: center;
                justify-content: center;
                align-items: center;
                img {
                    width: 500px;
                }

                button {
                    &:hover {
                        cursor: pointer;
                    }
                    width: 120px;
                    height: 40px;
                    background: orange;
                    border: none;
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    &:first-child {
                        position: absolute;
                        left: 0;
                    }
                    &:last-child {
                        position: absolute;
                        left: 27%;
                    }
                }
            }
        }
        .right {
            flex: 1;
            p {
                line-height: 1.8;
                text-align: left;
                margin: 0;
            }
        }
    }
`;
