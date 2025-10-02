import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <footer className="inner">
                <p>
                    <a href="#">개인정보처리방침</a>
                    <a href="#">영상정보처리기기 운영·관리 방침</a>
                    <a href="#">저작권정책</a>
                    <a href="#">RSS</a>
                    <a href="#">누리집 지도</a>
                    <a href="#">유기견 봉사활동 지역</a>
                </p>
                <ul class="util">
                    <li>
                        <a href="#">본관 [03045] 경기도 용인시 삼청로 37 TEL 02-3704-3114</a>
                    </li>
                    <li>
                        <a href="#">
                            경기도 [10859] 경기도 용인시 삼천로 테헤란로 101 TEL 031-580-5800~1
                        </a>
                    </li>
                    <li>
                        <a href="#">Copyright © 유기견 보호소. All Rights Reserved</a>
                    </li>
                </ul>
            </footer>
        </FooterStyle>
    );
};

export default Footer;
