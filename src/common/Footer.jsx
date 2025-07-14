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
                    <a href="#">민속생활사박물관 협력망사업</a>
                </p>
                <ul class="util">
                    <li>
                        <a href="#">본관 [03045] 서울시 종로구 삼청로 37 TEL 02-3704-3114</a>
                    </li>
                    <li>
                        <a href="#">
                            서울시 [10859] 경기도 서울시 강남구 테헤란로 101 TEL 031-580-5800~1
                        </a>
                    </li>
                    <li>
                        <a href="#">Copyright © 국립민속박물관. All Rights Reserved</a>
                    </li>
                </ul>
            </footer>
        </FooterStyle>
    );
};

export default Footer;
