import { useNavigate, useParams } from 'react-router-dom';
import { Container, DetailStyle } from './style';
import data from '../assets/data';
import { useEffect } from 'react';

const PhotoDetail = () => {
    const navigate = useNavigate();
    const { photoID } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const thisPhoto = data.find((item) => item.id === Number(photoID));
    if (!thisPhoto) {
        return <div>해당 견종을 찾을 수 없습니다.</div>;
    }
    const { id, name, description, photo, desc } = thisPhoto;
    const onGo1 = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };
    const onGo2 = () => {
        navigate('/photo');
    };
    return (
        <Container>
            <DetailStyle>
                <div className="inner">
                    <h2>{name} 상세 페이지</h2>
                    <article className="con-box">
                        <div className="left">
                            <h3>{name}</h3>
                            <p>
                                <img src={photo} alt={name} />
                            </p>

                            <p>
                                <button onClick={onGo1}>첫페이지</button>
                                <button onClick={onGo2}>목록</button>
                            </p>
                        </div>
                        <div className="right">
                            <p>{desc}</p>
                        </div>
                    </article>
                </div>
            </DetailStyle>
        </Container>
    );
};

export default PhotoDetail;
