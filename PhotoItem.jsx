import { Link } from 'react-router-dom';

const PhotoItem = ({ item }) => {
    const { id, name, description, photo } = item;
    return (
        <li>
            <Link to={`/photo/${id}`}>
                <h3>{name}</h3>
                <p>
                    <img src={photo} alt={name} />
                </p>
                <p>{description}</p>
            </Link>
        </li>
    );
};

export default PhotoItem;
