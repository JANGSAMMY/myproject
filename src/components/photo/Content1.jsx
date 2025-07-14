import { Container } from '../../page/style';
import PhotoList from './PhotoList';
import { PhotoConStyle } from './photo';
const Content1 = () => {
    return (
        <Container>
            <PhotoConStyle>
                <div className="inner">
                    <h2>강아지 프로필</h2>
                    <PhotoList />
                </div>
            </PhotoConStyle>
        </Container>
    );
};

export default Content1;
