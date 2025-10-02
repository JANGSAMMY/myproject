import Pagination from './Pagination';
import BoardTable from './BoardTable';
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';

const Board1 = () => {
    const url = `https://gist.githubusercontent.com/JANGSAMMY/365b8aa0259aa579550d2356dabda1ff/raw/96c103ff0e86f478bd8583777239fbaa413d7d80/gistfile1.txt`;
    const { state: posts, loading, error } = useAxios(url);

    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 10;
    const totalPage = posts.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const currentPosts = posts.slice(firstPost, lastPost);

    const onCurrent = (id) => {
        setCurrentPage(id);
    };
    return (
        <div className="inner">
            <BoardTable currentPosts={currentPosts} loading={loading} />
            <Pagination pageNumber={pageNumber} onCurrent={onCurrent} />
        </div>
    );
};

export default Board1;
