import styled from 'styled-components';
export const HeaderStyle = styled.header`
    width: 100%;
    /* border-bottom: 1px solid orange; */
    .inner {
        width: 1400px;
        height: 100px;
        position: relative;

        h1 {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            display: block;
        }
    }
`;
export const FooterStyle = styled.footer`
    background: #dcdcdc;
    width: 100%;
    .inner {
        width: 1400px;
        height: 180px;
        margin: auto;
        padding: 15px 0;
        font-size: 14px;
        .top {
            position: absolute;
            right: 5%;
            top: 0;
        }
        p {
            &:nth-of-type(1) {
                border-bottom: 1px solid #d9d9d9;
                padding: 15px 0;

                a {
                    margin-right: 20px;
                }
            }
        }
        ul {
            li {
                margin-right: 20px;
                position: relative;
                &:last-child {
                    padding: 15px 0;
                }
            }
        }
    }
`;

export const NavStyle = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        gap: 80px;
        margin-top: 40px;
        li {
            a {
                font-size: 20px;
                &:hover {
                    color: orange;
                }
            }
        }
    }
`;
export const InnerStyle = styled.div`
    height: 120px;
    margin: auto;
    position: relative;
`;
