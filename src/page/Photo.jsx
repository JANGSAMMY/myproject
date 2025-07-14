import Content1 from '../components/photo/Content1';
import { PhotoConStyle, PhotoStyle } from '../components/photo/photo';
import { Container } from './style';

const Photo = () => {
    return (
        <Container>
            <PhotoStyle>
                <h2>Dog's Life</h2>
            </PhotoStyle>
            <PhotoConStyle>
                <Content1 />
            </PhotoConStyle>
        </Container>
    );
};

export default Photo;
