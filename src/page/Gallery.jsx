import { useState } from 'react';
import GalleryInput from '../components/gallery/GalleryInput';
import GalleryList from '../components/gallery/GalleryList';
import GalleryVisual from '../components/gallery/GalleryVisual';
import useAxios from '../hooks/useAxios';
import { Container } from './style';

const Gallery = () => {
    const [text, setText] = useState('dog');
    const API_URL = `51124014-9516025b6ac7df1ed9dc54e62`;
    const url = `https://pixabay.com/api/?key=${API_URL}&q=${text}&image_type=photo`;
    const { state: data, loading, error } = useAxios(url);
    const onSearch = (txt) => {
        setText(txt);
    };
    if (loading) {
        return <div>로딩중...</div>;
    }
    if (error) {
        return <div>에러메시지</div>;
    }
    if (!data) {
        return null;
    }
    return (
        <Container>
            <GalleryVisual />
            <div className="inner">
                <GalleryInput onSearch={onSearch} />
                <GalleryList data={data.hits} />
            </div>
        </Container>
    );
};

export default Gallery;
