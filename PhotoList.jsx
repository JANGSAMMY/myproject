import { PhotoUl } from './photo';
import data from '../../assets/data';
import PhotoItem from './PhotoItem';

const PhotoList = () => {
    return (
        <PhotoUl>
            {data.map((item) => (
                <PhotoItem key={item.id} item={item} />
            ))}
        </PhotoUl>
    );
};

export default PhotoList;
