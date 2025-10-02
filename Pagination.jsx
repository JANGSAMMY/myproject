import PaginationItem from './PaginationItem';
import { PagingStyle } from './board';

const Pagination = ({ pageNumber, onCurrent }) => {
    const arr = [...Array(pageNumber)].map((_, i) => i + 1);

    return (
        <PagingStyle>
            {arr.map((item) => (
                <PaginationItem key={item} item={item} onCurrent={onCurrent} />
            ))}
        </PagingStyle>
    );
};

export default Pagination;
