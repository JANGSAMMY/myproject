const PaginationItem = ({ item, onCurrent }) => {
    return (
        <a href="#" onClick={() => onCurrent(item)}>
            {item}
        </a>
    );
};

export default PaginationItem;
