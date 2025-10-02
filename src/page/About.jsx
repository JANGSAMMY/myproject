import { AbpoutConStyle } from '../components/about/about';
import AboutVisual from '../components/about/AboutVisual';
import { Container } from './style';
const About = () => {
    return (
        <Container>
            <AboutVisual />
            <div className="inner">
                <AbpoutConStyle>
                    <h2>Ella Kim</h2>
                    <div className="txt">
                        <img src="./images/dogtrainer.jpg" alt="" style={{ height: '800px' }} />
                        <p>
                            저는 'The Paw Bridge'를 단순한 웹사이트가 아닌, 관심과 행동을 연결하는
                            디지털 보호소라고 생각합니다.
                            <br />
                            매년 수많은 유기견들이 우리의 도움을 기다리고 있습니다. 이 문제는
                            숫자로만 존재하는 것이 아니라, 하나하나 따뜻한 이름을 가진 소중한 생명의
                            이야기입니다. 저는 기술과 디자인을 통해 이 슬픈 현실을 외면하지 않고,
                            사람들의 작은 관심이 어떻게 큰 변화를 만들어낼 수 있는지를 보여주고
                            싶었습니다.
                            <br />
                            여러분의 잠시의 머무름이 한 생명의 삶을 바꿀 수 있습니다. 이 작은 화면을
                            통해 사랑과 책임을 나누어 주시길 진심으로 부탁드립니다.
                            <br />
                            <br />
                            I view 'The Paw Bridge' not merely as a website, but as a digital
                            shelter connecting concern with action. <br />
                            Every year, countless abandoned dogs await our help. This issue is not
                            just a statistic; it is the story of precious lives, each one with a
                            warm name. Through technology and design, I wanted to show that we will
                            not turn away from this sad reality, and that a small spark of human
                            interest can ignite immense change.
                            <br />
                            Your brief visit here has the power to change a life. I sincerely ask
                            that you share your love and responsibility through this small screen.
                        </p>
                    </div>
                </AbpoutConStyle>
            </div>
        </Container>
    );
};

export default About;
