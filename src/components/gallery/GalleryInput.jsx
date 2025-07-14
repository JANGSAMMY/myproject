import { useState } from 'react';
import { GalleryInputStyle } from './style';

const GalleryInput = ({ onSearch }) => {
    const [text, setText] = useState('');
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    };
    return (
        <GalleryInputStyle onSubmit={onSubmit}>
            <p>
                <input
                    type="text"
                    onChange={changeInput}
                    name=""
                    id=""
                    placeholder="강아지를 검색하세요"
                />
                <button type="submit">검색</button>
            </p>
            <p>
                <i>X</i>
                <span>dog</span>
                <span>강아지</span>
                <span>동물</span>
            </p>
        </GalleryInputStyle>
    );
};

export default GalleryInput;
