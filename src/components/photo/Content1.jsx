import { Container } from '../../page/style';
import PhotoList from './PhotoList';
import { PhotoConStyle } from './photo';
const Content1 = () => {
    return (
        <Container>
            <PhotoConStyle>
                <div className="inner">
                    <PhotoList />
                </div>
            </PhotoConStyle>
        </Container>
    );
};

export default Content1;
