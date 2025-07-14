import styled from 'styled-components';
export const HeaderStyle = styled.header`
    width: 100%;
    /* border-bottom: 1px solid orange; */
    .inner {
        width: 1400px;
        height: 120px;
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
        height: 350px;
        margin: auto;
        padding: 55px 0;
        .top {
            position: absolute;
            right: 5%;
            top: -40px;
        }
        p {
            &:nth-of-type(1) {
                border-bottom: 1px solid #d9d9d9;
                padding-bottom: 30px;
                margin-bottom: 30px;
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
                    padding-top: 30px;
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
